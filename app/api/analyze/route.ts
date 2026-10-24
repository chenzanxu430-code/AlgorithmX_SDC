import { NextResponse } from 'next/server';
import { enhanceAnalysisWithAi } from '@/lib/ai-analysis';
import { analyzeWithRules } from '@/lib/rule-engine';
import type { AnalyzeRequest, ApiError } from '@/lib/types';

type FieldErrors = NonNullable<ApiError['error']['fieldErrors']>;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ApiError>(
      {
        error: {
          code: 'INVALID_JSON',
          message: '请求体必须是合法的 JSON。',
        },
      },
      { status: 400 },
    );
  }

  if (!isRecord(body)) {
    return NextResponse.json<ApiError>(
      {
        error: {
          code: 'VALIDATION_ERROR',
          message: '请求体必须是 JSON 对象。',
        },
      },
      { status: 400 },
    );
  }

  const fieldErrors: FieldErrors = {};

  if (typeof body.currentRole !== 'string' || body.currentRole.trim() === '') {
    fieldErrors.currentRole = ['currentRole 不能为空。'];
  }

  if (!isNonEmptyStringArray(body.dailyTasks)) {
    fieldErrors.dailyTasks = ['dailyTasks 必须是非空字符串数组，且至少包含一项非空任务。'];
  }

  if (!isNonEmptyStringArray(body.existingSkills)) {
    fieldErrors.existingSkills = ['existingSkills 必须是非空字符串数组，且至少包含一项技能。'];
  }

  if (
    typeof body.weeklyStudyHours !== 'number' ||
    !Number.isFinite(body.weeklyStudyHours) ||
    body.weeklyStudyHours <= 0
  ) {
    fieldErrors.weeklyStudyHours = ['weeklyStudyHours 必须是大于 0 的数字。'];
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json<ApiError>(
      {
        error: {
          code: 'VALIDATION_ERROR',
          message: '请求参数校验失败，请检查提交内容。',
          fieldErrors,
        },
      },
      { status: 400 },
    );
  }

  const input: AnalyzeRequest = {
    currentRole: (body.currentRole as string).trim(),
    dailyTasks: (body.dailyTasks as string[]).map((task) => task.trim()).filter(Boolean),
    existingSkills: (body.existingSkills as string[]).map((skill) => skill.trim()).filter(Boolean),
    experienceYears:
      typeof body.experienceYears === 'number' && Number.isFinite(body.experienceYears)
        ? body.experienceYears
        : 0,
    interests: Array.isArray(body.interests)
      ? body.interests
          .filter((item): item is string => typeof item === 'string')
          .map((item) => item.trim())
          .filter(Boolean)
      : [],
    weeklyStudyHours: body.weeklyStudyHours as number,
    scenario: body.scenario === 'fast' ? 'fast' : 'slow',
    targetDirections: readStringArray(body.targetDirections),
    workPreferences: readStringArray(body.workPreferences),
    growthPriorities: readStringArray(body.growthPriorities),
  };

  const ruleResult = analyzeWithRules(input);
  let result = ruleResult;

  try {
    const enhanced = await enhanceAnalysisWithAi(input, ruleResult);
    if (enhanced) {
      result = enhanced;
    }
  } catch (error) {
    console.warn(
      '[analyze] AI enhancement failed; using rule-based result.',
      error instanceof Error ? error.message : error,
    );
  }

  return NextResponse.json(result, {
    status: 200,
    headers: {
      'X-Analysis-Engine': result === ruleResult ? 'rules' : 'ai',
    },
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isNonEmptyStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every((item): item is string => typeof item === 'string') &&
    value.some((item) => item.trim().length > 0)
  );
}

function readStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value
        .filter((item): item is string => typeof item === 'string')
        .map((item) => item.trim())
        .filter(Boolean)
    : [];
}
