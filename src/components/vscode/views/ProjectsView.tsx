import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Network,
  Activity,
  Layers,
  CheckCircle2,
  X,
  ArrowRight,
  Server,
  Cloud,
  Database
} from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  metrics: { label: string; value: string; detail: string }[];
  architecture: {
    steps: { node: string; role: string; protocol: string }[];
    endpoints: { verb: string; path: string; latency: string; auth: string }[];
  };
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'insurance-tracker',
    title: 'Automated Insurance Tracker & Renewal Hub',
    category: 'FULLSTACK & ENTERPRISE BACKEND',
    badge: 'PRODUCTION',
    description:
      'Full-stack React + Spring Boot application to manage health, term & auto insurance. Features secure OAuth2 login, automated cron renewal email jobs, and normalized PostgreSQL persistence.',
    techStack: ['Spring Boot 3', 'PostgreSQL', 'React', 'OAuth2', 'Java 17', 'Docker'],
    liveUrl: 'https://www.insuretracks.com',
    githubFrontendUrl: 'https://github.com/LawrenceMelvin/Insurance-Tracker-Frontend',
    githubBackendUrl: 'https://github.com/LawrenceMelvin/Insurance-Tracker',
    metrics: [
      { label: 'THROUGHPUT', value: '12.5k rec/m', detail: 'Batch Processing' },
      { label: 'P99 LATENCY', value: '42ms', detail: 'REST Endpoints' },
      { label: 'AUTOMATION', value: '100%', detail: 'Zero-Touch Renewal' },
    ],
    architecture: {
      steps: [
        { node: 'React Client SPA', role: 'State & OAuth2 Session', protocol: 'HTTPS / REST' },
        { node: 'Spring Boot Gateway', role: 'Security & Business Validation', protocol: 'JPA / Hikari' },
        { node: 'PostgreSQL RDS', role: 'ACID Relational Storage', protocol: 'Cron / Async' },
        { node: 'Renewal Batch Engine', role: 'Automated Policy Polling', protocol: 'SMTP / SQS' },
        { node: 'Notification Dispatcher', role: 'Email Alert Delivery', protocol: 'Delivered' },
      ],
      endpoints: [
        { verb: 'GET', path: '/api/v1/policies/expiring', latency: '24ms', auth: 'Bearer JWT' },
        { verb: 'POST', path: '/api/v1/policies/renew', latency: '58ms', auth: 'Bearer JWT' },
        { verb: 'POST', path: '/api/v1/batch/trigger-cron', latency: '110ms', auth: 'ServiceKey' },
        { verb: 'GET', path: '/actuator/health', latency: '4ms', auth: 'Internal' },
      ],
    },
  },
  {
    id: 'aws-transcriber',
    title: 'Serverless AWS Transcriber Pipeline',
    category: 'CLOUD & EVENT-DRIVEN AUTOMATION',
    badge: 'SERVERLESS',
    description:
      'Asynchronous media pipeline converting video/audio files to subtitles using AWS S3 triggers, EventBridge orchestration, Python Lambda workers, and AWS Transcribe.',
    techStack: ['AWS S3', 'AWS Transcribe', 'AWS Lambda', 'Python', 'EventBridge', 'DynamoDB'],
    githubUrl: 'https://github.com/LawrenceMelvin/AWS-Transcriber',
    metrics: [
      { label: 'CONCURRENCY', value: '500+ jobs', detail: 'Parallel Workers' },
      { label: 'COST EFFICIENCY', value: '87% savings', detail: 'vs Dedicated EC2' },
      { label: 'COLD START', value: '140ms', detail: 'Python 3.11 Runtime' },
    ],
    architecture: {
      steps: [
        { node: 'Client Audio Upload', role: 'Presigned Multipart S3', protocol: 'S3 API' },
        { node: 'AWS EventBridge', role: 'ObjectCreated Event Router', protocol: 'Event Rule' },
        { node: 'Python Lambda Worker', role: 'Job Dispatcher & Sanitizer', protocol: 'AWS SDK' },
        { node: 'AWS Transcribe', role: 'GPU Speech-to-Text Model', protocol: 'JSON Stream' },
        { node: 'DynamoDB & S3', role: 'Subtitle Storage & Webhook', protocol: 'Webhook Call' },
      ],
      endpoints: [
        { verb: 'POST', path: '/api/v1/transcribe/upload-url', latency: '35ms', auth: 'AWS IAM' },
        { verb: 'GET', path: '/api/v1/transcribe/status/{jobId}', latency: '18ms', auth: 'AWS IAM' },
        { verb: 'POST', path: '/api/v1/transcribe/webhook', latency: '45ms', auth: 'Signed URL' },
      ],
    },
  },
  {
    id: 'bachat-plan',
    title: 'BachatPlan — Personal Finance & Microservices',
    category: 'FINTECH & DISTRIBUTED APIS',
    badge: 'ACTIVE',
    description:
      'Full-stack personal finance application built with decoupled Flask and Spring Boot microservices to categorize recurring expenses and analyze budgeting goals.',
    techStack: ['React', 'Flask', 'Spring Boot', 'PostgreSQL', 'Redis Cache', 'REST'],
    liveUrl: 'https://bachatplan.netlify.app/',
    githubFrontendUrl: 'https://github.com/LawrenceMelvin/BachatPlan-Frontend',
    githubBackendUrl: 'https://github.com/LawrenceMelvin/SmartInvest-Backend',
    metrics: [
      { label: 'CACHE HIT RATIO', value: '94%', detail: 'Redis Tier' },
      { label: 'DATA ACCURACY', value: '99.9%', detail: 'Categorization' },
      { label: 'RESPONSE TIME', value: '< 50ms', detail: 'Cached Endpoints' },
    ],
    architecture: {
      steps: [
        { node: 'React Web Interface', role: 'Dashboard & Charting', protocol: 'HTTPS' },
        { node: 'Flask Analytics API', role: 'Transaction Classification', protocol: 'REST / gRPC' },
        { node: 'Spring Boot Core', role: 'Account Balance & Ledger', protocol: 'JPA' },
        { node: 'PostgreSQL & Redis', role: 'ACID Ledger + Cache', protocol: 'Persisted' },
      ],
      endpoints: [
        { verb: 'GET', path: '/api/v1/expenses/summary', latency: '15ms', auth: 'JWT' },
        { verb: 'POST', path: '/api/v1/expenses/categorize', latency: '75ms', auth: 'JWT' },
      ],
    },
  },
  {
    id: 'things-i-do',
    title: 'Things I Do — Cloud Journal & Docker CI/CD',
    category: 'DEVOPS & CONTAINERIZATION',
    badge: 'CI/CD DEPLOYED',
    description:
      'Full-stack Flask blogging platform containerized with Docker and continuously built & deployed on AWS EC2 via automated Jenkins CI/CD pipeline.',
    techStack: ['Flask', 'Docker', 'AWS EC2', 'Jenkins', 'PostgreSQL', 'Nginx'],
    liveUrl: 'https://thingsido-latest.onrender.com/login',
    githubUrl: 'https://github.com/LawrenceMelvin/FlaskBlog-Thing-I-Do/tree/master',
    metrics: [
      { label: 'DEPLOY DOWNTIME', value: 'Zero', detail: 'Blue/Green Rollout' },
      { label: 'CONTAINER SIZE', value: '124MB', detail: 'Alpine Minified' },
      { label: 'BUILD TIME', value: '< 2.5 min', detail: 'Jenkins Pipeline' },
    ],
    architecture: {
      steps: [
        { node: 'Git Push (Master)', role: 'Webhook Trigger', protocol: 'GitHub Hook' },
        { node: 'Jenkins CI/CD Server', role: 'Automated Test & Docker Build', protocol: 'Docker CLI' },
        { node: 'Docker Registry', role: 'Versioned Image Tagging', protocol: 'HTTPS' },
        { node: 'AWS EC2 + Nginx', role: 'Reverse Proxy & Container', protocol: 'Port 80/443' },
      ],
      endpoints: [
        { verb: 'GET', path: '/posts', latency: '28ms', auth: 'Public' },
        { verb: 'POST', path: '/login', latency: '62ms', auth: 'Session' },
      ],
    },
  },
  {
    id: 'heart-attack-risk',
    title: 'Heart Attack Risk Machine Learning Model',
    category: 'MACHINE LEARNING & PREDICTION',
    badge: 'SCIKIT-LEARN',
    description:
      'Predictive clinical risk analysis platform employing Random Forest classification on health biometric indicators to deliver instant risk scores.',
    techStack: ['Python', 'Scikit-learn', 'Random Forest', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/LawrenceMelvin/Heart-Disease-risk-',
    metrics: [
      { label: 'MODEL ACCURACY', value: '88.4%', detail: 'Cross-Validated' },
      { label: 'INFERENCE TIME', value: '< 5ms', detail: 'Local Runtime' },
      { label: 'FEATURES', value: '14 Bio-markers', detail: 'Normalized' },
    ],
    architecture: {
      steps: [
        { node: 'Biometric Input Vector', role: 'Feature Normalization', protocol: 'Data Pipeline' },
        { node: 'Random Forest Ensemble', role: 'Trained Classifier (100 Trees)', protocol: 'Inference' },
        { node: 'Confidence Scorer', role: 'Pathology Risk Index', protocol: 'Output JSON' },
      ],
      endpoints: [
        { verb: 'POST', path: '/predict', latency: '4ms', auth: 'API Key' },
      ],
    },
  },
];

