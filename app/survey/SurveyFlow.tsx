'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import { useI18n } from '@/components/i18n/LanguageProvider';
import { SiteHeader } from '@/components/site/SiteHeader';
import { AnalysisRequestError, requestAnalysis } from '@/lib/analyze-client';
import { fmt } from '@/lib/i18n/dict';
import { saveAnalysisSession } from '@/lib/storage';
import type { AnalyzeRequest, Scenario } from '@/lib/types';

const DRAFT_KEY = 'ai-nav:v1:survey-draft';
const STEP_PATHS = ['/survey', '/survey/step-2', '/survey/step-3'] as const;
const INTEREST_OPTIONS = [
  '数据分析',
  '人工智能',
  '产品与用户',
  '内容创作',
  '项目管理',
  '自动化',
  '教育培训',
  '商业分析',
] as const;
const SKILL_OPTIONS = [
  '沟通表达',
  'Excel',
  '数据分析',
  'Office 办公软件',
  '文档写作',
  '项目管理',
  '客户服务',
  '销售沟通',
  '内容策划',
  '社交媒体运营',
  '设计工具',
  '编程基础',
  'AI 工具应用',
  '流程管理',
  '团队协作',
  '教学培训',
  '财务基础',
  '数据可视化',
  'SQL',
  '问题解决',
  '时间管理',
  '自我学习',
] as const;
const SCENARIO_VALUES: Scenario[] = ['slow', 'fast'];
const MAX_SKILLS = 30;
const MAX_TASKS = 20;

type FormErrors = {
  currentRole?: string;
  dailyTasks?: string;
  existingSkills?: string;
  experienceYears?: string;
};

type SubmitError = {
  message: string;
  details: string[];
};

type SurveyDraft = {
  currentRole: string;
  tasks: string[];
  skills: string[];
  experienceYears: string;
  interests: string[];
  weeklyStudyHours: number;
  scenario: Scenario;
  targetDirections: string[];
  workPreferences: string[];
  growthPriorities: string[];
};

const inputClass =
  'w-full rounded-lg border border-[color:var(--line)] bg-white/90 px-3 py-2 text-sm text-[color:var(--ink)] placeholder:text-[color:var(--ink-muted)] transition focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(37,99,235,0.16)]';

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function isSurveyDraft(value: unknown): value is SurveyDraft {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const draft = value as Record<string, unknown>;
  return (
    typeof draft.currentRole === 'string' &&
    isStringArray(draft.tasks) &&
    isStringArray(draft.skills) &&
    typeof draft.experienceYears === 'string' &&
    isStringArray(draft.interests) &&
    typeof draft.weeklyStudyHours === 'number' &&
    (draft.scenario === 'slow' || draft.scenario === 'fast') &&
    isStringArray(draft.targetDirections) &&
    isStringArray(draft.workPreferences) &&
    isStringArray(draft.growthPriorities)
  );
}

