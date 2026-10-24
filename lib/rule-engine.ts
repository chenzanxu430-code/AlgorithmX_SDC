import { assignSchedule, classifySkillCategory, classifyTaskChange } from './result-insights';
import { getRoleSdgLinks, getSkillSdgLinks } from './sdg-mapping';
import { getWorkforceTrendSnapshot } from './workforce-trends';
import type {
  AnalyzeRequest,
  AnalyzeResponse,
  ExtractedSkill,
  LearningPlanStep,
  Priority,
  RecommendedRole,
  SkillGap,
  TaskChange,
} from './types';

type SkillRule = {
  name: string;
  keywords: string[];
  priority: Priority;
  dataAnalysis?: boolean;
};

type JobRule = {
  id: string;
  title: string;
  requiredSkills: string[];
  relatedInterests: string[];
  /** Years of experience this role is typically hired at. */
  idealExperienceYears: number;
  /** Keywords that mark a current role as directionally close. */
  roleKeywords: string[];
  sourceName: string;
  sourceDate: string;
  sourceUrl: string;
};

type ResourceRule = {
  id: string;
  title: string;
  provider: string;
  url: string;
  estimatedHours: number;
  skills: string[];
  sourceName: string;
  sourceDate: string;
  sourceUrl: string;
};

export const SKILL_DICTIONARY: SkillRule[] = [
  {
    name: '数据分析',
    keywords: ['数据分析', '分析', '报表', '指标', '复盘', '监测'],
    priority: 'high',
    dataAnalysis: true,
  },
  {
    name: 'Excel',
    keywords: ['excel', '表格', '数据透视', 'office', '办公软件'],
    priority: 'medium',
    dataAnalysis: true,
  },
  {
    name: 'SQL',
    keywords: ['sql', '数据库', '查询'],
    priority: 'high',
    dataAnalysis: true,
  },
  {
    name: 'Python',
    keywords: ['python', '编程', '代码'],
    priority: 'medium',
    dataAnalysis: true,
  },
  {
    name: '数据可视化',
    keywords: ['可视化', '看板', '图表', 'bi', 'power bi', 'powerbi'],
    priority: 'medium',
    dataAnalysis: true,
  },
  {
    name: '商业分析',
    keywords: ['商业分析', '商业模式', '策略分析'],
    priority: 'medium',
    dataAnalysis: true,
  },
  {
    name: '用户增长',
    keywords: ['增长', '拉新', '留存', '转化', '活动', '投放', 'a/b'],
    priority: 'high',
  },
  {
    name: '内容策划',
    keywords: ['内容', '文案', '详情页', '选题', '脚本', '短视频'],
    priority: 'medium',
  },
  {
    name: '用户沟通',
    keywords: ['客户', '咨询', '客服', '售后', '沟通'],
    priority: 'medium',
  },
  {
    name: '项目管理',
    keywords: [
      '项目管理',
      '项目',
      '排期',
      '协调',
      '跨团队',
      '推进',
      '流程',
      '归档',
      '会议',
      '差旅',
      '审批',
    ],
    priority: 'medium',
  },
  {
    name: 'AI 工具应用',
    keywords: ['ai', '人工智能', 'chatgpt', '提示词', '大模型'],
    priority: 'high',
  },
  {
    name: '电商运营',
    keywords: ['电商', '店铺', '商品', '订单', '上架'],
    priority: 'medium',
  },
  {
    name: '市场洞察',
    keywords: ['竞品', '市场调研', '市场', '调研', '趋势'],
    priority: 'low',
  },
  {
    name: '自动化',
    keywords: ['自动化', 'rpa', '流程自动化'],
    priority: 'medium',
  },
];

const SKILL_BY_NAME = new Map(SKILL_DICTIONARY.map((skill) => [skill.name, skill]));

