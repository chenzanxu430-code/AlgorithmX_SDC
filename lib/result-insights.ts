import type {
  AnalyzeResponse,
  ExtractedSkill,
  LearningPlanStep,
  LearningResource,
  Priority,
  RecommendedRole,
  SdgLink,
  SkillCategory,
  SkillGap,
  TaskChange,
  TaskChangeType,
} from './types';
import { getRoleSdgLinks, getSkillSdgLinks } from './sdg-mapping';

/* =========================================================
 * 展示用常量
 * ======================================================= */

export const SKILL_CATEGORY_LABEL: Record<SkillCategory, string> = {
  data: '数据与工具',
  collaboration: '沟通与协作',
  process: '业务与流程',
  content: '内容与创意',
  general: '通用能力',
};

export const SKILL_CATEGORY_ORDER: SkillCategory[] = [
  'data',
  'collaboration',
  'process',
  'content',
  'general',
];

export const TASK_CHANGE_LABEL: Record<TaskChangeType, string> = {
  automated: '可自动化替代',
  augmented: 'AI 增强',
  unchanged: '变化较小',
};

export const PRIORITY_META: Record<Priority, { label: string; icon: string }> = {
  high: { label: '高优先级', icon: '↑' },
  medium: { label: '中优先级', icon: '−' },
  low: { label: '低优先级', icon: '✔' },
};

export const PHASES = ['起步', '进阶', '巩固'] as const;
export type Phase = (typeof PHASES)[number];

/* =========================================================
 * 纯函数：分类与分档
 * ======================================================= */

const CATEGORY_RULES: { category: SkillCategory; words: string[] }[] = [
  {
    category: 'data',
    words: [
      'excel', 'sql', 'python', '数据', '统计', '可视化', 'office', 'erp', 'crm', 'bi',
      '编程', '数据库', '系统', '设备', '工具',
    ],
  },
  {
    category: 'collaboration',
    words: ['沟通', '客户', '谈判', '协作', '讲授', '面试', '投诉', '情绪', '团队', '表达'],
  },
  {
    category: 'process',
    words: ['流程', '管理', '项目', '运营', '库存', '质量', '财务', '核算', '税务', '成本', '门店', '仓储', '对接'],
  },
  {
    category: 'content',
    words: ['内容', '文案', '设计', '创作', '社媒', '审美', '素材', '策划', '写作'],
  },
];

/** 个别技能名会误命中关键词，先做精确归类 */
const EXACT_CATEGORY: Record<string, SkillCategory> = {
  时间管理: 'general',
  文档写作: 'general',
  供应商对接: 'general',
  '学习新工具的能力': 'general',
};

export function classifySkillCategory(skill: string): SkillCategory {
  if (EXACT_CATEGORY[skill]) {
    return EXACT_CATEGORY[skill];
  }

  const text = skill.toLowerCase();
  const hit = CATEGORY_RULES.find((rule) => rule.words.some((word) => text.includes(word)));
  return hit ? hit.category : 'general';
}

/**
 * 任务变化类型。阈值与规则引擎保持一致，旧数据也能在前端推导。
 */
export function classifyTaskChange(aiImpact: number, humanJudgment: number): TaskChangeType {
  if (aiImpact >= 70 && humanJudgment < 55) {
    return 'automated';
  }
  if (aiImpact >= 45) {
    return 'augmented';
  }
  return 'unchanged';
}

/* =========================================================
 * 资源名解析（兼容旧数据：`标题 · 机构（日期）`）
 * ======================================================= */

export function parseResource(resource: LearningResource): {
  title: string;
  provider: string;
  publishedAt: string;
} {
  if (resource.provider) {
    return {
      title: resource.name,
      provider: resource.provider,
      publishedAt: resource.publishedAt ?? '',
    };
  }

  const match = resource.name.match(/^(.*?)\s*·\s*(.*?)（(\d{4}-\d{2}-\d{2})）$/);
  if (match) {
    return { title: match[1], provider: match[2], publishedAt: match[3] };
  }

  return { title: resource.name, provider: '', publishedAt: '' };
}

/* =========================================================
 * 学习计划排期
 * ======================================================= */

export type ScheduledStep = LearningPlanStep & {
  weekStart: number;
  weekEnd: number;
  phase: Phase;
};

