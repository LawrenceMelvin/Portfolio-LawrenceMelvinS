import React from 'react';
import { Briefcase, Calendar, CheckCircle2, TrendingUp, Award, GitBranch } from 'lucide-react';

interface ExperienceItem {
  role: string;
  period: string;
  type: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Software Engineer — Backend & Cloud Systems',
    period: '2023 — Present',
    type: 'Full-time / Core Backend',
    summary:
      'Engineered distributed backend architectures, high-volume batch processing pipelines, and event-driven cloud services. Spearheaded microservice decoupling and PostgreSQL query optimization.',
    achievements: [
      'Designed and deployed automated cron renewal jobs handling 12,500+ records/min with 100% zero-touch execution.',
      'Reduced database P95 response latency by 40% across high-traffic PostgreSQL queries through index tuning and query plan restructuring.',
      'Constructed serverless asynchronous audio pipeline utilizing AWS S3, Lambda, EventBridge, and Transcribe with 87% compute cost reduction.',
      'Implemented robust OAuth2 and JWT authorization layers ensuring zero security vulnerabilities during automated audit checks.',
    ],
    technologies: ['Java 17', 'Spring Boot 3', 'Python', 'AWS (S3, Lambda, EC2)', 'PostgreSQL', 'Docker', 'Jenkins'],
    metrics: [
      { label: 'QUERY SPEED', value: '+40% P95' },
      { label: 'UPTIME SLA', value: '99.9%' },
      { label: 'DAILY BATCHES', value: '10k+' },
    ],
  },
  {
    role: 'Associate Software Engineer — Automation & APIs',
    period: '2021 — 2023',
    type: 'Full-time / Systems',
    summary:
      'Developed RESTful web services with Python Flask and Java. Built containerized deployment pipelines with Jenkins and managed multi-environment testing.',
    achievements: [
      'Engineered full-stack responsive web portals integrated with relational databases (Oracle SQL, PostgreSQL).',
      'Configured Jenkins CI/CD pipelines to build, test, and deploy Docker container images to cloud VMs seamlessly.',
      'Authored comprehensive unit and integration test suites with JUnit and Postman, achieving 85%+ coverage on critical business logic.',
      'Collaborated in Agile sprints with cross-functional teams to deliver client deliverables on schedule.',
    ],
    technologies: ['Python', 'Flask', 'Java', 'Oracle SQL', 'PostgreSQL', 'Git', 'Jenkins', 'JUnit', 'Postman'],
    metrics: [
      { label: 'TEST COVERAGE', value: '85%+' },
      { label: 'RELEASE CYCLE', value: 'Bi-weekly' },
      { label: 'DEFECT RATE', value: '< 2%' },
    ],
  },
];

export const ExperienceView: React.FC = () => {
  return (
    <div className="flex min-h-full py-4 px-2 font-mono text-[13px]">
      {/* Line Numbers Gutter */}
      <div className="w-12 select-none text-[#6e7681] text-right pr-4 flex flex-col space-y-1 font-mono text-[12.5px] opacity-70">
        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i}>{String(i + 1).padStart(2, '0')}</span>
        ))}
      </div>

      {/* Code Header & Experience Cards */}
      <div className="flex-1 pr-6 pl-2 space-y-2">
        <div className="text-[#6a9955] italic">
          // experience.json — Lawrence Melvin S Career Chronology & Engineering Impact
        </div>
        <div className="leading-relaxed">
          <span className="text-[#c586c0]">&#123;</span>
        </div>
        <div className="leading-relaxed pl-4">
          <span className="text-[#9cdcfe]">"engineer"</span>: <span className="text-[#ce9178]">"Lawrence Melvin S"</span>,
        </div>
        <div className="leading-relaxed pl-4">
          <span className="text-[#9cdcfe]">"total_production_experience"</span>: <span className="text-[#ce9178]">"3+ Years"</span>,
        </div>
        <div className="leading-relaxed pl-4">
          <span className="text-[#9cdcfe]">"milestones"</span>: <span className="text-[#c586c0]">[</span>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6 my-5 ml-4 font-sans">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#252526] border border-[#3c3c3c] hover:border-[#007acc] rounded-lg p-6 shadow-xl transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-[#333333]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] mb-1">
                    <Briefcase className="w-3.5 h-3.5 text-[#f59e0b]" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#858585] bg-[#1e1e1e] px-3 py-1.5 rounded border border-[#333333] shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs text-[#a0a0a0] my-4 leading-relaxed">
                {exp.summary}
              </p>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-3 gap-3 my-4 p-3 bg-[#1e1e1e] rounded border border-[#2d2d2d] text-center font-mono">
                {exp.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="border-r border-[#2d2d2d] last:border-r-0">
                    <div className="text-[10px] text-[#6e7681]">{m.label}</div>
                    <div className="text-sm font-bold text-[#10b981] mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Key Accomplishments */}
              <div className="space-y-2 mt-4">
                <div className="text-xs font-mono text-[#cccccc] font-semibold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#38bdf8]" />
                  Key Achievements & Engineering Outcomes:
                </div>
                <ul className="space-y-1.5 text-xs text-[#a0a0a0] pl-1">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges */}
              <div className="mt-5 pt-4 border-t border-[#333333] flex flex-wrap gap-1.5 font-mono text-[11px]">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-[#1e1e1e] text-[#9cdcfe] px-2 py-0.5 rounded border border-[#333333]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="leading-relaxed pl-4">
          <span className="text-[#c586c0]">]</span>
        </div>
        <div className="leading-relaxed">
          <span className="text-[#c586c0]">&#125;</span>
        </div>
      </div>
    </div>
  );
};