function ChoiceGrid({
  options,
  selected,
  onToggle,
  maxSelections,
}: {
  options: readonly { value: string; label: string }[];
  selected: string[];
  onToggle: (value: string) => void;
  maxSelections?: number;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {options.map((option) => {
        const checked = selected.includes(option.value);
        return (
          <label
            key={option.value}
            className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-3 text-sm transition ${
              checked
                ? 'border-[color:var(--accent)] bg-[rgba(37,99,235,0.06)] text-[color:var(--accent-strong)] ring-1 ring-[color:var(--accent)]'
                : 'border-[color:var(--line)] bg-white/60 text-[color:var(--ink-body)] hover:border-[color:var(--accent-2)]'
            }`}
          >
            <input
              type="checkbox"
              value={option.value}
              checked={checked}
              disabled={maxSelections !== undefined && selected.length >= maxSelections && !checked}
              onChange={() => onToggle(option.value)}
              className="accent-[color:var(--accent)]"
            />
            {option.label}
          </label>
        );
      })}
    </div>
  );
}

export function SurveyFlow({ step }: { step: 1 | 2 | 3 }) {
  const router = useRouter();
  const { t, tr } = useI18n();
  const formRef = useRef<HTMLFormElement>(null);
  const [currentRole, setCurrentRole] = useState('');
  const [tasks, setTasks] = useState<string[]>(['']);
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState('');
  const [experienceYears, setExperienceYears] = useState('3');
  const [interests, setInterests] = useState<string[]>([]);
  const [weeklyStudyHours, setWeeklyStudyHours] = useState(8);
  const [scenario, setScenario] = useState<Scenario>('slow');
  const [targetDirections, setTargetDirections] = useState<string[]>([]);
  const [workPreferences, setWorkPreferences] = useState<string[]>([]);
  const [growthPriorities, setGrowthPriorities] = useState<string[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<SubmitError | null>(null);
  const [storageError, setStorageError] = useState(false);
  const [draftLoaded, setDraftLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem(DRAFT_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (isSurveyDraft(parsed)) {
          setCurrentRole(parsed.currentRole);
          setTasks(parsed.tasks.length ? parsed.tasks : ['']);
          setSkills(parsed.skills);
          setExperienceYears(parsed.experienceYears);
          setInterests(parsed.interests);
          setWeeklyStudyHours(parsed.weeklyStudyHours);
          setScenario(parsed.scenario);
          setTargetDirections(parsed.targetDirections);
          setWorkPreferences(parsed.workPreferences);
          setGrowthPriorities(parsed.growthPriorities);
        } else {
          window.sessionStorage.removeItem(DRAFT_KEY);
        }
      }
    } catch {
      setStorageError(true);
    } finally {
      setDraftLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!draftLoaded || storageError) {
      return;
    }
    const draft: SurveyDraft = {
      currentRole,
      tasks,
      skills,
      experienceYears,
      interests,
      weeklyStudyHours,
      scenario,
      targetDirections,
      workPreferences,
      growthPriorities,
    };
    try {
      window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch {
      setStorageError(true);
    }
  }, [
    currentRole,
    tasks,
    skills,
    experienceYears,
    interests,
    weeklyStudyHours,
    scenario,
    targetDirections,
    workPreferences,
    growthPriorities,
    draftLoaded,
    storageError,
  ]);

  const toggleChoice = (
    value: string,
    selected: string[],
    setSelected: (next: string[]) => void,
  ) => {
    setSelected(
      selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value],
    );
  };

  const addTask = () => {
    if (tasks.length < MAX_TASKS) {
      setTasks((previous) => [...previous, '']);
    }
  };

  const updateTask = (index: number, value: string) => {
    setTasks((previous) => previous.map((task, itemIndex) => (itemIndex === index ? value : task)));
  };

  const removeTask = (index: number) => {
    setTasks((previous) =>
      previous.length === 1 ? [''] : previous.filter((_, itemIndex) => itemIndex !== index),
    );
  };

  const addSkill = () => {
    const value = skillInput.trim().replace(/[，,]+$/g, '').trim();
    if (!value) {
      setSkillInput('');
      return;
    }
    if (
      !skills.some((skill) => skill.toLowerCase() === value.toLowerCase()) &&
      skills.length < MAX_SKILLS
    ) {
      setSkills((previous) => [...previous, value]);
    }
    setSkillInput('');
  };

  const handleSkillKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) {
      return;
    }
    if (event.key === 'Enter' || event.key === ',' || event.key === '，') {
      event.preventDefault();
      addSkill();
    }
  };

  const validate = (validateAll: boolean) => {
    const nextErrors: FormErrors = {};
    const years = Number(experienceYears);
    if ((step === 1 || validateAll) && !currentRole.trim()) {
      nextErrors.currentRole = t.survey.errors.currentRole;
    }
    if ((step === 1 || validateAll) && tasks.every((task) => !task.trim())) {
      nextErrors.dailyTasks = t.survey.errors.dailyTasks;
    }
    if ((step === 2 || validateAll) && skills.length === 0) {
      nextErrors.existingSkills = t.survey.errors.existingSkills;
    }
    if (
      (step === 1 || validateAll) &&
      (experienceYears.trim() === '' || !Number.isInteger(years) || years < 0 || years > 50)
    ) {
      nextErrors.experienceYears = t.survey.errors.experienceYears;
    }
    setErrors(nextErrors);
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting || !draftLoaded || storageError) {
      return;
    }
    const nextErrors = validate(step === 3);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    setSubmitError(null);

    if (step < 3) {
      router.push(step === 1 ? STEP_PATHS[1] : STEP_PATHS[2]);
      return;
    }

    if (nextErrors.currentRole || nextErrors.dailyTasks || nextErrors.experienceYears) {
      router.push(STEP_PATHS[0]);
      return;
    }
    if (nextErrors.existingSkills) {
      router.push(STEP_PATHS[1]);
      return;
    }

    const payload: AnalyzeRequest = {
      currentRole: currentRole.trim(),
      dailyTasks: tasks.map((task) => task.trim()).filter(Boolean),
      existingSkills: skills,
      experienceYears: Number(experienceYears),
      interests,
      weeklyStudyHours,
      scenario,
      targetDirections,
      workPreferences,
      growthPriorities,
    };

    setIsSubmitting(true);
    try {
      const result = await requestAnalysis(payload);
      try {
        saveAnalysisSession({
          result,
          input: payload,
          savedAt: new Date().toISOString(),
        });
        window.sessionStorage.removeItem(DRAFT_KEY);
      } catch {
        setSubmitError({ message: t.survey.errors.saveFailed, details: [] });
        return;
      }
      router.push('/result');
    } catch (error) {
      if (error instanceof AnalysisRequestError) {
        setSubmitError({ message: error.message, details: error.details });
      } else {
        setSubmitError({ message: t.survey.errors.requestFailed, details: [] });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const isCurrentStep = (candidate: number) => candidate === step;
  const canNavigate = draftLoaded && !storageError && !isSubmitting;
  const stepTitle = t.survey.stepTitles[step - 1];
  const stepLead = t.survey.stepLeads[step - 1];

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-12">
        <header className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
            {fmt(t.survey.progress, { step })}
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[color:var(--ink)] sm:text-3xl">
            {stepTitle}
          </h1>
          <p className="mt-2 text-sm leading-6 text-[color:var(--ink-body)]">{stepLead}</p>
          <nav aria-label={t.survey.progressLabel} className="mt-5 grid grid-cols-3 gap-2">
            {t.survey.stepLabels.map((label, index) => {
              const stepNumber = index + 1;
              return (
                <Link
                  key={label}
                  href={STEP_PATHS[index]}
                  aria-current={isCurrentStep(stepNumber) ? 'step' : undefined}
                  aria-disabled={!canNavigate || stepNumber > step}
                  tabIndex={canNavigate && stepNumber <= step ? undefined : -1}
                  onClick={(event) => {
                    if (!canNavigate || stepNumber > step) {
                      event.preventDefault();
                    }
                  }}
                  className={`rounded-lg px-2 py-2 text-center text-xs font-medium transition sm:text-sm ${
                    isCurrentStep(stepNumber)
                      ? 'bg-[color:var(--accent)] text-white'
                      : stepNumber < step
                        ? 'bg-[rgba(37,99,235,0.10)] text-[color:var(--accent-strong)]'
                        : 'bg-white/70 text-[color:var(--ink-muted)]'
                  }`}
                >
                  <span className="mr-1 hidden sm:inline">{stepNumber}.</span>
                  {label}
                </Link>
              );
            })}
          </nav>
          <div
            className="mt-2 h-1.5 overflow-hidden rounded-full bg-[color:var(--line-soft)]"
            role="progressbar"
            aria-label={t.survey.progressLabel}
            aria-valuemin={1}
            aria-valuemax={3}
            aria-valuenow={step}
          >
            <div
              className="h-full rounded-full bg-[color:var(--accent)] transition-all"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </header>

        <form
          ref={formRef}
          noValidate
          aria-busy={isSubmitting || !draftLoaded}
          onSubmit={handleSubmit}
          className="glass space-y-7 p-5 sm:p-7"
        >
          {storageError && (
            <div
              role="alert"
              className="rounded-lg border border-[rgba(220,75,62,0.25)] bg-[rgba(220,75,62,0.06)] p-3 text-sm text-[color:var(--coral)]"
            >
              {t.survey.errors.draftFailed}
            </div>
          )}

          {step === 1 && (
            <>
              <section className="space-y-2">
                <label htmlFor="currentRole" className="block text-sm font-medium text-[color:var(--ink)]">
                  {t.survey.fields.currentRole} <span className="text-[color:var(--coral)]">*</span>
                </label>
                <select
                  id="currentRole"
                  value={currentRole}
                  onChange={(event) => setCurrentRole(event.target.value)}
                  aria-invalid={Boolean(errors.currentRole)}
                  aria-describedby={errors.currentRole ? 'currentRole-error' : undefined}
                  className={`${inputClass} ${errors.currentRole ? 'border-[color:var(--coral)] focus:border-[color:var(--coral)] focus:ring-[rgba(220,75,62,0.16)]' : ''}`}
                >
                  <option value="">{t.survey.fields.currentRolePlaceholder}</option>
                  {t.survey.fields.currentRoleOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.currentRole && (
                  <p id="currentRole-error" className="text-xs text-[color:var(--coral)]">
                    {errors.currentRole}
                  </p>
                )}
              </section>

              <section className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="task-0" className="block text-sm font-medium text-[color:var(--ink)]">
                    {t.survey.fields.tasks} <span className="text-[color:var(--coral)]">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={addTask}
                    disabled={tasks.length >= MAX_TASKS}
                    className="rounded-lg px-2 py-1 text-sm font-medium text-[color:var(--accent)] transition hover:bg-[rgba(37,99,235,0.08)] disabled:cursor-not-allowed disabled:text-[color:var(--ink-muted)]"
                  >
                    {t.survey.fields.addTask}
                  </button>
                </div>
                <div className="space-y-2">
                  {tasks.map((task, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        id={`task-${index}`}
                        type="text"
                        value={task}
                        onChange={(event) => updateTask(index, event.target.value)}
                        placeholder={
                          index === 0
                            ? t.survey.fields.taskPlaceholder
                            : t.survey.fields.taskPlaceholderMore
                        }
                        aria-label={fmt(t.survey.fields.taskLabel, { n: index + 1 })}
                        className={inputClass}
                      />
                      <button
                        type="button"
                        onClick={() => removeTask(index)}
                        disabled={tasks.length === 1}
                        aria-label={`${t.survey.fields.removeTask} ${index + 1}`}
                        className="shrink-0 rounded-lg px-2 py-1 text-sm text-[color:var(--ink-muted)] transition hover:bg-[rgba(15,42,74,0.06)] disabled:opacity-40"
                      >
                        {t.survey.fields.removeTask}
                      </button>
                    </div>
                  ))}
                </div>
                {errors.dailyTasks ? (
                  <p className="text-xs text-[color:var(--coral)]">{errors.dailyTasks}</p>
                ) : (
                  <p className="text-xs text-[color:var(--ink-muted)]">
                    {fmt(t.survey.fields.tasksHint, { max: MAX_TASKS })}
                  </p>
                )}
              </section>

              <section className="space-y-2 sm:max-w-[14rem]">
                <label htmlFor="experienceYears" className="block text-sm font-medium text-[color:var(--ink)]">
                  {t.survey.fields.experience}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="experienceYears"
                    type="number"
                    min={0}
                    max={50}
                    step={1}
                    inputMode="numeric"
                    value={experienceYears}
                    onChange={(event) => setExperienceYears(event.target.value)}
                    aria-invalid={Boolean(errors.experienceYears)}
                    aria-describedby={errors.experienceYears ? 'experienceYears-error' : undefined}
                    className={`${inputClass} ${errors.experienceYears ? 'border-[color:var(--coral)] focus:border-[color:var(--coral)] focus:ring-[rgba(220,75,62,0.16)]' : ''}`}
                  />
                  <span className="shrink-0 text-sm text-[color:var(--ink-muted)]">
                    {t.survey.fields.yearUnit}
                  </span>
                </div>
                {errors.experienceYears && (
                  <p id="experienceYears-error" className="text-xs text-[color:var(--coral)]">
                    {errors.experienceYears}
                  </p>
                )}
              </section>
            </>
          )}

          {step === 2 && (
            <>
              <fieldset className="space-y-3">
                <legend className="block text-sm font-medium text-[color:var(--ink)]">
                  {t.survey.fields.interests}
                </legend>
                <p className="text-xs text-[color:var(--ink-muted)]">{t.survey.fields.interestsHint}</p>
                <div className="flex flex-wrap gap-2">
                  {INTEREST_OPTIONS.map((interest) => {
                    const selected = interests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        aria-pressed={selected}
                        onClick={() =>
                          toggleChoice(interest, interests, setInterests)
                        }
                        className={`rounded-full border px-3 py-1.5 text-sm transition ${
                          selected
                            ? 'border-[color:var(--accent)] bg-[color:var(--accent)] text-white shadow-[0_6px_16px_rgba(37,99,235,0.24)]'
                            : 'border-[color:var(--line)] bg-white/80 text-[color:var(--ink-body)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]'
                        }`}
                      >
                        {tr.term('interest', interest)}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <fieldset className="space-y-3">
                <legend className="block text-sm font-medium text-[color:var(--ink)]">
                  {t.survey.fields.skills} <span className="text-[color:var(--coral)]">*</span>
                </legend>
                <p className="text-xs text-[color:var(--ink-muted)]">
                  {fmt(t.survey.fields.skillsHint, { max: MAX_SKILLS })}
                </p>
                <ChoiceGrid
                  options={SKILL_OPTIONS.map((value, index) => ({
                    value,
                    label: t.survey.fields.skillOptions[index],
                  }))}
                  selected={skills}
                  maxSelections={MAX_SKILLS}
                  onToggle={(value) => toggleChoice(value, skills, setSkills)}
                />
                <div className="flex items-center gap-2">
                  <input
                    id="skillInput"
                    type="text"
                    value={skillInput}
                    onChange={(event) => setSkillInput(event.target.value)}
                    onKeyDown={handleSkillKeyDown}
                    placeholder={t.survey.fields.skillPlaceholder}
                    aria-invalid={Boolean(errors.existingSkills)}
                    aria-describedby={errors.existingSkills ? 'existingSkills-error' : undefined}
                    className={`${inputClass} ${errors.existingSkills ? 'border-[color:var(--coral)] focus:border-[color:var(--coral)] focus:ring-[rgba(220,75,62,0.16)]' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={addSkill}
                    className="shrink-0 rounded-lg border border-[color:var(--line)] bg-white/90 px-3 py-2 text-sm font-medium text-[color:var(--ink-body)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                  >
                    {t.survey.fields.addSkill}
                  </button>
                </div>
                {errors.existingSkills && (
                  <p id="existingSkills-error" className="text-xs text-[color:var(--coral)]">
                    {errors.existingSkills}
                  </p>
                )}
                {skills.length > 0 && (
                  <ul className="flex flex-wrap gap-2 pt-1">
                    {skills.map((skill) => (
                      <li
                        key={skill}
                        className="inline-flex items-center gap-1 rounded-full border border-[rgba(37,99,235,0.18)] bg-[rgba(37,99,235,0.07)] py-1 pl-3 pr-2 text-sm text-[color:var(--accent-strong)]"
                      >
                        {tr.term('skill', skill)}
                        <button
                          type="button"
                          onClick={() => setSkills((previous) => previous.filter((item) => item !== skill))}
                          aria-label={fmt(t.survey.fields.removeSkill, { skill })}
                          className="rounded-full px-1 text-[color:var(--accent)] transition hover:bg-[rgba(37,99,235,0.14)]"
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </fieldset>
            </>
          )}

          {step === 3 && (
            <>
              <fieldset className="space-y-3">
                <legend className="block text-sm font-medium text-[color:var(--ink)]">
                  {t.survey.fields.targetDirections}
                </legend>
                <p className="text-xs text-[color:var(--ink-muted)]">
                  {t.survey.fields.targetDirectionsHint}
                </p>
                <ChoiceGrid
                  options={t.survey.fields.targetDirectionOptions}
                  selected={targetDirections}
                  onToggle={(value) => toggleChoice(value, targetDirections, setTargetDirections)}
                />
              </fieldset>

              <fieldset className="space-y-3">
                <legend className="block text-sm font-medium text-[color:var(--ink)]">
                  {t.survey.fields.workPreferences}
                </legend>
                <p className="text-xs text-[color:var(--ink-muted)]">
                  {t.survey.fields.workPreferencesHint}
                </p>
                <ChoiceGrid
                  options={t.survey.fields.workPreferenceOptions}
                  selected={workPreferences}
                  onToggle={(value) => toggleChoice(value, workPreferences, setWorkPreferences)}
                />
              </fieldset>

              <fieldset className="space-y-3">
                <legend className="block text-sm font-medium text-[color:var(--ink)]">
                  {t.survey.fields.growthPriorities}
                </legend>
                <p className="text-xs text-[color:var(--ink-muted)]">
                  {t.survey.fields.growthPrioritiesHint}
                </p>
                <ChoiceGrid
                  options={t.survey.fields.growthPriorityOptions}
                  selected={growthPriorities}
                  onToggle={(value) => toggleChoice(value, growthPriorities, setGrowthPriorities)}
                />
              </fieldset>

              <section className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="weeklyStudyHours" className="text-sm font-medium text-[color:var(--ink)]">
                    {t.survey.fields.hours}
                  </label>
                  <span className="text-sm font-semibold text-[color:var(--accent)]">
                    {fmt(t.survey.fields.hoursValue, { hours: weeklyStudyHours })}
                  </span>
                </div>
                <input
                  id="weeklyStudyHours"
                  type="range"
                  min={1}
                  max={40}
                  step={1}
                  value={weeklyStudyHours}
                  onChange={(event) => setWeeklyStudyHours(Number(event.target.value))}
                  className="w-full cursor-pointer accent-[color:var(--accent)]"
                />
                <div className="flex justify-between text-[11px] text-[color:var(--ink-muted)]">
                  <span>{t.survey.fields.hoursMin}</span>
                  <span>{t.survey.fields.hoursMax}</span>
                </div>
              </section>

              <fieldset className="space-y-2">
                <legend className="block text-sm font-medium text-[color:var(--ink)]">
                  {t.survey.fields.scenario}
                </legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {SCENARIO_VALUES.map((value) => {
                    const selected = scenario === value;
                    const title =
                      value === 'slow'
                        ? t.survey.fields.scenarioSlow
                        : t.survey.fields.scenarioFast;
                    const desc =
                      value === 'slow'
                        ? t.survey.fields.scenarioSlowDesc
                        : t.survey.fields.scenarioFastDesc;
                    return (
                      <label
                        key={value}
                        className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                          selected
                            ? 'border-[color:var(--accent)] bg-[rgba(37,99,235,0.06)] ring-1 ring-[color:var(--accent)]'
                            : 'border-[color:var(--line)] bg-white/60 hover:border-[color:var(--accent-2)]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="scenario"
                          value={value}
                          checked={selected}
                          onChange={() => setScenario(value)}
                          className="mt-1 accent-[color:var(--accent)]"
                        />
                        <span>
                          <span className="block text-sm font-medium text-[color:var(--ink)]">
                            {title}
                          </span>
                          <span className="mt-0.5 block text-xs leading-5 text-[color:var(--ink-muted)]">
                            {desc}
                          </span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            </>
          )}

          <div className="border-t border-[color:var(--line-soft)] pt-5">
            {isSubmitting && (
              <div
                role="status"
                aria-live="polite"
                className="mb-4 flex items-center gap-2 rounded-lg border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.07)] px-3 py-2.5 text-sm text-[color:var(--accent-strong)]"
              >
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-[rgba(37,99,235,0.25)] border-t-[color:var(--accent)]"
                  aria-hidden="true"
                />
                {t.survey.actions.submittingNote}
              </div>
            )}
            {submitError && (
              <div
                role="alert"
                className="mb-4 rounded-lg border border-[rgba(220,75,62,0.25)] bg-[rgba(220,75,62,0.06)] p-3"
              >
                <p className="text-sm font-medium text-[color:var(--coral)]">{submitError.message}</p>
                {submitError.details.length > 0 && (
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs text-[color:var(--coral)]">
                    {submitError.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
                <button
                  type="button"
                  onClick={() => formRef.current?.requestSubmit()}
                  disabled={isSubmitting}
                  className="mt-3 rounded-md border border-[rgba(220,75,62,0.35)] bg-white px-3 py-1.5 text-xs font-medium text-[color:var(--coral)] transition hover:bg-[rgba(220,75,62,0.08)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {t.meta.retry}
                </button>
              </div>
            )}
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
              {step === 1 ? (
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm font-medium text-[color:var(--ink-body)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                >
                  {t.meta.back}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => router.push(STEP_PATHS[step - 2])}
                  disabled={!canNavigate}
                  className="rounded-xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm font-medium text-[color:var(--ink-body)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {t.survey.actions.previous}
                </button>
              )}
              <button
                type="submit"
                disabled={!canNavigate}
                className="flex items-center justify-center gap-2 rounded-xl bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,0.28)] transition hover:bg-[color:var(--accent-strong)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {step === 3
                  ? isSubmitting
                    ? t.survey.actions.submitting
                    : t.survey.actions.submit
                  : t.survey.actions.next}
              </button>
            </div>
            {step === 3 && (
              <p className="mt-3 text-center text-xs text-[color:var(--ink-muted)]">
                {t.survey.actions.submitHint}
              </p>
            )}
          </div>
        </form>
      </main>
    </>
  );
}
