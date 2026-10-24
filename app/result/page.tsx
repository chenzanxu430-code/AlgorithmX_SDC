import type { Metadata } from 'next';
import { ResultPageClient } from './ResultPageClient';

export const metadata: Metadata = {
  title: '转型建议报告 · AI 技能转型导航',
  description: '技能画像、任务变化、相邻岗位、技能差距与学习计划示例报告。',
};

export default function ResultPage() {
  return <ResultPageClient />;
}
