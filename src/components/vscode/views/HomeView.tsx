import React from 'react';
import {
  FolderGit2,
  Terminal,
  Mail,
  Download,
  Github,
  Linkedin,
  ArrowRight,
  ShieldCheck,
  Zap,
  Server,
  Database
} from 'lucide-react';
import { FileTab } from '../types';

interface HomeViewProps {
  onSelectTab: (tab: FileTab) => void;
  onRunTerminalCmd: (cmd: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onRunTerminalCmd,
}) => {
  return (
    <div className="flex min-h-full py-4 px-2 font-mono text-[13px]">
      {/* Line Numbers Gutter */}
      <div className="w-12 select-none text-[#6e7681] text-right pr-4 flex flex-col space-y-1 font-mono text-[12.5px] opacity-70">
        {Array.from({ length: 42 }).map((_, i) => (
          <span key={i}>{String(i + 1).padStart(2, '0')}</span>
        ))}
      </div>

      {/* Code Stream + Rendered Interactive UI */}
      <div className="flex-1 pr-6 pl-2 space-y-2">
        {/* Code Header Syntax */}
        <div className="leading-relaxed">
          <span className="text-[#c586c0]">import</span> React <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'react'</span>;
        </div>
        <div className="leading-relaxed">
          <span className="text-[#c586c0]">import</span> &#123; <span className="text-[#9cdcfe]">Microservices</span>, <span className="text-[#9cdcfe]">EventDrivenAWS</span>, <span className="text-[#9cdcfe]">SpringBoot</span>, <span className="text-[#9cdcfe]">PostgreSQL</span> &#125; <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]'">'@systems/backend'</span>;
        </div>
        <div className="text-[#6a9955] italic">
          // Lawrence Melvin S — Software Engineer (Backend, Automation & Cloud Architecture)
        </div>
        <div className="leading-relaxed">
          <span className="text-[#c586c0]">export default function</span> <span className="text-[#dcdcaa]">SoftwareEngineerProfile</span>() &#123;
        </div>

        {/* Live Interactive Hero Preview Card */}
        <div className="my-5 ml-2 p-6 rounded-lg bg-[#252526]/90 border border-[#3c3c3c] shadow-2xl backdrop-blur font-sans">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#333333]">
            <div className="space-y-3">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="font-semibold">ONLINE &bull; AVAILABLE FOR OPPORTUNITIES</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Lawrence Melvin S
              </h1>
              <p className="text-base text-[#38bdf8] font-mono">
                Software Engineer &bull; <span className="text-[#f59e0b]">Backend & Cloud Architecture</span>
              </p>
              <p className="text-sm text-[#a0a0a0] max-w-2xl leading-relaxed">
                Software Engineer with 3+ years of experience in backend development and automation.
                Skilled in <span className="text-white font-medium">Python, Java, Spring Boot, and AWS</span>.
                Experienced in building scalable batch jobs, integrating APIs, and deploying full-stack applications
                with robust database optimization and secure CI/CD workflows.
              </p>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 min-w-[260px] font-mono">
              <div className="bg-[#1e1e1e] p-3 rounded border border-[#333333] hover:border-[#f59e0b]/50 transition-colors">
                <div className="text-[#858585] text-[10px]">EXPERIENCE</div>
                <div className="text-xl font-bold text-[#f59e0b]">3+ Years</div>
                <div className="text-[10px] text-[#6e7681]">Production Backend</div>
              </div>
              <div className="bg-[#1e1e1e] p-3 rounded border border-[#333333] hover:border-[#10b981]/50 transition-colors">
                <div className="text-[#858585] text-[10px]">PIPELINE UPTIME</div>
                <div className="text-xl font-bold text-[#10b981]">99.9%</div>
                <div className="text-[10px] text-[#6e7681]">Zero-Touch Ops</div>
              </div>
              <div className="bg-[#1e1e1e] p-3 rounded border border-[#333333] hover:border-[#38bdf8]/50 transition-colors">
                <div className="text-[#858585] text-[10px]">DAILY BATCHES</div>
                <div className="text-xl font-bold text-[#38bdf8]">10k+</div>
                <div className="text-[10px] text-[#6e7681]">Automated Cron</div>
              </div>
              <div className="bg-[#1e1e1e] p-3 rounded border border-[#333333] hover:border-[#c586c0]/50 transition-colors">
                <div className="text-[#858585] text-[10px]">QUERY P95</div>
                <div className="text-xl font-bold text-[#c586c0]">-40%</div>
                <div className="text-[10px] text-[#6e7681]">Postgres Optimized</div>
              </div>
            </div>
          </div>

          {/* Interactive CTAs inside Hero */}
          <div className="pt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectTab('projects')}
              className="px-4 py-2 bg-[#007acc] hover:bg-[#0062a3] text-white rounded text-xs font-sans font-semibold flex items-center gap-2 shadow-md transition-all active:scale-95"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Inspect Projects.py</span>
            </button>
            <button
              onClick={() => onRunTerminalCmd('cat bio.txt')}
              className="px-3.5 py-2 bg-[#333333] hover:bg-[#3c3c3c] text-[#cccccc] rounded text-xs font-mono flex items-center gap-1.5 transition-colors border border-[#444444]"
            >
              <Terminal className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>$ cat bio.txt</span>
            </button>
            <button
              onClick={() => onSelectTab('contact')}
              className="px-3.5 py-2 bg-transparent hover:bg-[#333333] text-[#38bdf8] rounded text-xs font-sans border border-[#007acc]/50 flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Lawrence</span>
            </button>
            <a
              href="/Lawrence_Melvin_S.pdf"
              download="Lawrence_Melvin_S.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-[#1e1e1e] hover:bg-[#2a2d2e] text-[#a0a0a0] hover:text-white rounded text-xs font-mono border border-[#333333] flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume.pdf</span>
            </a>

            {/* Social Links on Right */}
            <div className="flex items-center gap-2 ml-auto text-[#858585]">
              <a
                href="https://github.com/LawrenceMelvin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded hover:bg-[#333333] hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/lawrence-melvin-39b417215/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded hover:bg-[#333333] hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Code Definition of Pillars */}
        <div className="text-[#6a9955] italic pl-2">
          // Architectural pillars and core specialties
        </div>
        <div className="leading-relaxed pl-2">
          <span className="text-[#c586c0]">const</span> <span className="text-[#9cdcfe]">coreArchitecturalCapabilities</span> = [
        </div>
        <div className="pl-6 space-y-1">
          <div><span className="text-[#ce9178]">"High-Throughput Microservices (Java 17, Spring Boot 3, REST APIs)"</span>,</div>
          <div><span className="text-[#ce9178]">"Distributed Automation & Async Batch Pipelines (Python, Cron, Jenkins)"</span>,</div>
          <div><span className="text-[#ce9178]">"Serverless & Event-Driven Cloud Systems (AWS Lambda, S3, Transcribe)"</span>,</div>
          <div><span className="text-[#ce9178]">"Database Query Optimization & ACID Modeling (PostgreSQL, Oracle, DynamoDB)"</span>,</div>
          <div><span className="text-[#ce9178]">"Container Orchestration & CI/CD Pipelines (Docker, Jenkins, AWS EC2)"</span></div>
        </div>
        <div className="pl-2">];</div>

        {/* Featured Project Spotlight Card */}
        <div className="my-6 ml-2 p-5 rounded-lg bg-[#1e1e1e] border border-[#2d2d2d] hover:border-[#007acc]/60 transition-all font-sans">
          <div className="flex items-center justify-between text-xs text-[#858585] font-mono pb-2.5 border-b border-[#2d2d2d]">
            <span className="text-[#38bdf8] flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#10b981]" />
              FLAGSHIP PRODUCTION SYSTEM
            </span>
            <span className="text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded text-[10px]">
              LIVE IN PRODUCTION
            </span>
          </div>
          <div className="mt-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-base font-bold text-white">
                Insurance Tracker & Automated Renewal Hub
              </h3>
              <p className="text-xs text-[#a0a0a0] mt-1 max-w-xl leading-relaxed">
                Full-stack React + Spring Boot application managing health, term, and auto insurance.
                Automates policy renewal notifications, Google OAuth2 login, and high-performance PostgreSQL persistence.
              </p>
              <div className="flex flex-wrap gap-2 mt-3 font-mono text-[11px]">
                <span className="text-[#f89820] bg-[#f89820]/10 px-2 py-0.5 rounded border border-[#f89820]/20 flex items-center gap-1">
                  <Server className="w-3 h-3" /> Spring Boot 3
                </span>
                <span className="text-[#38bdf8] bg-[#38bdf8]/10 px-2 py-0.5 rounded border border-[#38bdf8]/20 flex items-center gap-1">
                  <Database className="w-3 h-3" /> PostgreSQL
                </span>
                <span className="text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded border border-[#10b981]/20 flex items-center gap-1">
                  <Zap className="w-3 h-3" /> Automated Cron
                </span>
              </div>
            </div>
            <button
              onClick={() => onSelectTab('projects')}
              className="px-3.5 py-2 bg-[#252526] hover:bg-[#333333] border border-[#3c3c3c] text-white text-xs rounded font-mono flex items-center gap-1.5 shrink-0 transition-colors"
            >
              <span>Explore Specs</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#f59e0b]" />
            </button>
          </div>
        </div>

        <div className="leading-relaxed">
          <span className="text-[#c586c0]">return</span> &lt;<span className="text-[#4ec9b0]">WorkspaceLayout</span> profile=&#123;<span className="text-[#9cdcfe]">coreArchitecturalCapabilities</span>&#125; /&gt;;
        </div>
        <div className="leading-relaxed">
          &#125;
        </div>
      </div>
    </div>
  );
};
