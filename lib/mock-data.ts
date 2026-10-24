import type { AnalyzeResponse } from './types';

export const mockAnalyzeResult: AnalyzeResponse = {
  extractedSkills: [
    {
      name: '电商运营',
      evidence: '当前岗位为电商运营专员，任务覆盖店铺日常运营与活动排期。',
    },
    {
      name: '数据分析',
      evidence: '负责整理每周销售报表，自评技能中包含 Excel。',
    },
    {
      name: '用户沟通',
      evidence: '日常任务包含回复客户咨询与处理售后问题。',
    },
    {
      name: '内容策划',
      evidence: '参与商品详情页与活动文案的迭代。',
    },
    {
      name: '跨团队协作',
      evidence: '需要与设计、仓储和投放团队对齐活动节奏。',
    },
    {
      name: '基础 SQL',
      evidence: '自评技能中包含 SQL，但尚未在任务中体现复杂查询。',
    },
  ],

  taskChanges: [
    {
      task: '整理每周销售报表',
      aiImpact: 88,
      humanJudgment: 35,
      source: {
        name: 'WEF《Future of Jobs Report 2025》',
        date: '2025-01-07',
        url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/',
      },
    },
    {
      task: '商品详情页与活动文案撰写',
      aiImpact: 72,
      humanJudgment: 68,
      source: {
        name: 'Microsoft《Work Trend Index 2025》',
        date: '2025-04-23',
        url: 'https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born',
      },
    },
    {
      task: '回复客户咨询与售后处理',
      aiImpact: 54,
      humanJudgment: 82,
      source: {
        name: 'McKinsey《The State of AI》',
        date: '2024-05-30',
        url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
      },
    },
    {
      task: '活动排期与跨团队协调',
      aiImpact: 31,
      humanJudgment: 91,
      source: {
        name: 'OECD《Employment Outlook 2025》',
        date: '2025-07-08',
        url: 'https://www.oecd.org/employment-outlook/',
      },
    },
    {
      task: '竞品价格与评价监测',
      aiImpact: 79,
      humanJudgment: 46,
      source: {
        name: 'WEF《Future of Jobs Report 2025》',
        date: '2025-01-07',
        url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/',
      },
    },
  ],

  recommendedRoles: [
    {
      title: '增长运营分析师',
      matchScore: 87,
      reasons: [
        '已有报表与活动运营经验可以直接迁移',
        '对数据分析的兴趣与岗位核心要求一致',
        '基础 SQL 能支撑进一步的增长实验分析',
      ],
      matchedSkills: ['电商运营', '数据分析', 'Excel'],
      missingSkills: ['A/B 测试', 'Python'],
    },
    {
      title: 'AI 辅助内容运营',
      matchScore: 81,
      reasons: [
        '内容策划经验可以复用到 AI 内容工作流',
        '对人工智能的兴趣高于同类岗位人群',
        '熟悉商品卖点与用户沟通语境',
      ],
      matchedSkills: ['内容策划', '用户沟通', '电商运营'],
      missingSkills: ['提示词工程', '内容效果评估'],
    },
    {
      title: '电商数据产品运营',
      matchScore: 74,
      reasons: [
        '理解一线运营流程，便于定义数据产品需求',
        '跨团队协作经验匹配岗位工作方式',
        '需要补足指标设计与结构化数据能力',
      ],
      matchedSkills: ['电商运营', '跨团队协作', '数据分析'],
      missingSkills: ['指标体系建设', 'SQL 进阶'],
    },
  ],

  skillGaps: [
    { skill: '数据分析', status: 'strength', priority: 'high' },
    { skill: '跨团队协作', status: 'strength', priority: 'low' },
    { skill: 'SQL', status: 'gap', priority: 'high' },
    { skill: 'Python', status: 'gap', priority: 'medium' },
    { skill: '提示词工程', status: 'gap', priority: 'medium' },
    { skill: '用户增长', status: 'gap', priority: 'high' },
    { skill: '数据可视化', status: 'gap', priority: 'medium' },
    { skill: '内容策划', status: 'strength', priority: 'medium' },
  ],

  learningPlan: [
    {
      step: '用 SQL 完成一次完整的销售数据复盘',
      skillGap: 'SQL',
      estimatedHours: 18,
      resource: { name: 'W3Schools SQL Tutorial', url: 'https://www.w3schools.com/sql/' },
    },
    {
      step: '设计并复盘一次站内增长实验',
      skillGap: '用户增长',
      estimatedHours: 16,
      resource: { name: 'Google Skillshop', url: 'https://skillshop.withgoogle.com/' },
    },
    {
      step: '用 Python 自动生成每周运营简报',
      skillGap: 'Python',
      estimatedHours: 24,
      resource: { name: 'Kaggle Learn Python', url: 'https://www.kaggle.com/learn/python' },
    },
    {
      step: '搭建商品文案的提示词模板库',
      skillGap: '提示词工程',
      estimatedHours: 8,
      resource: { name: 'OpenAI Cookbook', url: 'https://cookbook.openai.com/' },
    },
    {
      step: '用看板呈现周报中的核心指标',
      skillGap: '数据可视化',
      estimatedHours: 6,
      resource: {
        name: 'Microsoft Learn · Power BI',
        url: 'https://learn.microsoft.com/zh-cn/power-bi/',
      },
    },
  ],

  sdgLinks: [
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
  ],

  scenarioNote:
    '当前为「AI 变化较快」情景，按约 6 个月窗口估算任务变化与学习投入；以上分数和工时为固定示例数据，仅用于演示，不代表真实预测或录用结论。',
};
