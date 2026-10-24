import type { SdgLink } from './types';

const SKILL_LINKS: Record<string, SdgLink[]> = {
  数据分析: [
    {
      goal: 'SDG 9 产业、创新和基础设施',
      reason: '将数据转化为证据，支持创新、流程改进和更有依据的业务决策。',
      reasonEn: 'Turns data into evidence for innovation, process improvement and informed decisions.',
    },
  ],
  Excel: [
    {
      goal: 'SDG 8 体面工作和经济增长',
      reason: '提升日常数据处理效率，帮助团队把时间投入更有价值的工作。',
      reasonEn: 'Improves everyday data work so teams can spend time on higher-value tasks.',
    },
  ],
  SQL: [
    {
      goal: 'SDG 9 产业、创新和基础设施',
      reason: '帮助可靠地获取和整理数据，为数字化服务与创新提供基础。',
      reasonEn: 'Enables reliable access to data that underpins digital services and innovation.',
    },
  ],
  Python: [
    {
      goal: 'SDG 9 产业、创新和基础设施',
      reason: '支持自动化和数据应用，助力改进数字化流程与服务。',
      reasonEn: 'Supports automation and data applications that improve digital processes and services.',
    },
  ],
  数据可视化: [
    {
      goal: 'SDG 9 产业、创新和基础设施',
      reason: '让关键数据更易理解，帮助团队评估创新项目并改进服务。',
      reasonEn: 'Makes key data easier to understand when evaluating innovation and improving services.',
    },
  ],
  商业分析: [
    {
      goal: 'SDG 8 体面工作和经济增长',
      reason: '以证据支持资源配置和可持续的业务改进。',
      reasonEn: 'Uses evidence to guide resource allocation and sustainable business improvement.',
    },
  ],
  用户增长: [
    {
      goal: 'SDG 8 体面工作和经济增长',
      reason: '通过衡量用户价值和业务成效，支持更负责任的增长决策。',
      reasonEn: 'Measures user and business outcomes to support more responsible growth decisions.',
    },
  ],
  内容策划: [
    {
      goal: 'SDG 12 负责任消费和生产',
      reason: '清晰、准确地呈现产品与服务信息，帮助受众作出知情选择。',
      reasonEn: 'Presents product and service information clearly so audiences can make informed choices.',
    },
  ],
  用户沟通: [
    {
      goal: 'SDG 10 减少不平等',
      reason: '以清晰、尊重且易获取的沟通帮助不同背景的用户获得支持。',
      reasonEn: 'Clear, respectful and accessible communication helps people from different backgrounds get support.',
    },
  ],
  项目管理: [
    {
      goal: 'SDG 9 产业、创新和基础设施',
      reason: '协调资源与交付，帮助创新项目更可靠地落地。',
      reasonEn: 'Coordinates resources and delivery so innovation projects can be implemented reliably.',
    },
  ],
  'AI 工具应用': [
    {
      goal: 'SDG 9 产业、创新和基础设施',
      reason: '将 AI 用于合适的工作场景，支持创新并改善数字化工作流程。',
      reasonEn: 'Applies AI to suitable work tasks to support innovation and improve digital workflows.',
    },
  ],
  电商运营: [
    {
      goal: 'SDG 12 负责任消费和生产',
      reason: '借助库存、订单与需求信息，支持更审慎的商品运营和资源使用。',
      reasonEn: 'Uses inventory, order and demand information to support more thoughtful retail operations and resource use.',
    },
  ],
  市场洞察: [
    {
      goal: 'SDG 12 负责任消费和生产',
      reason: '理解真实需求，帮助改进产品供给并减少与需求不匹配的资源投入。',
      reasonEn: 'Understanding real demand can improve product offerings and reduce mismatched resource use.',
    },
  ],
  自动化: [
    {
      goal: 'SDG 8 体面工作和经济增长',
      reason: '减少重复性流程，为员工转向更高价值的任务创造空间。',
      reasonEn: 'Reduces repetitive processes and creates room for people to focus on higher-value work.',
    },
  ],
  '跨团队协作': [
    {
      goal: 'SDG 9 产业、创新和基础设施',
      reason: '促进跨职能知识共享，支持创新工作的协同落地。',
      reasonEn: 'Enables cross-functional knowledge sharing and collaborative delivery of innovation.',
    },
  ],
  '基础 SQL': [
    {
      goal: 'SDG 9 产业、创新和基础设施',
      reason: '建立结构化数据查询能力，为数字化分析与服务打好基础。',
      reasonEn: 'Builds structured data-query skills that underpin digital analysis and services.',
    },
  ],
  'A/B 测试': [
    {
      goal: 'SDG 9 产业、创新和基础设施',
      reason: '通过可验证的实验比较方案，支持持续、负责任的产品改进。',
      reasonEn: 'Compares options through evidence-based experiments for continuous, responsible product improvement.',
    },
  ],
  提示词工程: [
    {
      goal: 'SDG 9 产业、创新和基础设施',
      reason: '帮助团队更可控地使用生成式 AI，探索适合实际工作的创新应用。',
      reasonEn: 'Helps teams use generative AI more deliberately and explore practical innovation.',
    },
  ],
  内容效果评估: [
    {
      goal: 'SDG 12 负责任消费和生产',
      reason: '评估内容是否真正回应受众需求，减少低效或误导性传播。',
      reasonEn: 'Checks whether content serves audience needs and reduces ineffective or misleading communication.',
    },
  ],
  指标体系建设: [
    {
      goal: 'SDG 8 体面工作和经济增长',
      reason: '用清晰指标追踪工作成效，为持续改进和可持续增长提供依据。',
      reasonEn: 'Clear metrics inform continuous improvement and sustainable growth.',
    },
  ],
  'SQL 进阶': [
    {
      goal: 'SDG 9 产业、创新和基础设施',
      reason: '提升复杂数据处理能力，支持更可靠的数字化分析与创新。',
      reasonEn: 'Advanced data handling supports more reliable digital analysis and innovation.',
    },
  ],
};

