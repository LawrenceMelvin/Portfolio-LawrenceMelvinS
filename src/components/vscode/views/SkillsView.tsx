import React, { useState } from 'react';
import { Code2, Server, Cloud, Database, Wrench, Search, Check } from 'lucide-react';

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  skills: { name: string; level: string; experience: string; tag: string }[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    icon: <Code2 className="w-4 h-4 text-[#ffd343]" />,
    skills: [
      { name: 'Python', level: 'Expert', experience: '3+ Years', tag: 'Data & Serverless' },
      { name: 'Java', level: 'Advanced', experience: '3+ Years', tag: 'Enterprise & Spring' },
      { name: 'SQL', level: 'Advanced', experience: '3+ Years', tag: 'Query Optimization' },
      { name: 'TypeScript', level: 'Intermediate', experience: '2+ Years', tag: 'Fullstack React' },
      { name: 'Bash / Shell', level: 'Proficient', experience: '3+ Years', tag: 'Linux Automation' },
      { name: 'Perl', level: 'Prior Exp', experience: 'Legacy', tag: 'Scripting' },
    ],
  },
  {
    category: 'Backend Frameworks',
    icon: <Server className="w-4 h-4 text-[#38bdf8]" />,
    skills: [
      { name: 'Spring Boot 3', level: 'Advanced', experience: '3+ Years', tag: 'Microservices & REST' },
      { name: 'Flask', level: 'Advanced', experience: '2+ Years', tag: 'Python APIs' },
      { name: 'Spring Data JPA', level: 'Advanced', experience: '3+ Years', tag: 'ORM & Performance' },
      { name: 'Spring Security', level: 'Proficient', experience: '2+ Years', tag: 'OAuth2 & JWT' },
      { name: 'React', level: 'Intermediate', experience: '2+ Years', tag: 'Frontend SPAs' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="w-4 h-4 text-[#f59e0b]" />,
    skills: [
      { name: 'AWS S3', level: 'Advanced', experience: '3+ Years', tag: 'Storage & Presigned URLs' },
      { name: 'AWS Lambda', level: 'Advanced', experience: '2+ Years', tag: 'Serverless Pipelines' },
      { name: 'AWS Transcribe', level: 'Proficient', experience: '1+ Year', tag: 'Speech-to-Text' },
      { name: 'AWS EC2', level: 'Proficient', experience: '2+ Years', tag: 'Cloud Hosting' },
      { name: 'Docker', level: 'Advanced', experience: '2+ Years', tag: 'Containerization' },
      { name: 'Jenkins', level: 'Proficient', experience: '2+ Years', tag: 'CI/CD Automation' },
      { name: 'Git & GitHub', level: 'Advanced', experience: '3+ Years', tag: 'Version Control' },
    ],
  },
  {
    category: 'Databases & Storage',
    icon: <Database className="w-4 h-4 text-[#10b981]" />,
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', experience: '3+ Years', tag: 'Indexing & ACID' },
      { name: 'Oracle SQL', level: 'Proficient', experience: '2+ Years', tag: 'Relational DB' },
      { name: 'MySQL', level: 'Proficient', experience: '2+ Years', tag: 'Schema Design' },
      { name: 'DynamoDB', level: 'Proficient', experience: '1+ Year', tag: 'NoSQL Key-Value' },
      { name: 'Redis', level: 'Proficient', experience: '1+ Year', tag: 'In-Memory Caching' },
    ],
  },
  {
    category: 'Testing & Tools',
    icon: <Wrench className="w-4 h-4 text-[#c586c0]" />,
    skills: [
      { name: 'JUnit', level: 'Advanced', experience: '3+ Years', tag: 'Unit & Mock Testing' },
      { name: 'Postman', level: 'Advanced', experience: '3+ Years', tag: 'API Testing & Mocks' },
      { name: 'Linux OS', level: 'Advanced', experience: '3+ Years', tag: 'Ubuntu / Debian CLI' },
      { name: 'Vite', level: 'Proficient', experience: '2+ Years', tag: 'Build Tooling' },
      { name: 'Tailwind CSS', level: 'Advanced', experience: '2+ Years', tag: 'Styling' },
    ],
  },
];

