import dataset from '@/data/workforce-trends-v3.json';
import type { WorkforceTrendSnapshot } from './types';

const ROLE_LABELS: Record<string, { en: string; zh: string }> = {
  ecommerce_operations_executive: {
    en: 'E-commerce Operations Executive',
    zh: '电商运营专员',
  },
  data_operations_analyst: {
    en: 'Data Operations Analyst',
    zh: '数据运营分析师',
  },
  ai_content_operations_specialist: {
    en: 'AI Content Operations Specialist',
    zh: 'AI 内容运营专员',
  },
};

const SKILL_LABELS_ZH: Record<string, string> = {
  ecommerce_operations: '电商运营',
  marketplace_management: '平台运营',
  order_management: '订单管理',
  inventory_coordination: '库存协同',
  excel_google_sheets: 'Excel / Google 表格',
  reporting: '报表',
  customer_service: '客户服务',
  basic_marketing: '基础营销',
  communication: '沟通表达',
  process_coordination: '流程协调',
  product_data_quality: '商品数据质量',
  sql: 'SQL',
  data_analysis: '数据分析',
  data_quality: '数据质量',
  data_visualization: '数据可视化',
  dashboarding: '仪表盘',
  statistics: '统计学',
  basic_python: 'Python 基础',
  business_analysis: '商业分析',
  data_pipelines_etl: '数据管道与 ETL',
  seo: '搜索引擎优化',
  copywriting: '文案写作',
  ai_content_tools: 'AI 内容工具',
  ai_evaluation: 'AI 输出评估',
  brand_safety: '品牌安全',
  workflow_automation: '工作流自动化',
  content_analytics: '内容分析',
  content_operations: '内容运营',
  prompt_engineering: '提示词工程',
  marketing_analytics: '营销分析',
};

export function getWorkforceTrendSnapshot(): WorkforceTrendSnapshot {
  const periodA = dataset.comparison_summary.period_a;
  const periodB = dataset.comparison_summary.period_b;

  return {
    version: dataset.meta.data_version,
    lastUpdated: dataset.meta.last_updated,
    country: dataset.meta.country,
    targetPopulation: dataset.meta.target_population,
    jobFamily: dataset.meta.job_family,
    sourceFamily: periodA.source_family,
    currentPeriod: periodA.label,
    previousPeriod: periodB.label,
    methodology: dataset.meta.methodology,
    limitations: dataset.meta.limitations,
    paths: dataset.transition_tracks.map((track) => {
      const currentRole = ROLE_LABELS[track.from_role_id];
      const targetRole = ROLE_LABELS[track.to_role_id];
      const roleComparisons = dataset.period_comparisons.filter(
        (comparison) => comparison.role_id === track.to_role_id,
      );
      const comparisons = roleComparisons
        .map((comparison) => {
          const changePp = Math.round(
            (comparison.period_a.rate - comparison.period_b.rate) * 100,
          );
          const trend =
            comparison.trend === 'changing' || comparison.trend === 'insufficient'
              ? comparison.trend
              : changePp > 0
                ? 'up'
                : changePp < 0
                  ? 'down'
                  : 'insufficient';

          return {
            skillId: comparison.skill_id,
            skillNameEn: comparison.skill_name_en,
            skillNameZh: SKILL_LABELS_ZH[comparison.skill_id] ?? comparison.skill_name_en,
            currentRate: comparison.period_a.rate,
            previousRate: comparison.period_b.rate,
            changePp,
            trend,
          };
        })
        .sort(
          (left, right) =>
            Math.abs(right.changePp) - Math.abs(left.changePp) ||
            left.skillNameEn.localeCompare(right.skillNameEn),
        );

      return {
        trackId: track.track_id,
        fromRoleEn: currentRole.en,
        fromRoleZh: currentRole.zh,
        toRoleEn: targetRole.en,
        toRoleZh: targetRole.zh,
        currentSampleSize: roleComparisons[0].period_a.sample_size,
        previousSampleSize: roleComparisons[0].period_b.sample_size,
        transitionFitScore: track.transition_fit_score,
        scoreChange: track.score_change,
        skills: comparisons,
      };
    }),
  };
}