/** 按顺序给学习步骤排周区间，并划分阶段 */
export function assignSchedule<T extends LearningPlanStep>(
  steps: T[],
  weeklyStudyHours: number,
): (T & { weekStart: number; weekEnd: number; phase: Phase })[] {
  const hoursPerWeek = Math.max(1, weeklyStudyHours || 1);
  let cursor = 1;

  const scheduled = steps.map((step) => {
    const weeks = Math.max(1, Math.ceil(step.estimatedHours / hoursPerWeek));
    const weekStart = cursor;
    const weekEnd = cursor + weeks - 1;
    cursor = weekEnd + 1;
    return { ...step, weekStart, weekEnd };
  });

  const totalWeeks = Math.max(1, cursor - 1);
  const firstCut = Math.ceil(totalWeeks / 3);
  const secondCut = Math.ceil((totalWeeks * 2) / 3);

  return scheduled.map((step) => ({
    ...step,
    phase: step.weekStart <= firstCut ? '起步' : step.weekEnd <= secondCut ? '进阶' : '巩固',
  })) as (T & { weekStart: number; weekEnd: number; phase: Phase })[];
}

/* =========================================================
 * 结果增强（旧数据回退）
 * ======================================================= */

export type EnrichedTask = TaskChange & { changeType: TaskChangeType };

export type EnrichedRole = RecommendedRole & {
  requiredCount: number;
  hitRate: number;
  interestHitCount: number;
};

export type EnrichedGap = SkillGap & { category: SkillCategory; neededBy: number };

export type EnrichedMetrics = {
  skillCount: number;
  gapCount: number;
  strengthCount: number;
  totalHours: number;
  totalWeeks: number;
  highRiskTaskCount: number;
};

export type EnrichedSource = {
  name: string;
  date: string;
  url: string;
  usedFor: string;
};

export type EnrichedMethodology = {
  matchFormula: string;
  priorityRule: string;
  durationRule: string;
  sources: EnrichedSource[];
};

export type EnrichedResult = {
  raw: AnalyzeResponse;
  tasks: EnrichedTask[];
  taskDistribution: Record<TaskChangeType, number>;
  skills: ExtractedSkill[];
  categoryCounts: { category: SkillCategory; label: string; count: number }[];
  roles: EnrichedRole[];
  gaps: EnrichedGap[];
  plan: ScheduledStep[];
  planGroups: { phase: Phase; steps: ScheduledStep[] }[];
  sdgs: SdgLink[];
  metrics: EnrichedMetrics;
  methodology: EnrichedMethodology;
  scenarioNote: string;
};

const DEFAULT_METHODOLOGY = {
  matchFormula: '匹配分 = 技能重合率 × 100 + 兴趣命中（每项 +2，最多 4）+ 经验适配（最多 3）+ 岗位方向（+2），合计最多加 8 分，仅用于排序。',
  priorityRule: '技能优先级取词典基准值；被 2 个以上推荐岗位需要时上调一级；fast 情景下数据类技能再上调一级。',
  durationRule: '学习时长取固定资源库的预计小时数；预计周数 = 总时长 ÷ 每周可学习时间（向上取整）。',
};

