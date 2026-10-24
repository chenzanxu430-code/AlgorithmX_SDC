import { isWorkforceTrendSnapshot, type AnalyzeRequest, type AnalyzeResponse } from './types';

const SESSION_STORAGE_KEY = 'ai-nav:v2:analysis-session';
const LEGACY_RESULT_STORAGE_KEY = 'ai-nav:v1:analysis-result';

export type AnalysisSession = {
  result: AnalyzeResponse;
  input: AnalyzeRequest | null;
  savedAt: string;
};

export function saveAnalysisSession(session: AnalysisSession): void {
  window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  window.sessionStorage.removeItem(LEGACY_RESULT_STORAGE_KEY);
}

export function loadAnalysisSession(): AnalysisSession | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const raw = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (isAnalysisSession(parsed)) {
        return parsed;
      }
      window.sessionStorage.removeItem(SESSION_STORAGE_KEY);
    }
    return loadLegacySession();
  } catch {
    return null;
  }
}

function loadLegacySession(): AnalysisSession | null {
  let raw: string | null;

  try {
    raw = window.sessionStorage.getItem(LEGACY_RESULT_STORAGE_KEY);
  } catch {
    return null;
  }

  if (!raw) {
    return null;
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!isAnalyzeResponse(parsed)) {
      return null;
    }
    return { result: parsed, input: null, savedAt: '' };
  } catch {
    return null;
  }
}

export function isAnalysisSession(value: unknown): value is AnalysisSession {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return (
    isAnalyzeResponse(candidate.result) &&
    (candidate.input === null || isAnalyzeRequest(candidate.input)) &&
    typeof candidate.savedAt === 'string'
  );
}

export function isAnalyzeRequest(value: unknown): value is AnalyzeRequest {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return (
    typeof candidate.currentRole === 'string' &&
    candidate.currentRole.trim() !== '' &&
    Array.isArray(candidate.dailyTasks) &&
    candidate.dailyTasks.length > 0 &&
    candidate.dailyTasks.every((item) => typeof item === 'string') &&
    Array.isArray(candidate.existingSkills) &&
    candidate.existingSkills.every((item) => typeof item === 'string') &&
    typeof candidate.experienceYears === 'number' &&
    Number.isFinite(candidate.experienceYears) &&
    Array.isArray(candidate.interests) &&
    candidate.interests.every((item) => typeof item === 'string') &&
    (candidate.targetDirections === undefined ||
      (Array.isArray(candidate.targetDirections) &&
        candidate.targetDirections.every((item) => typeof item === 'string'))) &&
    (candidate.workPreferences === undefined ||
      (Array.isArray(candidate.workPreferences) &&
        candidate.workPreferences.every((item) => typeof item === 'string'))) &&
    (candidate.growthPriorities === undefined ||
      (Array.isArray(candidate.growthPriorities) &&
        candidate.growthPriorities.every((item) => typeof item === 'string'))) &&
    typeof candidate.weeklyStudyHours === 'number' &&
    Number.isFinite(candidate.weeklyStudyHours) &&
    candidate.weeklyStudyHours > 0 &&
    (candidate.scenario === 'slow' || candidate.scenario === 'fast')
  );
}

export function isAnalyzeResponse(value: unknown): value is AnalyzeResponse {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return (
    Array.isArray(candidate.extractedSkills) &&
    Array.isArray(candidate.taskChanges) &&
    Array.isArray(candidate.recommendedRoles) &&
    Array.isArray(candidate.skillGaps) &&
    Array.isArray(candidate.learningPlan) &&
    Array.isArray(candidate.sdgLinks) &&
    typeof candidate.scenarioNote === 'string' &&
    (candidate.trendSnapshot === undefined || isWorkforceTrendSnapshot(candidate.trendSnapshot))
  );
}