export const JOB_LIBRARY: JobRule[] = [
  {
    id: 'growth-operations-analyst',
    title: '增长运营分析师',
    requiredSkills: ['数据分析', 'Excel', '用户增长', 'SQL'],
    relatedInterests: ['数据分析', '商业分析', '产品与用户'],
    idealExperienceYears: 3,
    roleKeywords: ['运营', '增长', '客服', '客户', '数据'],
    sourceName: 'WEF《Future of Jobs Report 2025》',
    sourceDate: '2025-01-07',
    sourceUrl: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/',
  },
  {
    id: 'ai-content-operations',
    title: 'AI 内容运营专员',
    requiredSkills: ['内容策划', 'AI 工具应用', '用户沟通', '数据分析'],
    relatedInterests: ['内容创作', '人工智能', '产品与用户'],
    idealExperienceYears: 2,
    roleKeywords: ['内容', '文案', '新媒体', '运营'],
    sourceName: 'Microsoft《Work Trend Index 2025》',
    sourceDate: '2025-04-23',
    sourceUrl:
      'https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born',
  },
  {
    id: 'ecommerce-data-operations',
    title: '电商数据运营',
    requiredSkills: ['电商运营', '数据分析', '数据可视化', 'SQL'],
    relatedInterests: ['数据分析', '商业分析', '自动化'],
    idealExperienceYears: 3,
    roleKeywords: ['电商', '店铺', '运营'],
    sourceName: 'McKinsey《The State of AI》',
    sourceDate: '2024-05-30',
    sourceUrl: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
  },
  {
    id: 'user-insights-assistant',
    title: '用户洞察助理',
    requiredSkills: ['市场洞察', '用户沟通', '数据分析', '内容策划'],
    relatedInterests: ['产品与用户', '数据分析', '内容创作'],
    idealExperienceYears: 2,
    roleKeywords: ['客服', '客户', '用户', '调研', '行政', '助理'],
    sourceName: 'OECD《Employment Outlook 2025》',
    sourceDate: '2025-07-08',
    sourceUrl: 'https://www.oecd.org/employment-outlook/',
  },
  {
    id: 'automation-workflow-specialist',
    title: '自动化流程专员',
    requiredSkills: ['自动化', 'Python', 'SQL', '项目管理'],
    relatedInterests: ['自动化', '人工智能', '项目管理'],
    idealExperienceYears: 4,
    roleKeywords: ['行政', '助理', '流程', '文员', '文秘', '运营'],
    sourceName: 'WEF《Future of Jobs Report 2025》',
    sourceDate: '2025-01-07',
    sourceUrl: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/',
  },
];