export const SkillsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredGroups = SKILL_GROUPS.filter((group) => {
    if (selectedCategory !== 'All' && group.category !== selectedCategory) {
      return false;
    }
    return true;
  }).map((group) => {
    return {
      ...group,
      skills: group.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tag.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    };
  }).filter((group) => group.skills.length > 0);

  return (
    <div className="flex min-h-full py-4 px-2 font-mono text-[13px]">
      {/* Line Numbers Gutter */}
      <div className="w-12 select-none text-[#6e7681] text-right pr-4 flex flex-col space-y-1 font-mono text-[12.5px] opacity-70">
        {Array.from({ length: 55 }).map((_, i) => (
          <span key={i}>{String(i + 1).padStart(2, '0')}</span>
        ))}
      </div>

      {/* Code Header & Interactive Matrix */}
      <div className="flex-1 pr-6 pl-2 space-y-2">
        <div className="text-[#6a9955] italic">
          // skills.ts — Lawrence Melvin S Typed Competency & Technology Stack
        </div>
        <div className="leading-relaxed">
          <span className="text-[#c586c0]">export interface</span> <span className="text-[#4ec9b0]">TechnicalStack</span> &#123;
        </div>
        <div className="leading-relaxed pl-4">
          <span className="text-[#9cdcfe]">coreLanguages</span>: <span className="text-[#4ec9b0]">string</span>[];
        </div>
        <div className="leading-relaxed pl-4">
          <span className="text-[#9cdcfe]">enterpriseFrameworks</span>: <span className="text-[#4ec9b0]">string</span>[];
        </div>
        <div className="leading-relaxed pl-4">
          <span className="text-[#9cdcfe]">cloudAndAutomation</span>: <span className="text-[#4ec9b0]">string</span>[];
        </div>
        <div className="leading-relaxed pl-4">
          <span className="text-[#9cdcfe]">storageAndDatabases</span>: <span className="text-[#4ec9b0]">string</span>[];
        </div>
        <div className="leading-relaxed">&#125;</div>

        {/* Interactive Filter Bar */}
        <div className="my-5 ml-2 p-4 rounded-lg bg-[#252526] border border-[#3c3c3c] shadow-lg font-sans space-y-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {['All', 'Languages', 'Backend Frameworks', 'Cloud & DevOps', 'Databases & Storage', 'Testing & Tools'].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded transition-colors ${
                      selectedCategory === cat
                        ? 'bg-[#007acc] text-white font-semibold'
                        : 'bg-[#1e1e1e] text-[#858585] hover:text-[#cccccc] border border-[#333333]'
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[220px]">
              <input
                type="text"
                placeholder="Filter technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1e1e1e] border border-[#3c3c3c] text-white text-xs rounded px-2.5 py-1.5 focus:border-[#007acc] focus:outline-none font-mono"
              />
              <Search className="w-3.5 h-3.5 text-[#858585] absolute right-2.5 top-2.5" />
            </div>
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-6 my-5 ml-2 font-sans">
          {filteredGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] font-bold uppercase tracking-wider">
                {group.icon}
                <span>{group.category}</span>
                <span className="text-[#6e7681] text-[10px] font-normal">
                  ({group.skills.length} competencies)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded bg-[#252526] border border-[#333333] hover:border-[#007acc] transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-white font-bold text-sm group-hover:text-[#38bdf8] transition-colors">
                        {skill.name}
                      </div>
                      <div className="text-[11px] text-[#858585] font-mono mt-0.5">
                        {skill.tag}
                      </div>
                    </div>
                    <div className="text-right font-mono">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#1e1e1e] text-[#10b981] border border-[#10b981]/30 font-semibold block">
                        {skill.level}
                      </span>
                      <span className="text-[9.5px] text-[#6e7681] block mt-1">
                        {skill.experience}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
