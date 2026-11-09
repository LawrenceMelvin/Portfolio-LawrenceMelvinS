import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Folder,
  FolderOpen,
  FilePlus,
  RefreshCw,
  Cpu,
  GitCommit,
  Check,
  Search,
  Blocks,
  PlayCircle
} from 'lucide-react';
import { FileTab, WORKSPACE_FILES } from './types';
import { ActivityView } from './ActivityBar';

interface SidebarExplorerProps {
  activeTab: FileTab;
  activeView: ActivityView;
  onSelectTab: (tab: FileTab) => void;
  onRunTerminalCmd: (cmd: string) => void;
}

export const SidebarExplorer: React.FC<SidebarExplorerProps> = ({
  activeTab,
  activeView,
  onSelectTab,
  onRunTerminalCmd,
}) => {
  const [srcFolderOpen, setSrcFolderOpen] = useState(true);
  const [githubFolderOpen, setGithubFolderOpen] = useState(false);
  const [outlineOpen, setOutlineOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Icon badge renderer based on file extension
  const renderBadge = (ext: string) => {
    switch (ext) {
      case 'tsx':
        return <span className="text-[#3178c6] font-bold text-[10px] w-4 mr-1">TSX</span>;
      case 'py':
        return <span className="text-[#ffd343] font-bold text-[10px] w-4 mr-1">PY</span>;
      case 'json':
        return <span className="text-[#f89820] font-bold text-[10px] w-4 mr-1">&#123; &#125;</span>;
      case 'ts':
        return <span className="text-[#3178c6] font-bold text-[10px] w-4 mr-1">TS</span>;
      case 'md':
        return <span className="text-[#4ec9b0] font-bold text-[10px] w-4 mr-1">MD</span>;
      default:
        return <span className="text-[#858585] font-bold text-[10px] w-4 mr-1">FILE</span>;
    }
  };

  return (
    <aside className="w-64 bg-[#252526] border-r border-[#2d2d2d] flex flex-col flex-shrink-0 select-none text-[13px]">
      {/* 1. Header Title */}
      <div className="h-9 px-4 flex items-center justify-between text-[#bbbbbb] font-semibold text-[11px] uppercase tracking-wider border-b border-[#2d2d2d]/60">
        <span>
          {activeView === 'explorer' && 'Explorer: Portfolio'}
          {activeView === 'search' && 'Search: Workspace'}
          {activeView === 'git' && 'Source Control: Git'}
          {activeView === 'debug' && 'Run & Debug'}
          {activeView === 'extensions' && 'Installed Extensions'}
        </span>
        <div className="flex items-center gap-1.5 text-[#858585]">
          <button
            className="hover:text-white p-0.5"
            title="Contact Form"
            onClick={() => onSelectTab('contact')}
          >
            <FilePlus className="w-3.5 h-3.5" />
          </button>
          <button
            className="hover:text-white p-0.5"
            title="Refresh Explorer"
            onClick={() => onRunTerminalCmd('git status')}
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. Content based on active ActivityBar view */}
      <div className="flex-1 overflow-y-auto py-1 font-mono text-[12.5px]">
        {activeView === 'explorer' && (
          <>
            {/* Root Section */}
            <div className="flex items-center px-2 py-1 text-[#cccccc] font-semibold text-[11px] uppercase tracking-wider hover:bg-[#2a2d2e] cursor-pointer">
              <ChevronDown className="w-3.5 h-3.5 mr-1 text-[#858585]" />
              <span>PORTFOLIO_MELVIN</span>
            </div>

            {/* Folder: src */}
            <div className="pl-2">
              <div
                className="flex items-center px-2 py-1 text-[#cccccc] hover:bg-[#2a2d2e] cursor-pointer text-xs"
                onClick={() => setSrcFolderOpen(!srcFolderOpen)}
              >
                {srcFolderOpen ? (
                  <>
                    <ChevronDown className="w-3.5 h-3.5 mr-1.5 text-[#858585]" />
                    <FolderOpen className="w-3.5 h-3.5 mr-1.5 text-[#e5c07b]" />
                  </>
                ) : (
                  <>
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#858585]" />
                    <Folder className="w-3.5 h-3.5 mr-1.5 text-[#e5c07b]" />
                  </>
                )}
                <span className="font-sans font-medium text-[#dddddd]">src</span>
              </div>

              {/* Files in src */}
              {srcFolderOpen && (
                <div className="pl-4 flex flex-col space-y-0.5">
                  {WORKSPACE_FILES.map((file) => {
                    const isActive = activeTab === file.id;
                    return (
                      <button
                        key={file.id}
                        onClick={() => onSelectTab(file.id)}
                        className={`w-full flex items-center px-2 py-1 text-left rounded font-sans text-xs group transition-colors ${
                          isActive
                            ? 'bg-[#37373d]/80 text-white'
                            : 'hover:bg-[#2a2d2e] text-[#cccccc]'
                        }`}
                      >
                        {renderBadge(file.ext)}
                        <span className={`truncate flex-1 ${isActive ? 'text-[#38bdf8] font-medium' : 'hover:text-white'}`}>
                          {file.name}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#007acc] opacity-90" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Folder: .github/workflows */}
            <div className="pl-2 mt-1">
              <div
                className="flex items-center px-2 py-1 text-[#9d9d9d] hover:bg-[#2a2d2e] cursor-pointer text-xs"
                onClick={() => setGithubFolderOpen(!githubFolderOpen)}
              >
                {githubFolderOpen ? (
                  <ChevronDown className="w-3.5 h-3.5 mr-1.5 text-[#858585]" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-[#858585]" />
                )}
                <Folder className="w-3.5 h-3.5 mr-1.5 text-[#6e7681]" />
                <span className="font-sans text-[#a0a0a0]">.github/workflows</span>
              </div>
              {githubFolderOpen && (
                <div className="pl-7 py-0.5">
                  <div
                    className="flex items-center px-2 py-1 text-xs text-[#9d9d9d] hover:bg-[#2a2d2e] rounded cursor-pointer"
                    onClick={() => onRunTerminalCmd('./deploy-status')}
                  >
                    <span className="text-[#e5c07b] text-[10px] font-bold mr-1">YML</span>
                    <span>ci-cd-pipeline.yml</span>
                  </div>
                </div>
              )}
            </div>

            {/* Root configs */}
            <div className="pl-4 mt-1 space-y-0.5">
              <div
                className="flex items-center px-2 py-1 text-xs text-[#9d9d9d] hover:bg-[#2a2d2e] rounded cursor-pointer"
                onClick={() => onSelectTab('experience')}
              >
                <span className="text-[#f89820] text-[10px] font-bold mr-1.5">&#123; &#125;</span>
                <span>package.json</span>
              </div>
              <div
                className="flex items-center px-2 py-1 text-xs text-[#9d9d9d] hover:bg-[#2a2d2e] rounded cursor-pointer"
                onClick={() => onSelectTab('home')}
              >
                <span className="text-[#4ec9b0] text-[10px] font-bold mr-1.5">MD</span>
                <span>README.md</span>
              </div>
            </div>

            {/* Outline / Timeline accordion */}
            <div className="mt-6 border-t border-[#2d2d2d] pt-2">
              <div
                className="flex items-center px-2 py-1 text-[#858585] hover:text-[#cccccc] text-[11px] font-semibold uppercase tracking-wider cursor-pointer"
                onClick={() => setOutlineOpen(!outlineOpen)}
              >
                {outlineOpen ? (
                  <ChevronDown className="w-3.5 h-3.5 mr-1 text-[#858585]" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-[#858585]" />
                )}
                <span>Outline: Current File</span>
              </div>
              {outlineOpen && (
                <div className="pl-5 text-xs text-[#858585] space-y-1 py-1">
                  <div className="hover:text-white cursor-pointer" onClick={() => onSelectTab('home')}>&gt; HeroProfile</div>
                  <div className="hover:text-white cursor-pointer" onClick={() => onSelectTab('projects')}>&gt; ProductionRegistry</div>
                  <div className="hover:text-white cursor-pointer" onClick={() => onSelectTab('skills')}>&gt; CoreCompetencies</div>
                  <div className="hover:text-white cursor-pointer" onClick={() => onSelectTab('contact')}>&gt; ContactDispatch</div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Search View */}
        {activeView === 'search' && (
          <div className="p-3 space-y-3 font-sans">
            <div className="relative">
              <input
                type="text"
                placeholder="Search across files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1e1e1e] border border-[#3c3c3c] text-white text-xs rounded px-2.5 py-1.5 focus:border-[#007acc] focus:outline-none font-mono"
              />
              <Search className="w-3.5 h-3.5 text-[#858585] absolute right-2.5 top-2.5" />
            </div>
            <div className="text-[11px] text-[#858585] space-y-1.5">
              <div className="text-[#cccccc] font-semibold">Quick Matches:</div>
              {WORKSPACE_FILES.filter(
                (f) =>
                  f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  f.label.toLowerCase().includes(searchQuery.toLowerCase())
              ).map((f) => (
                <button
                  key={f.id}
                  onClick={() => onSelectTab(f.id)}
                  className="w-full text-left p-1.5 rounded hover:bg-[#2a2d2e] flex items-center justify-between"
                >
                  <span className="text-[#38bdf8] font-mono text-xs">{f.name}</span>
                  <span className="text-[#858585] text-[10px]">{f.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Git View */}
        {activeView === 'git' && (
          <div className="p-3 space-y-3 font-sans">
            <div className="text-[11px] text-[#858585] flex items-center justify-between uppercase">
              <span>Source Control: Git</span>
              <span className="text-secondary font-mono">Clean</span>
            </div>
            <div className="p-2 rounded bg-[#1e1e1e] border border-[#333333] space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-[#10b981]">
                <Check className="w-3.5 h-3.5" />
                <span>All commits synced to origin/main</span>
              </div>
              <div className="text-[#858585] text-[11px] font-mono">
                Recent: feat: modernized portfolio to VS Code interactive layout
              </div>
            </div>
            <button
              onClick={() => onRunTerminalCmd('git log -n 3 --oneline')}
              className="w-full py-1 text-xs bg-[#2d2d2d] hover:bg-[#333333] rounded text-[#cccccc] font-mono border border-[#3c3c3c]"
            >
              $ git log
            </button>
          </div>
        )}

        {/* Debug View */}
        {activeView === 'debug' && (
          <div className="p-3 space-y-3 font-sans text-xs">
            <div className="text-[11px] text-[#858585] uppercase">Run and Debug</div>
            <div className="p-3 rounded bg-[#1e1e1e] border border-[#333333] space-y-2">
              <div className="flex items-center gap-2 text-[#38bdf8]">
                <PlayCircle className="w-4 h-4" />
                <span className="font-semibold">Launch Chrome (Live Preview)</span>
              </div>
              <p className="text-[11px] text-[#858585]">Port: 3000 • Production Build Verified</p>
            </div>
          </div>
        )}

        {/* Extensions View */}
        {activeView === 'extensions' && (
          <div className="p-3 space-y-2 font-sans text-xs">
            <div className="text-[11px] text-[#858585] uppercase">Active Stack Extensions</div>
            {[
              { name: 'Spring Boot Tools', author: 'VMware', v: 'v1.54.0' },
              { name: 'Python Language Server', author: 'Microsoft', v: 'v2024.2' },
              { name: 'AWS Toolkit', author: 'Amazon', v: 'v3.12.0' },
              { name: 'Docker Explorer', author: 'Docker', v: 'v1.28.0' },
              { name: 'PostgreSQL Manager', author: 'Chris Kolkman', v: 'v1.1.2' },
            ].map((ext, idx) => (
              <div key={idx} className="p-2 rounded bg-[#1e1e1e] border border-[#333333] flex items-center justify-between">
                <div>
                  <div className="text-[#cccccc] font-medium text-[11px] flex items-center gap-1.5">
                    <Blocks className="w-3 h-3 text-[#f59e0b]" />
                    {ext.name}
                  </div>
                  <div className="text-[10px] text-[#6e7681]">{ext.author} &bull; {ext.v}</div>
                </div>
                <span className="text-[10px] text-[#10b981] font-mono">ACTIVE</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3. Sidebar Footer Specs */}
      <div className="p-3 bg-[#1e1e1e] border-t border-[#2d2d2d] text-[11px] text-[#858585] flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3 h-3 text-[#10b981]" /> Node v20.11 / Python 3.11
          </span>
          <span className="text-[#10b981] font-mono text-[10px]">HEALTHY</span>
        </div>
        <div className="flex items-center justify-between text-[10px] text-[#6e7681]">
          <span>Uptime: 99.99%</span>
          <span>Open for Roles</span>
        </div>
      </div>
    </aside>
  );
};
