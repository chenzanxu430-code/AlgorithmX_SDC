import { isAnalyzeResponse } from './storage';
import type { AnalyzeRequest, AnalyzeResponse } from './types';

const fieldLabels: Record<string, string> = {
  currentRole: '当前岗位',
  dailyTasks: '日常任务',
  existingSkills: '已有技能',
  weeklyStudyHours: '每周学习时间',
};

export class AnalysisRequestError extends Error {
  readonly details: string[];

  constructor(message: string, details: string[] = []) {
    super(message);
    this.name = 'AnalysisRequestError';
    this.details = details;
  }
}

export async function requestAnalysis(input: AnalyzeRequest): Promise<AnalyzeResponse> {
  let response: Response;

  try {
    response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
  } catch {
    throw new AnalysisRequestError('无法连接分析服务，请检查网络后重试。');
  }

  const data: unknown = await response.json().catch(() => null);

  if (!response.ok) {
    throw buildApiError(data);
  }

  if (!isAnalyzeResponse(data)) {
    throw new AnalysisRequestError('分析服务返回的数据格式不正确，请稍后重试。');
  }

  return data;
}

function buildApiError(data: unknown): AnalysisRequestError {
  if (typeof data !== 'object' || data === null) {
    return new AnalysisRequestError('生成失败，请稍后重试。');
  }

  const error = (data as { error?: unknown }).error;
  if (typeof error !== 'object' || error === null) {
    return new AnalysisRequestError('生成失败，请稍后重试。');
  }

  const messageValue = (error as { message?: unknown }).message;
  const message = typeof messageValue === 'string' ? messageValue : '生成失败，请稍后重试。';
  const fieldErrors = (error as { fieldErrors?: unknown }).fieldErrors;
  const details: string[] = [];

  if (typeof fieldErrors === 'object' && fieldErrors !== null) {
    for (const [field, messages] of Object.entries(fieldErrors as Record<string, unknown>)) {
      if (!Array.isArray(messages)) {
        continue;
      }
      const label = fieldLabels[field] ?? field;
      for (const item of messages) {
        if (typeof item === 'string') {
          details.push(`${label}：${item}`);
        }
      }
    }
  }

  return new AnalysisRequestError(message, details);
}