export const RESOURCE_LIBRARY: ResourceRule[] = [
  {
    id: 'data-analysis-basics',
    title: '数据分析基础',
    provider: 'Google Data Analytics',
    url: 'https://www.coursera.org/professional-certificates/google-data-analytics',
    estimatedHours: 20,
    skills: ['数据分析'],
    sourceName: 'Google Data Analytics',
    sourceDate: '2025-06-01',
    sourceUrl: 'https://www.coursera.org/professional-certificates/google-data-analytics',
  },
  {
    id: 'sql-tutorial',
    title: 'SQL Tutorial',
    provider: 'W3Schools',
    url: 'https://www.w3schools.com/sql/',
    estimatedHours: 18,
    skills: ['SQL'],
    sourceName: 'W3Schools',
    sourceDate: '2025-06-01',
    sourceUrl: 'https://www.w3schools.com/sql/',
  },
  {
    id: 'excel-power-query',
    title: 'Excel 数据透视与 Power Query',
    provider: 'Microsoft Learn',
    url: 'https://learn.microsoft.com/zh-cn/training/',
    estimatedHours: 10,
    skills: ['Excel'],
    sourceName: 'Microsoft Learn',
    sourceDate: '2025-05-01',
    sourceUrl: 'https://learn.microsoft.com/zh-cn/training/',
  },
  {
    id: 'growth-experiments',
    title: '增长实验与 A/B 测试',
    provider: 'Google Skillshop',
    url: 'https://skillshop.withgoogle.com/',
    estimatedHours: 16,
    skills: ['用户增长'],
    sourceName: 'Google Skillshop',
    sourceDate: '2025-04-01',
    sourceUrl: 'https://skillshop.withgoogle.com/',
  },
  {
    id: 'python-kaggle',
    title: 'Python 入门',
    provider: 'Kaggle Learn',
    url: 'https://www.kaggle.com/learn/python',
    estimatedHours: 24,
    skills: ['Python'],
    sourceName: 'Kaggle Learn',
    sourceDate: '2025-03-01',
    sourceUrl: 'https://www.kaggle.com/learn/python',
  },
  {
    id: 'power-bi',
    title: 'Power BI 数据可视化',
    provider: 'Microsoft Learn',
    url: 'https://learn.microsoft.com/zh-cn/power-bi/',
    estimatedHours: 6,
    skills: ['数据可视化'],
    sourceName: 'Microsoft Learn',
    sourceDate: '2025-05-01',
    sourceUrl: 'https://learn.microsoft.com/zh-cn/power-bi/',
  },
  {
    id: 'ai-prompting',
    title: 'Prompt Engineering 与 AI 工作流',
    provider: 'OpenAI Cookbook',
    url: 'https://cookbook.openai.com/',
    estimatedHours: 8,
    skills: ['AI 工具应用'],
    sourceName: 'OpenAI Cookbook',
    sourceDate: '2025-02-01',
    sourceUrl: 'https://cookbook.openai.com/',
  },
  {
    id: 'content-marketing',
    title: '内容营销与转化文案',
    provider: 'HubSpot Academy',
    url: 'https://academy.hubspot.com/',
    estimatedHours: 10,
    skills: ['内容策划'],
    sourceName: 'HubSpot Academy',
    sourceDate: '2025-01-15',
    sourceUrl: 'https://academy.hubspot.com/',
  },
  {
    id: 'workplace-communication',
    title: '职场沟通与客户关系',
    provider: 'Coursera',
    url: 'https://www.coursera.org/learn/communication',
    estimatedHours: 8,
    skills: ['用户沟通'],
    sourceName: 'Coursera',
    sourceDate: '2024-12-01',
    sourceUrl: 'https://www.coursera.org/learn/communication',
  },
  {
    id: 'project-management',
    title: '项目管理基础',
    provider: 'PMI',
    url: 'https://www.pmi.org/learning/training-development',
    estimatedHours: 12,
    skills: ['项目管理'],
    sourceName: 'PMI',
    sourceDate: '2024-11-01',
    sourceUrl: 'https://www.pmi.org/learning/training-development',
  },
  {
    id: 'ecommerce-operations',
    title: '电商运营基础',
    provider: 'Shopify Learn',
    url: 'https://learn.shopify.com/',
    estimatedHours: 10,
    skills: ['电商运营'],
    sourceName: 'Shopify Learn',
    sourceDate: '2025-01-10',
    sourceUrl: 'https://learn.shopify.com/',
  },
  {
    id: 'market-research',
    title: '市场调研与竞品分析',
    provider: 'Coursera',
    url: 'https://www.coursera.org/learn/market-research',
    estimatedHours: 8,
    skills: ['市场洞察'],
    sourceName: 'Coursera',
    sourceDate: '2024-10-01',
    sourceUrl: 'https://www.coursera.org/learn/market-research',
  },
  {
    id: 'power-automate',
    title: 'Power Automate 流程自动化',
    provider: 'Microsoft Learn',
    url: 'https://learn.microsoft.com/zh-cn/training/powerplatform/power-automate/',
    estimatedHours: 10,
    skills: ['自动化'],
    sourceName: 'Microsoft Learn',
    sourceDate: '2025-05-01',
    sourceUrl: 'https://learn.microsoft.com/zh-cn/training/powerplatform/power-automate/',
  },
  {
    id: 'business-analysis',
    title: '商业分析基础',
    provider: 'Coursera',
    url: 'https://www.coursera.org/learn/business-analysis',
    estimatedHours: 8,
    skills: ['商业分析'],
    sourceName: 'Coursera',
    sourceDate: '2024-10-01',
    sourceUrl: 'https://www.coursera.org/learn/business-analysis',
  },
];

