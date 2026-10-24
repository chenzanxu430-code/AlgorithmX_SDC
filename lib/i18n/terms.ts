/**
 * Data-term translation maps.
 *
 * The analysis API returns Chinese skill / role / resource names (they come from
 * the curation libraries). The English UI translates them through these maps so
 * the report stays readable in both languages while the data layer stays single-source.
 *
 * Unknown values fall through unchanged — a new library entry never breaks the UI.
 */

import type { Lang } from './dict';

const SKILL_EN: Record<string, string> = {
  沟通表达: 'Communication',
  数据分析: 'Data analysis',
  Excel: 'Excel',
  SQL: 'SQL',
  Python: 'Python',
  数据可视化: 'Data visualisation',
  商业分析: 'Business analysis',
  'Office 办公软件': 'Office software',
  文档写作: 'Writing & documentation',
  项目管理: 'Project management',
  客户服务: 'Customer service',
  销售沟通: 'Sales communication',
  内容策划: 'Content planning',
  社交媒体运营: 'Social media',
  设计工具: 'Design tools',
  编程基础: 'Programming basics',
  'AI 工具应用': 'AI tools',
  流程管理: 'Process management',
  团队协作: 'Teamwork',
  教学培训: 'Teaching & training',
  财务基础: 'Finance basics',
  问题解决: 'Problem solving',
  时间管理: 'Time management',
  自我学习: 'Self-directed learning',
  用户增长: 'User growth',
  用户沟通: 'Customer communication',
  电商运营: 'E-commerce operations',
  市场洞察: 'Market insight',
  自动化: 'Automation',
};

const ROLE_EN: Record<string, string> = {
  增长运营分析师: 'Growth Operations Analyst',
  'AI 内容运营专员': 'AI Content Operations Specialist',
  电商数据运营: 'E-commerce Data Operations',
  用户洞察助理: 'User Insights Assistant',
  自动化流程专员: 'Workflow Automation Specialist',
};

const INTEREST_EN: Record<string, string> = {
  数据分析: 'Data analysis',
  人工智能: 'Artificial intelligence',
  产品与用户: 'Product & users',
  内容创作: 'Content creation',
  项目管理: 'Project management',
  自动化: 'Automation',
  教育培训: 'Education & training',
  商业分析: 'Business analysis',
};

const RESOURCE_EN: Record<string, string> = {
  数据分析基础: 'Data Analytics Foundations',
  'SQL Tutorial': 'SQL Tutorial',
  'Excel 数据透视与 Power Query': 'Excel PivotTables & Power Query',
  '增长实验与 A/B 测试': 'Growth Experiments & A/B Testing',
  'Python 入门': 'Python for Beginners',
  'Power BI 数据可视化': 'Power BI Visualisation',
  'Prompt Engineering 与 AI 工作流': 'Prompt Engineering & AI Workflows',
  内容营销与转化文案: 'Content Marketing & Conversion Copy',
  职场沟通与客户关系: 'Workplace Communication & Client Relations',
  项目管理基础: 'Project Management Foundations',
  电商运营基础: 'E-commerce Operations Foundations',
  市场调研与竞品分析: 'Market Research & Competitor Analysis',
  'Power Automate 流程自动化': 'Power Automate Workflow Automation',
  商业分析基础: 'Business Analysis Foundations',
};

const PROVIDER_EN: Record<string, string> = {
  'Google Data Analytics': 'Google Data Analytics',
  W3Schools: 'W3Schools',
  'Microsoft Learn': 'Microsoft Learn',
  'Google Skillshop': 'Google Skillshop',
  'Kaggle Learn': 'Kaggle Learn',
  'OpenAI Cookbook': 'OpenAI Cookbook',
  'HubSpot Academy': 'HubSpot Academy',
  Coursera: 'Coursera',
  PMI: 'PMI',
  'Shopify Learn': 'Shopify Learn',
};

const SOURCE_EN: Record<string, string> = {
  'WEF《Future of Jobs Report 2025》': 'WEF, Future of Jobs Report 2025',
  'Microsoft《Work Trend Index 2025》': 'Microsoft, Work Trend Index 2025',
  'McKinsey《The State of AI》': 'McKinsey, The State of AI',
  'OECD《Employment Outlook 2025》': 'OECD, Employment Outlook 2025',
};

const SDG_EN: Record<string, string> = {
  'SDG 4 优质教育': 'SDG 4 Quality education',
  'SDG 8 体面工作和经济增长': 'SDG 8 Decent work and economic growth',
  'SDG 9 产业、创新和基础设施': 'SDG 9 Industry, innovation and infrastructure',
  'SDG 10 减少不平等': 'SDG 10 Reduced inequalities',
  'SDG 12 负责任消费和生产': 'SDG 12 Responsible consumption and production',
};

const SDG_REASON_EN: Record<string, string> = {
  'SDG 4 优质教育':
    'Actionable learning plans help people in work keep acquiring digital skills.',
  'SDG 8 体面工作和经济增长':
    'Time freed up by automating repetitive tasks goes into higher-value growth and content work.',
  'SDG 10 减少不平等':
    'Lowers the barrier for non-technical roles to move into data and AI-adjacent jobs.',
};

const CATEGORY_EN: Record<string, string> = {
  data: 'Data & tools',
  collaboration: 'Communication',
  process: 'Business & process',
  content: 'Content & creative',
  general: 'General',
};

const USED_FOR_EN: Record<string, string> = {
  任务变化评估: 'Task impact assessment',
  岗位需求依据: 'Role demand evidence',
};

const TERM_MAPS = {
  skill: SKILL_EN,
  role: ROLE_EN,
  interest: INTEREST_EN,
  resource: RESOURCE_EN,
  provider: PROVIDER_EN,
  source: SOURCE_EN,
  sdg: SDG_EN,
  sdgReason: SDG_REASON_EN,
  category: CATEGORY_EN,
  usedFor: USED_FOR_EN,
};

export type TermKind = keyof typeof TERM_MAPS;

export type Translator = {
  lang: Lang;
  /** Translate a data term (skill, role title, …). Unknown values pass through. */
  term: (kind: TermKind, value: string) => string;
  /** Translate a list of data terms. */
  terms: (kind: TermKind, values: string[]) => string[];
  /** Join translated terms with a locale-aware separator. */
  join: (values: string[]) => string;
};

export function createTranslator(lang: Lang): Translator {
  const term = (kind: TermKind, value: string) =>
    lang === 'en' ? (TERM_MAPS[kind][value] ?? value) : value;

  return {
    lang,
    term,
    terms: (kind, values) => values.map((value) => term(kind, value)),
    join: (values) => values.join(lang === 'en' ? ', ' : '、'),
  };
}
