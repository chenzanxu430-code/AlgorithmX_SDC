/**
 * Contract for the prototype's single analysis endpoint.
 *
 * POST /api/analyze
 * Request: AnalyzeRequest
 * Success: 200 AnalyzeResponse
 * Failure: 400 | 500 ApiError
 *
 * Type-only module: no runtime logic, no mock data.
 */

/** Transition pace. `slow` = 12-month horizon, `fast` = 6-month horizon. */
export type Scenario = 'slow' | 'fast';

/** Integer score from 0 to 100. */
export type Score = number;

export type Priority = 'high' | 'medium' | 'low';

export interface AnalyzeRequest {
  /** Current job title, e.g. "电商运营专员". 1–80 characters. */
  currentRole: string;
  /** Recurring tasks, 1–20 items. */
  dailyTasks: string[];
  /** Self-declared skills, 0–30 items. */
  existingSkills: string[];
  /** Years of relevant experience, integer 0–50. */
  experienceYears: number;
  /** Interests, 0–10 items. */
  interests: string[];
  /** Study hours available per week, 1–40. */
  weeklyStudyHours: number;
  scenario: Scenario;
  /** Career directions the user hopes to explore. */
  targetDirections?: string[];
  /** Preferred work conditions. */
  workPreferences?: string[];
  /** Desired outcomes from future career growth. */
  growthPriorities?: string[];
}

/** Citation rendered next to a task or trend claim. */
export interface SourceReference {
  name: string;
  /** Publication date, ISO `YYYY-MM-DD`. */
  date: string;
  /** Absolute URL. */
  url: string;
}

export interface ExtractedSkill {
  name: string;
  /** Evidence from the submitted profile, e.g. a task or self-declared skill. */
  evidence: string;
  /** Relevant Sustainable Development Goal contribution(s). */
  sdgLinks?: SdgLink[];
}

/** How much a task is reshaped by AI. */
export type TaskChangeType = 'automated' | 'augmented' | 'unchanged';

/** Coarse capability bucket used by the report's skill profile. */
export type SkillCategory = 'data' | 'collaboration' | 'process' | 'content' | 'general';

export interface TaskChange {
  task: string;
  /** 0–100: how much AI can take over or materially accelerate the task. */
  aiImpact: Score;
  /** 0–100: how much the task still relies on human judgment and accountability. */
  humanJudgment: Score;
  /** Derived server-side so the UI does not re-guess the thresholds. */
  changeType?: TaskChangeType;
  source: SourceReference;
}

export interface RecommendedRole {
  title: string;
  /** 0–100 fit score; higher means closer to the submitted profile. */
  matchScore: Score;
  reasons: string[];
  matchedSkills: string[];
  missingSkills: string[];
  /** Interests from the profile that this role matches. */
  interestMatches?: string[];
  /** 0–100 experience fit against the role's typical years. */
  experienceFit?: number;
  /** How this career path can contribute to the Sustainable Development Goals. */
  sdgLinks?: SdgLink[];
}

export type SkillGapStatus = 'strength' | 'gap';

export interface SkillGap {
  skill: string;
  status: SkillGapStatus;
  priority: Priority;
  category?: SkillCategory;
  /** How many recommended roles require this skill. */
  neededBy?: number;
  /** Relevant Sustainable Development Goal contribution(s). */
  sdgLinks?: SdgLink[];
}

export interface LearningResource {
  name: string;
  url: string;
  provider?: string;
  /** ISO `YYYY-MM-DD`. */
  publishedAt?: string;
}

export interface LearningPlanStep {
  /** Human-readable action; array order defines the sequence. */
  step: string;
  /** Must match a SkillGap with status "gap". */
  skillGap: string;
  /** Positive integer. */
  estimatedHours: number;
  resource: LearningResource;
  /** 1-based week window derived from weeklyStudyHours. */
  weekStart?: number;
  weekEnd?: number;
  phase?: '起步' | '进阶' | '巩固';
}

export interface SdgLink {
  /** Goal label including number, e.g. "SDG 8 体面工作和经济增长". */
  goal: string;
  reason: string;
  reasonEn?: string;
}