/** 把接口结果整理成展示模型，缺失的新字段在前端推导，保证旧数据可用 */
export function enrichResult(result: AnalyzeResponse, weeklyStudyHours: number): EnrichedResult {
  const tasks: EnrichedTask[] = result.taskChanges.map((task) => ({
    ...task,
    changeType:
      task.changeType ?? classifyTaskChange(task.aiImpact, task.humanJudgment),
  }));

  const taskDistribution: Record<TaskChangeType, number> = {
    automated: tasks.filter((task) => task.changeType === 'automated').length,
    augmented: tasks.filter((task) => task.changeType === 'augmented').length,
    unchanged: tasks.filter((task) => task.changeType === 'unchanged').length,
  };

  const roles: EnrichedRole[] = result.recommendedRoles.map((role) => {
    const requiredCount = role.matchedSkills.length + role.missingSkills.length;
    const interestHitCount =
      role.interestMatches?.length ?? parseInterestHitCount(role.reasons);

    return {
      ...role,
      sdgLinks: role.sdgLinks?.length ? role.sdgLinks : getRoleSdgLinks(role.title),
      requiredCount,
      hitRate: requiredCount === 0 ? 0 : Math.round((role.matchedSkills.length / requiredCount) * 100),
      interestHitCount,
    };
  });

  const gaps: EnrichedGap[] = result.skillGaps.map((gap) => ({
    ...gap,
    sdgLinks: gap.sdgLinks?.length ? gap.sdgLinks : getSkillSdgLinks(gap.skill),
    category: gap.category ?? classifySkillCategory(gap.skill),
    neededBy:
      gap.neededBy ??
      roles.filter(
        (role) =>
          role.matchedSkills.includes(gap.skill) || role.missingSkills.includes(gap.skill),
      ).length,
  }));

  const orderedGaps = [...gaps].sort(
    (a, b) =>
      PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority] ||
      (a.status === b.status ? 0 : a.status === 'gap' ? -1 : 1),
  );

  const plan = assignSchedule(result.learningPlan, weeklyStudyHours);
  const planGroups = PHASES.map((phase) => ({
    phase,
    steps: plan.filter((step) => step.phase === phase),
  })).filter((group) => group.steps.length > 0);

  const categoryTotals = new Map<SkillCategory, number>();
  result.extractedSkills.forEach((skill) => {
    const category = classifySkillCategory(skill.name);
    categoryTotals.set(category, (categoryTotals.get(category) ?? 0) + 1);
  });

  const categoryCounts = SKILL_CATEGORY_ORDER.filter((category) => categoryTotals.has(category)).map(
    (category) => ({
      category,
      label: SKILL_CATEGORY_LABEL[category],
      count: categoryTotals.get(category) ?? 0,
    }),
  );

  const totalHours = plan.reduce((sum, step) => sum + step.estimatedHours, 0);
  const totalWeeks = plan.length > 0 ? plan[plan.length - 1].weekEnd : 0;
  const gapCount = orderedGaps.filter((gap) => gap.status === 'gap').length;

  const metrics: EnrichedMetrics = result.metrics ?? {
    skillCount: result.extractedSkills.length,
    gapCount,
    strengthCount: orderedGaps.length - gapCount,
    totalHours,
    totalWeeks,
    highRiskTaskCount: taskDistribution.automated,
  };

  const methodology: EnrichedMethodology = result.methodology ?? {
    ...DEFAULT_METHODOLOGY,
    sources: collectSources(result),
  };

  return {
    raw: result,
    tasks,
    taskDistribution,
    skills: result.extractedSkills.map((skill) => ({
      ...skill,
      sdgLinks: skill.sdgLinks?.length ? skill.sdgLinks : getSkillSdgLinks(skill.name),
    })),
    categoryCounts,
    roles,
    gaps: orderedGaps,
    plan,
    planGroups,
    sdgs: result.sdgLinks,
    metrics,
    methodology,
    scenarioNote: result.scenarioNote,
  };
}

const PRIORITY_RANK: Record<Priority, number> = { high: 0, medium: 1, low: 2 };

function parseInterestHitCount(reasons: string[]): number {
  for (const reason of reasons) {
    const match = reason.match(/兴趣方向命中\s*(\d+)\s*项/);
    if (match) {
      return Number(match[1]);
    }
  }
  return 0;
}

/** 旧数据没有结构化来源清单时，从前后的文本里回收 */
function collectSources(result: AnalyzeResponse): EnrichedSource[] {
  const sources = new Map<string, EnrichedSource>();

  result.taskChanges.forEach((task) => {
    const key = task.source.url || task.source.name;
    if (!sources.has(key)) {
      sources.set(key, {
        name: task.source.name,
        date: task.source.date,
        url: task.source.url,
        usedFor: '任务变化评估',
      });
    }
  });

  result.recommendedRoles.forEach((role) => {
    role.reasons.forEach((reason) => {
      const match = reason.match(/^需求依据：(.+?)（(\d{4}-\d{2}-\d{2})）/);
      if (!match) return;
      const key = `${match[1]}|${match[2]}`;
      if (!sources.has(key)) {
        sources.set(key, {
          name: match[1],
          date: match[2],
          url: '',
          usedFor: '岗位需求依据',
        });
      }
    });
  });

  return Array.from(sources.values());
}