const ROLE_LINKS: Record<string, SdgLink[]> = {
  增长运营分析师: [
    {
      goal: 'SDG 8 体面工作和经济增长',
      reason: '以数据评估增长质量和资源投入，支持更可持续的业务决策。',
      reasonEn: 'Uses data to assess growth quality and resource use for more sustainable business decisions.',
    },
  ],
  'AI 内容运营专员': [
    {
      goal: 'SDG 9 产业、创新和基础设施',
      reason: '探索负责任的 AI 内容工作流，推动数字化内容生产与创新。',
      reasonEn: 'Explores responsible AI content workflows and advances digital production and innovation.',
    },
    {
      goal: 'SDG 12 负责任消费和生产',
      reason: '通过内容审核与效果评估，促进准确、适度且有用的信息传播。',
      reasonEn: 'Review and evaluation can promote accurate, useful and proportionate communication.',
    },
  ],
  电商数据运营: [
    {
      goal: 'SDG 12 负责任消费和生产',
      reason: '结合销售、库存和需求数据，帮助优化商品运营及资源使用。',
      reasonEn: 'Combines sales, inventory and demand data to improve retail operations and resource use.',
    },
  ],
  用户洞察助理: [
    {
      goal: 'SDG 10 减少不平等',
      reason: '将不同用户的反馈纳入产品改进，帮助服务更好地回应多元需求。',
      reasonEn: 'Brings diverse user feedback into product improvement so services can respond to varied needs.',
    },
  ],
  自动化流程专员: [
    {
      goal: 'SDG 8 体面工作和经济增长',
      reason: '改善重复性流程，释放时间用于判断、服务和其他更高价值的工作。',
      reasonEn: 'Improves repetitive processes, freeing time for judgement, service and other higher-value work.',
    },
    {
      goal: 'SDG 9 产业、创新和基础设施',
      reason: '设计和维护数字化工作流程，支持创新能力与组织韧性。',
      reasonEn: 'Designs and maintains digital workflows that support innovation and organizational resilience.',
    },
  ],
  'AI 辅助内容运营': [
    {
      goal: 'SDG 9 产业、创新和基础设施',
      reason: '探索负责任的 AI 内容工作流，推动数字化内容生产与创新。',
      reasonEn: 'Explores responsible AI content workflows and advances digital production and innovation.',
    },
  ],
  电商数据产品运营: [
    {
      goal: 'SDG 12 负责任消费和生产',
      reason: '将运营数据转化为产品改进，支持更贴近需求的商品与服务。',
      reasonEn: 'Turns operational data into product improvements that better match real demand.',
    },
  ],
};

const DEFAULT_SKILL_LINKS: SdgLink[] = [
  {
    goal: 'SDG 4 优质教育',
    reason: '持续发展这项能力有助于终身学习和适应不断变化的工作要求。',
    reasonEn: 'Continuing to develop this skill supports lifelong learning and adapting to changing work.',
  },
];

const DEFAULT_ROLE_LINKS: SdgLink[] = [
  {
    goal: 'SDG 8 体面工作和经济增长',
    reason: '该职业路径可通过提升技能、工作质量或服务价值，为体面工作和可持续生计作出贡献。',
    reasonEn: 'This career path can support decent work and sustainable livelihoods through skills, work quality or service value.',
  },
];

export function getSkillSdgLinks(skill: string): SdgLink[] {
  return SKILL_LINKS[skill] ?? DEFAULT_SKILL_LINKS;
}

export function getRoleSdgLinks(role: string): SdgLink[] {
  return ROLE_LINKS[role] ?? DEFAULT_ROLE_LINKS;
}