const TASK_SOURCE: TaskChange['source'] = {
  name: 'WEF《Future of Jobs Report 2025》',
  date: '2025-01-07',
  url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/',
};

const SDG_LINKS: AnalyzeResponse['sdgLinks'] = [
  {
    goal: 'SDG 4 优质教育',
    reason: '用可执行的学习计划帮助在职人群持续获得数字技能。',
  },
  {
    goal: 'SDG 8 体面工作和经济增长',
    reason: '把重复任务释放出的时间转向更高价值的增长与内容工作。',
  },
  {
    goal: 'SDG 10 减少不平等',
    reason: '降低非技术岗位进入数据与 AI 相关岗位的门槛。',
  },
];

const PRIORITY_SORT: Record<Priority, number> = {
  high: 0,
  medium: 1,
  low: 2,
};

const PRIORITY_VALUE: Record<Priority, number> = {
  low: 0,
  medium: 1,
  high: 2,
};

const PRIORITY_BY_VALUE: Priority[] = ['low', 'medium', 'high'];

const AUTOMATION_KEYWORDS = [
  '报表',
  '整理',
  '汇总',
  '录入',
  '监测',
  '统计',
  '排版',
  '清洗',
  '核对',
  '批量',
];

const JUDGMENT_KEYWORDS = [
  '沟通',
  '协调',
  '谈判',
  '决策',
  '策略',
  '售后',
  '投诉',
  '管理',
  '评审',
  '审批',
];

const CONTENT_KEYWORDS = ['文案', '内容', '详情页', '选题', '创意', '脚本'];

export function analyzeWithRules(input: AnalyzeRequest): AnalyzeResponse {
  const extractedSkills = extractSkills(input.dailyTasks, input.existingSkills);
  const taskChanges = buildTaskChanges(input.dailyTasks, input.scenario);
  const recommendedRoles = buildJobMatches(extractedSkills, input);
  const skillGaps = buildSkillGaps(extractedSkills, recommendedRoles, input.scenario);
  const learningPlan = assignSchedule(
    buildLearningPlan(skillGaps, input),
    input.weeklyStudyHours,
  );

  const totalHours = learningPlan.reduce((sum, step) => sum + step.estimatedHours, 0);
  const totalWeeks = learningPlan.length > 0 ? learningPlan[learningPlan.length - 1].weekEnd ?? 0 : 0;
  const gapCount = skillGaps.filter((gap) => gap.status === 'gap').length;

  return {
    extractedSkills,
    taskChanges,
    recommendedRoles,
    skillGaps,
    learningPlan,
    sdgLinks: SDG_LINKS,
    scenarioNote: buildScenarioNote(input, totalWeeks),
    metrics: {
      skillCount: extractedSkills.length,
      gapCount,
      strengthCount: skillGaps.length - gapCount,
      totalHours,
      totalWeeks,
      highRiskTaskCount: taskChanges.filter((task) => task.changeType === 'automated').length,
    },
    methodology: buildMethodology(recommendedRoles, taskChanges),
    trendSnapshot: getWorkforceTrendSnapshot(),
  };
}

function extractSkills(tasks: string[], existingSkills: string[]): ExtractedSkill[] {
  const cleanTasks = tasks.map((task) => task.trim()).filter(Boolean);
  const cleanSkills = existingSkills.map((skill) => skill.trim()).filter(Boolean);
  const extracted: ExtractedSkill[] = [];

  for (const rule of SKILL_DICTIONARY) {
    const evidence = new Set<string>();

    for (const task of cleanTasks) {
      if (rule.keywords.some((keyword) => matchesKeyword(task, keyword))) {
        evidence.add(`任务「${shorten(task)}」`);
      }
    }

    for (const skill of cleanSkills) {
      if (rule.keywords.some((keyword) => matchesKeyword(skill, keyword))) {
        evidence.add(`自评技能「${shorten(skill)}」`);
      }
    }

    if (evidence.size > 0) {
      extracted.push({
        name: rule.name,
        evidence: [...evidence].slice(0, 2).join('；'),
        sdgLinks: getSkillSdgLinks(rule.name),
      });
    }
  }

  return extracted;
}