export const ProjectsView: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="flex min-h-full py-4 px-2 font-mono text-[13px]">
      {/* Line Numbers Gutter */}
      <div className="w-12 select-none text-[#6e7681] text-right pr-4 flex flex-col space-y-1 font-mono text-[12.5px] opacity-70">
        {Array.from({ length: 60 }).map((_, i) => (
          <span key={i}>{String(i + 1).padStart(2, '0')}</span>
        ))}
      </div>

      {/* Code Header & Projects Grid */}
      <div className="flex-1 pr-6 pl-2 space-y-2">
        <div className="text-[#6a9955] italic">
          # projects.py — Lawrence Melvin S Production Architecture Showcase
        </div>
        <div className="leading-relaxed">
          <span className="text-[#c586c0]">from</span> dataclasses <span className="text-[#c586c0]">import</span> <span className="text-[#9cdcfe]">dataclass</span>
        </div>
        <div className="leading-relaxed">
          <span className="text-[#c586c0]">from</span> typing <span className="text-[#c586c0]">import</span> <span className="text-[#9cdcfe]">List</span>, <span className="text-[#9cdcfe]">Dict</span>, <span className="text-[#9cdcfe]">Optional</span>
        </div>
        <div className="leading-relaxed mt-2">
          <span className="text-[#c586c0]">class</span> <span className="text-[#4ec9b0]">ProductionSystemsRegistry</span>:
        </div>
        <div className="text-[#ce9178] pl-4 italic">
          """Verified production implementations with system telemetry and architecture topologies."""
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 my-5 ml-2 font-sans">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-[#252526] border border-[#3c3c3c] hover:border-[#007acc] rounded-lg p-5 transition-all shadow-lg flex flex-col justify-between group hover:shadow-xl"
            >
              <div>
                {/* Header breadcrumb & Badge */}
                <div className="flex items-center justify-between text-xs font-mono pb-2.5 border-b border-[#333333]">
                  <span className="text-[#38bdf8] flex items-center gap-1.5 font-bold">
                    <Activity className="w-3.5 h-3.5 text-[#10b981]" />
                    {project.category}
                  </span>
                  <span className="text-[10px] bg-[#10b981]/15 text-[#10b981] px-2 py-0.5 rounded font-bold border border-[#10b981]/30">
                    {project.badge}
                  </span>
                </div>

                {/* Project Title & Description */}
                <h2 className="text-lg font-bold text-white mt-3 group-hover:text-[#38bdf8] transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs text-[#a0a0a0] mt-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Telemetry Metrics Panel */}
                <div className="grid grid-cols-3 gap-2 my-4 p-2.5 bg-[#1e1e1e] rounded border border-[#2d2d2d] text-center font-mono">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="border-r border-[#2d2d2d] last:border-r-0">
                      <div className="text-[9.5px] text-[#6e7681] uppercase">{m.label}</div>
                      <div className="text-xs font-bold text-white mt-0.5">{m.value}</div>
                      <div className="text-[9px] text-[#10b981]">{m.detail}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#1e1e1e] text-[#cccccc] px-2 py-0.5 rounded border border-[#333333]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 mt-4 border-t border-[#333333] flex flex-wrap items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3 py-1.5 bg-[#2d2d2d] hover:bg-[#383838] text-[#38bdf8] hover:text-white rounded text-xs font-mono flex items-center gap-1.5 transition-colors border border-[#444444]"
                >
                  <Network className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>Inspect Architecture</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 bg-[#007acc] hover:bg-[#0062a3] text-white rounded text-xs font-sans font-medium flex items-center gap-1 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-[#1e1e1e] hover:bg-[#333333] text-[#cccccc] hover:text-white rounded border border-[#3c3c3c] transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubFrontendUrl && (
                    <a
                      href={project.githubFrontendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-[#1e1e1e] hover:bg-[#333333] text-[#cccccc] hover:text-white rounded text-[11px] font-mono border border-[#3c3c3c] transition-colors flex items-center gap-1"
                      title="Frontend Repository"
                    >
                      <Github className="w-3 h-3" />
                      <span>UI</span>
                    </a>
                  )}
                  {project.githubBackendUrl && (
                    <a
                      href={project.githubBackendUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-[#1e1e1e] hover:bg-[#333333] text-[#cccccc] hover:text-white rounded text-[11px] font-mono border border-[#3c3c3c] transition-colors flex items-center gap-1"
                      title="Backend Repository"
                    >
                      <Github className="w-3 h-3" />
                      <span>API</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Interactive Architecture Inspector */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm font-sans">
            <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 space-y-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#333333]">
                <div>
                  <span className="font-mono text-xs text-[#38bdf8] flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#f59e0b]" />
                    SYSTEM ARCHITECTURE TOPOLOGY
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded hover:bg-[#333333] text-[#9d9d9d] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Service Topology Pipeline Diagram */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-[#858585] uppercase">
                  Service Boundaries & Data Flow:
                </div>
                <div className="p-4 rounded-lg bg-[#070A0F] border border-[#2d2d2d] space-y-3 font-mono text-xs">
                  {selectedProject.architecture.steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-2.5 rounded bg-[#1e1e1e] border border-[#333333]">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#007acc]/20 text-[#38bdf8] flex items-center justify-center text-[10px] font-bold">
                          {idx + 1}
                        </span>
                        <div>
                          <span className="font-bold text-white block">{step.node}</span>
                          <span className="text-[11px] text-[#858585]">{step.role}</span>
                        </div>
                      </div>
                      <div className="text-[11px] px-2 py-0.5 rounded bg-[#252526] text-[#f59e0b] border border-[#3c3c3c]">
                        {step.protocol}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active API Endpoints Table */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-[#858585] uppercase">
                  Active REST Endpoints:
                </div>
                <div className="rounded bg-[#070A0F] border border-[#2d2d2d] overflow-hidden font-mono text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-[#252526] border-b border-[#333333] text-[#858585] text-[11px]">
                      <tr>
                        <th className="p-2.5">VERB</th>
                        <th className="p-2.5">URI ROUTE</th>
                        <th className="p-2.5">AUTH</th>
                        <th className="p-2.5 text-right">AVG LATENCY</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2d2d2d]">
                      {selectedProject.architecture.endpoints.map((ep, idx) => (
                        <tr key={idx} className="hover:bg-[#181818]">
                          <td className="p-2.5 font-bold text-[#10b981]">{ep.verb}</td>
                          <td className="p-2.5 text-white">{ep.path}</td>
                          <td className="p-2.5 text-[#858585]">{ep.auth}</td>
                          <td className="p-2.5 text-right text-[#38bdf8] font-bold">{ep.latency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Close Button */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-[#007acc] hover:bg-[#0062a3] text-white rounded text-xs font-medium"
                >
                  Close Topology View
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