/** Aggregated numbers shown in the report summary bar. */
export interface AnalyzeMetrics {
  skillCount: number;
  gapCount: number;
  strengthCount: number;
  totalHours: number;
  totalWeeks: number;
  highRiskTaskCount: number;
}

/** How the report was produced, plus the sources it cites. */
export interface AnalyzeMethodology {
  matchFormula: string;
  priorityRule: string;
  durationRule: string;
  sources: { name: string; date: string; url: string; usedFor: string }[];
}

export interface WorkforceSkillTrend {
  skillId: string;
  skillNameEn: string;
  skillNameZh: string;
  currentRate: number;
  previousRate: number;
  changePp: number;
  trend: string;
}

export interface WorkforceTrendPath {
  trackId: string;
  fromRoleEn: string;
  fromRoleZh: string;
  toRoleEn: string;
  toRoleZh: string;
  currentSampleSize: number;
  previousSampleSize: number;
  transitionFitScore: number;
  scoreChange: number;
  skills: WorkforceSkillTrend[];
}

export interface WorkforceTrendSnapshot {
  version: string;
  lastUpdated: string;
  country: string;
  targetPopulation: string;
  jobFamily: string;
  sourceFamily: string;
  currentPeriod: string;
  previousPeriod: string;
  methodology: string;
  limitations: string[];
  paths: WorkforceTrendPath[];
}

export interface AnalyzeResponse {
  extractedSkills: ExtractedSkill[];
  taskChanges: TaskChange[];
  recommendedRoles: RecommendedRole[];
  skillGaps: SkillGap[];
  learningPlan: LearningPlanStep[];
  sdgLinks: SdgLink[];
  /** States the active scenario and that results are estimates, not guarantees. */
  scenarioNote: string;
  metrics?: AnalyzeMetrics;
  methodology?: AnalyzeMethodology;
  trendSnapshot?: WorkforceTrendSnapshot;
}

export function isWorkforceTrendSnapshot(value: unknown): value is WorkforceTrendSnapshot {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value.version === 'string' &&
    typeof value.lastUpdated === 'string' &&
    typeof value.country === 'string' &&
    typeof value.targetPopulation === 'string' &&
    typeof value.jobFamily === 'string' &&
    typeof value.sourceFamily === 'string' &&
    typeof value.currentPeriod === 'string' &&
    typeof value.previousPeriod === 'string' &&
    typeof value.methodology === 'string' &&
    Array.isArray(value.limitations) &&
    value.limitations.every((limitation) => typeof limitation === 'string') &&
    Array.isArray(value.paths) &&
    value.paths.every(isWorkforceTrendPath)
  );
}

function isWorkforceTrendPath(value: unknown): value is WorkforceTrendPath {
  return (
    isRecord(value) &&
    typeof value.trackId === 'string' &&
    typeof value.fromRoleEn === 'string' &&
    typeof value.fromRoleZh === 'string' &&
    typeof value.toRoleEn === 'string' &&
    typeof value.toRoleZh === 'string' &&
    isFiniteNumber(value.currentSampleSize) &&
    isFiniteNumber(value.previousSampleSize) &&
    isFiniteNumber(value.transitionFitScore) &&
    isFiniteNumber(value.scoreChange) &&
    Array.isArray(value.skills) &&
    value.skills.every(
      (skill) =>
        isRecord(skill) &&
        typeof skill.skillId === 'string' &&
        typeof skill.skillNameEn === 'string' &&
        typeof skill.skillNameZh === 'string' &&
        isFiniteNumber(skill.currentRate) &&
        isFiniteNumber(skill.previousRate) &&
        isFiniteNumber(skill.changePp) &&
        typeof skill.trend === 'string',
    )
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

export type ApiErrorCode = 'INVALID_JSON' | 'VALIDATION_ERROR' | 'INTERNAL_ERROR';

export interface ApiError {
  error: {
    code: ApiErrorCode;
    message: string;
    fieldErrors?: Partial<Record<keyof AnalyzeRequest, string[]>>;
  };
}