function buildTaskChanges(tasks: string[], scenario: AnalyzeRequest['scenario']): TaskChange[] {
  return tasks.map((task) => {
    const text = task.trim();
    let aiImpact = 45;
    let humanJudgment = 55;

    if (containsAny(text, AUTOMATION_KEYWORDS)) {
      aiImpact += 35;
      humanJudgment -= 15;
    }
    if (containsAny(text, JUDGMENT_KEYWORDS)) {
      aiImpact -= 10;
      humanJudgment += 30;
    }
    if (containsAny(text, CONTENT_KEYWORDS)) {
      aiImpact += 15;
      humanJudgment += 5;
    }
    if (scenario === 'fast') {
      aiImpact += 8;
    }

    const ai = clampScore(aiImpact);
    const human = clampScore(humanJudgment);

    return {
      task: text,
      aiImpact: ai,
      humanJudgment: human,
      changeType: classifyTaskChange(ai, human),
      source: TASK_SOURCE,
    };
  });
}

function buildJobMatches(extractedSkills: ExtractedSkill[], input: AnalyzeRequest): RecommendedRole[] {
  const extractedNames = new Set(extractedSkills.map((skill) => skill.name));
  const normalizedInterests = input.interests.map(normalize).filter(Boolean);
  const currentRole = normalize(input.currentRole);

  const ranked = JOB_LIBRARY.map((job, index) => {
    const matchedSkills = job.requiredSkills.filter((skill) => extractedNames.has(skill));
    const missingSkills = job.requiredSkills.filter((skill) => !extractedNames.has(skill));
    const interestMatches = job.relatedInterests.filter((related) => {
      const target = normalize(related);
      return normalizedInterests.some(
        (interest) => interest === target || interest.includes(target) || target.includes(interest),
      );
    });

    const overlapRatio =
      job.requiredSkills.length === 0 ? 0 : matchedSkills.length / job.requiredSkills.length;

    // Adjustments stay small so the skill-overlap ratio keeps dominating the score.
    const interestAdjustment = Math.min(4, interestMatches.length * 2);
    const experienceFit = Math.max(
      0,
      1 - Math.abs(input.experienceYears - job.idealExperienceYears) / 6,
    );
    const experienceAdjustment = Math.round(experienceFit * 3);
    const roleAdjustment = job.roleKeywords.some((keyword) => currentRole.includes(normalize(keyword)))
      ? 2
      : 0;
    const adjustment = Math.min(8, interestAdjustment + experienceAdjustment + roleAdjustment);
    const matchScore = clampScore(Math.round(overlapRatio * 100 + adjustment));

    const reasons = [
      `核心技能命中 ${matchedSkills.length}/${job.requiredSkills.length} 项${
        matchedSkills.length > 0 ? `：${matchedSkills.join('、')}` : ''
      }。`,
      interestMatches.length > 0
        ? `兴趣方向命中 ${interestMatches.length} 项：${interestMatches.join('、')}。`
        : '兴趣方向暂无重合，匹配分主要来自技能重合。',
      buildExperienceReason(input, job, roleAdjustment > 0),
      missingSkills.length > 0
        ? `待补足：${missingSkills.join('、')}。`
        : '岗位所需技能已全部覆盖。',
      `需求依据：${job.sourceName}（${job.sourceDate}）。`,
    ];

    return {
      role: {
        title: job.title,
        matchScore,
        reasons,
        matchedSkills,
        missingSkills,
        interestMatches,
        experienceFit: Math.round(experienceFit * 100),
        sdgLinks: getRoleSdgLinks(job.title),
      } satisfies RecommendedRole,
      matchedCount: matchedSkills.length,
      interestCount: interestMatches.length,
      index,
    };
  });

  ranked.sort(
    (a, b) =>
      b.role.matchScore - a.role.matchScore ||
      b.matchedCount - a.matchedCount ||
      b.interestCount - a.interestCount ||
      a.role.missingSkills.length - b.role.missingSkills.length ||
      a.index - b.index,
  );

  return ranked.map((item) => item.role);
}

