import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { LanguageProvider } from '@/components/i18n/LanguageProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI 技能转型导航 · AI Skill Navigator',
  description: '面向职场人士的 AI 技能转型导航原型：技能画像、任务变化、相邻岗位与学习计划。',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
