import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Trash2, X, ChevronUp, ChevronDown, CheckCircle2 } from 'lucide-react';
import { FileTab } from './types';

interface IntegratedTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: FileTab) => void;
  externalCommand?: string;
}

interface CommandHistoryItem {
  cmd: string;
  output: React.ReactNode;
}

export const IntegratedTerminal: React.FC<IntegratedTerminalProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  externalCommand,
}) => {
  const [activePanelTab, setActivePanelTab] = useState<'problems' | 'output' | 'debug' | 'terminal'>('terminal');
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      cmd: 'lawrence --status',
      output: (
        <div className="space-y-1 text-[#cccccc]">
          <div className="text-[#38bdf8] font-bold">Lawrence Melvin S — Terminal Host v3.4.1 (x86_64-aws-cloud)</div>
          <div>All backend subsystems nominal. Type <span className="text-[#f59e0b]">'help'</span> or click pills below to inspect telemetry.</div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (externalCommand) {
      executeCommand(externalCommand);
    }
  }, [externalCommand]);

  useEffect(() => {
    scrollToBottom();
  }, [history, isOpen]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();

    if (lower === 'clear') {
      setHistory([]);
      return;
    }

    let resultNode: React.ReactNode = null;

    if (lower === 'help') {
      resultNode = (
        <div className="space-y-1 text-xs">
          <div className="text-[#f59e0b] font-bold">Available System Commands:</div>
          <div><span className="text-[#38bdf8]">$ cat bio.txt</span> — Display Lawrence Melvin's engineering background</div>
          <div><span className="text-[#38bdf8]">$ npm run projects</span> — View production systems &amp; repositories</div>
          <div><span className="text-[#38bdf8]">$ ./deploy-status</span> — Query AWS &amp; PostgreSQL operational health</div>
          <div><span className="text-[#38bdf8]">$ skills</span> — List core frameworks and languages</div>
          <div><span className="text-[#38bdf8]">$ contact</span> — Open direct communication dispatch</div>
          <div><span className="text-[#38bdf8]">$ whoami</span> — Identity credentials</div>
          <div><span className="text-[#38bdf8]">$ clear</span> — Clear terminal console</div>
        </div>
      );
    } else if (lower.includes('bio') || lower === 'cat bio.txt') {
      resultNode = (
        <div className="space-y-1 text-xs text-[#a0a0a0] leading-relaxed border-l-2 border-[#f59e0b] pl-3 py-1">
          <div className="text-white font-bold">Lawrence Melvin S — Software Engineer</div>
          <div>Specializing in high-throughput backend architecture, automated cron pipelines, and AWS cloud workflows.</div>
          <div>3+ years of production experience in Python, Java, Spring Boot, and PostgreSQL.</div>
          <div className="text-[#10b981]">Status: Ready for Backend / Fullstack Engineering roles.</div>
        </div>
      );
    } else if (lower.includes('project') || lower === 'npm run projects') {
      onSelectTab('projects');
      resultNode = (
        <div className="text-xs text-[#10b981]">
          Switched editor tab to <span className="text-white font-bold">projects.py</span>. Inspecting 5 production systems.
        </div>
      );
    } else if (lower.includes('deploy') || lower === './deploy-status') {
      resultNode = (
        <div className="space-y-1 text-xs font-mono">
          <div className="text-[#10b981] flex items-center gap-1.5 font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>AWS Infrastructure: 100% OPERATIONAL</span>
          </div>
          <div className="text-[#858585] pl-5 space-y-0.5">
            <div>&bull; PostgreSQL RDS: Healthy (P95 Latency: 42ms)</div>
            <div>&bull; Spring Boot Gateway: 0 Unhandled Exceptions</div>
            <div>&bull; AWS S3 &amp; Lambda Transcriber: 500 Concurrency Pool Active</div>
            <div>&bull; Jenkins CI/CD Pipeline: Build #42 Passing</div>
          </div>
        </div>
      );
    } else if (lower.includes('skill') || lower === 'skills') {
      onSelectTab('skills');
      resultNode = (
        <div className="text-xs text-[#38bdf8]">
          Switched editor tab to <span className="text-white font-bold">skills.ts</span>. 25+ verified competencies loaded.
        </div>
      );
    } else if (lower.includes('contact')) {
      onSelectTab('contact');
      resultNode = (
        <div className="text-xs text-[#4ec9b0]">
          Switched editor tab to <span className="text-white font-bold">contact.md</span>. Dispatch message ready.
        </div>
      );
    } else if (lower === 'whoami') {
      resultNode = (
        <div className="text-xs text-[#cccccc]">
          guest@melvin-cloud (Permissions: Read-Only Telemetry Viewer)
        </div>
      );
    } else if (lower.includes('git')) {
      resultNode = (
        <div className="text-xs text-[#858585]">
          On branch <span className="text-white font-bold">main</span>. Your branch is up to date with 'origin/main'.
        </div>
      );
    } else {
      resultNode = (
        <div className="text-xs text-[#ff5f56]">
          Command not found: '{trimmed}'. Type <span className="text-[#f59e0b]">'help'</span> for list of commands.
        </div>
      );
    }

    setHistory((prev) => [...prev, { cmd: trimmed, output: resultNode }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
      setInputVal('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="h-64 bg-[#1e1e1e] border-t border-[#2d2d2d] flex flex-col font-mono text-xs z-30 select-none shadow-2xl flex-shrink-0">
      {/* 1. Panel Header Tabs & Actions */}
      <div className="h-8 bg-[#252526] border-b border-[#2d2d2d] px-3 flex items-center justify-between text-[#858585]">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setActivePanelTab('problems')}
            className={`h-8 flex items-center gap-1.5 transition-colors border-b-2 text-[11px] ${
              activePanelTab === 'problems' ? 'border-[#007acc] text-white font-semibold' : 'border-transparent hover:text-white'
            }`}
          >
            <span>PROBLEMS</span>
            <span className="px-1.5 py-0.2 rounded-full bg-[#333333] text-[9.5px]">0</span>
          </button>
          <button
            onClick={() => setActivePanelTab('output')}
            className={`h-8 flex items-center gap-1.5 transition-colors border-b-2 text-[11px] ${
              activePanelTab === 'output' ? 'border-[#007acc] text-white font-semibold' : 'border-transparent hover:text-white'
            }`}
          >
            <span>OUTPUT</span>
          </button>
          <button
            onClick={() => setActivePanelTab('debug')}
            className={`h-8 flex items-center gap-1.5 transition-colors border-b-2 text-[11px] ${
              activePanelTab === 'debug' ? 'border-[#007acc] text-white font-semibold' : 'border-transparent hover:text-white'
            }`}
          >
            <span>DEBUG CONSOLE</span>
          </button>
          <button
            onClick={() => setActivePanelTab('terminal')}
            className={`h-8 flex items-center gap-1.5 transition-colors border-b-2 text-[11px] ${
              activePanelTab === 'terminal' ? 'border-[#007acc] text-white font-semibold' : 'border-transparent hover:text-white'
            }`}
          >
            <TerminalIcon className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>TERMINAL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
          </button>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setHistory([])}
            className="p-1 hover:text-white hover:bg-[#333333] rounded transition-colors"
            title="Clear Terminal"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:text-white hover:bg-[#333333] rounded transition-colors"
            title="Close Panel"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. Interactive Terminal Body */}
      {activePanelTab === 'terminal' ? (
        <div className="flex-1 flex flex-col p-3 overflow-hidden bg-[#0c0f17]">
          {/* Quick Command Action Pills */}
          <div className="flex flex-wrap gap-1.5 pb-2.5 mb-2 border-b border-[#2d2d2d]/60">
            {[
              { label: '$ help', cmd: 'help' },
              { label: '$ cat bio.txt', cmd: 'cat bio.txt' },
              { label: '$ npm run projects', cmd: 'npm run projects' },
              { label: '$ ./deploy-status', cmd: './deploy-status' },
              { label: '$ skills', cmd: 'skills' },
              { label: '$ contact', cmd: 'contact' },
              { label: '$ clear', cmd: 'clear' },
            ].map((pill, idx) => (
              <button
                key={idx}
                onClick={() => executeCommand(pill.cmd)}
                className="px-2 py-0.5 rounded bg-[#1e1e1e] hover:bg-[#2d2d2d] text-[#858585] hover:text-[#38bdf8] border border-[#333333] transition-colors text-[11px]"
              >
                {pill.label}
              </button>
            ))}
          </div>

          {/* Command history stream */}
          <div className="flex-1 overflow-y-auto space-y-2.5 pr-2">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-[#10b981]">lawrence@portfolio:~$</span>
                  <span className="text-[#38bdf8] font-bold">{item.cmd}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}

            {/* Current Active Input Prompt */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[#10b981] shrink-0">lawrence@portfolio:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help', 'projects', 'cat bio.txt'..."
                className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs"
                autoFocus
              />
            </div>
            <div ref={terminalEndRef} />
          </div>
        </div>
      ) : (
        <div className="flex-1 p-6 text-center text-[#858585] flex flex-col items-center justify-center space-y-2">
          <div>No problems currently detected in workspace.</div>
          <div className="text-[11px] text-[#10b981]">✓ TypeScript build verified • 0 warnings</div>
        </div>
      )}
    </div>
  );
};