function buildExperienceReason(input: AnalyzeRequest, job: JobRule, roleMatched: boolean): string {
  const gap = input.experienceYears - job.idealExperienceYears;
  const fit =
    Math.abs(gap) <= 1
      ? '经验年限与岗位通常要求接近'
      : gap > 0
        ? '经验年限高于该岗位通常要求'
        : '经验年限低于该岗位通常要求';

  return `${input.experienceYears} 年经验，${fit}（岗位参考 ${job.idealExperienceYears} 年）${
    roleMatched ? `；当前岗位「${input.currentRole}」方向接近` : ''
  }。`;
}

function buildSkillGaps(
  extractedSkills: ExtractedSkill[],
  roles: RecommendedRole[],
  scenario: AnalyzeRequest['scenario'],
): SkillGap[] {
  const missingJobCount = new Map<string, number>();

  for (const role of roles) {
    for (const skill of role.missingSkills) {
      missingJobCount.set(skill, (missingJobCount.get(skill) ?? 0) + 1);
    }
  }

  // 技能被多少个推荐岗位需要（含已匹配与待补）
  const neededBy = (skill: string) =>
    roles.filter(
      (role) => role.matchedSkills.includes(skill) || role.missingSkills.includes(skill),
    ).length;

  const gaps: SkillGap[] = extractedSkills.map((skill) => ({
    skill: skill.name,
    status: 'strength',
    priority: adjustedPriority(skill.name, 'strength', 0, scenario),
    category: classifySkillCategory(skill.name),
    neededBy: neededBy(skill.name),
    sdgLinks: getSkillSdgLinks(skill.name),
  }));

  for (const [skill, count] of missingJobCount) {
    gaps.push({
      skill,
      status: 'gap',
      priority: adjustedPriority(skill, 'gap', count, scenario),
      category: classifySkillCategory(skill),
      neededBy: neededBy(skill),
      sdgLinks: getSkillSdgLinks(skill),
    });
  }

  gaps.sort(
    (a, b) =>
      PRIORITY_SORT[a.priority] - PRIORITY_SORT[b.priority] ||
      (a.status === b.status ? 0 : a.status === 'gap' ? -1 : 1),
  );

  return gaps;
}

function buildLearningPlan(
  skillGaps: SkillGap[],
  input: AnalyzeRequest,
): LearningPlanStep[] {
  const weeklyHours = Math.max(1, input.weeklyStudyHours);
  const gaps = skillGaps.filter((skill) => skill.status === 'gap');
  const hoursOf = (skill: string) =>
    RESOURCE_LIBRARY.find((item) => item.skills.includes(skill))?.estimatedHours ?? 0;

  // Low weekly bandwidth favours short wins first; higher bandwidth favours the
  // bigger courses while the learner still has time for them.
  const preferShortFirst = weeklyHours <= 5;

  const ordered = [...gaps].sort((a, b) => {
    if (input.scenario === 'fast') {
      const aDataAnalysis = isDataAnalysisSkill(a.skill) ? 0 : 1;
      const bDataAnalysis = isDataAnalysisSkill(b.skill) ? 0 : 1;
      if (aDataAnalysis !== bDataAnalysis) {
        return aDataAnalysis - bDataAnalysis;
      }
    }

    const priorityDelta = PRIORITY_SORT[a.priority] - PRIORITY_SORT[b.priority];
    if (priorityDelta !== 0) {
      return priorityDelta;
    }

    const hoursDelta = hoursOf(a.skill) - hoursOf(b.skill);
    return preferShortFirst ? hoursDelta : -hoursDelta;
  });

  const steps: LearningPlanStep[] = [];

  for (const gap of ordered) {
    const resource = RESOURCE_LIBRARY.find((item) => item.skills.includes(gap.skill));
    if (!resource) {
      continue;
    }

    steps.push({
      step: `完成「${resource.title}」，补足${gap.skill}`,
      skillGap: gap.skill,
      estimatedHours: resource.estimatedHours,
      resource: {
        name: resource.title,
        url: resource.sourceUrl,
        provider: resource.sourceName,
        publishedAt: resource.sourceDate,
      },
    });
  }

  return steps;
}

function buildScenarioNote(input: AnalyzeRequest, totalWeeks: number): string {
  const pacing =
    totalWeeks > 0
      ? `按每周 ${input.weeklyStudyHours} 小时排期，全部步骤约需 ${totalWeeks} 周。`
      : '';

  if (input.scenario === 'fast') {
    return `当前为「AI 变化较快」情景：数据分析类技能优先级已上调，相关学习步骤已前置。${pacing}岗位匹配分仅用于排序；此结果是估计，不是预测。`;
  }

  return `当前为「AI 变化较缓」情景：按常规优先级安排学习步骤。${pacing}岗位匹配分仅用于排序；此结果是估计，不是预测。`;
}

function buildMethodology(
  roles: RecommendedRole[],
  tasks: TaskChange[],
): NonNullable<AnalyzeResponse['methodology']> {
  const sources = new Map<string, { name: string; date: string; url: string; usedFor: string }>();

  tasks.forEach((task) => {
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

  roles.forEach((role) => {
    const job = JOB_LIBRARY.find((item) => item.title === role.title);
    if (!job) return;
    const key = job.sourceUrl || job.sourceName;
    if (!sources.has(key)) {
      sources.set(key, {
        name: job.sourceName,
        date: job.sourceDate,
        url: job.sourceUrl,
        usedFor: '岗位需求依据',
      });
    }
  });

  return {
    matchFormula:
      '匹配分 = 技能重合率 × 100 + 兴趣命中（每项 +2，最多 4）+ 经验适配（最多 3）+ 岗位方向（+2），合计最多加 8 分，仅用于排序。',
    priorityRule:
      '技能优先级取词典基准值；被 2 个以上推荐岗位需要时上调一级；fast 情景下数据类技能再上调一级。',
    durationRule:
      '学习时长取固定资源库的预计小时数；预计周数 = 总时长 ÷ 每周可学习时间（向上取整）。',
    sources: Array.from(sources.values()),
  };
}

function adjustedPriority(
  skillName: string,
  status: SkillGap['status'],
  missingJobCount: number,
  scenario: AnalyzeRequest['scenario'],
): Priority {
  const rule = SKILL_BY_NAME.get(skillName);
  let value = PRIORITY_VALUE[rule?.priority ?? 'medium'];

  if (status === 'gap' && missingJobCount >= 2) {
    value += 1;
  }
  if (scenario === 'fast' && rule?.dataAnalysis) {
    value += 1;
  }

  return PRIORITY_BY_VALUE[Math.min(2, value)];
}

function isDataAnalysisSkill(skillName: string): boolean {
  return SKILL_BY_NAME.get(skillName)?.dataAnalysis === true;
}

function containsAny(text: string, keywords: string[]): boolean {
  return keywords.some((keyword) => matchesKeyword(text, keyword));
}

function matchesKeyword(text: string, keyword: string): boolean {
  const haystack = text.toLowerCase();
  const needle = keyword.toLowerCase();

  if (/[\u4e00-\u9fff]/.test(needle)) {
    return haystack.includes(needle);
  }

  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^a-z0-9])${escaped}($|[^a-z0-9])`, 'i').test(haystack);
}

function shorten(text: string, maxLength = 60): string {
  return text.length > maxLength ? `${text.slice(0, maxLength)}…` : text;
}

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function clampScore(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}
