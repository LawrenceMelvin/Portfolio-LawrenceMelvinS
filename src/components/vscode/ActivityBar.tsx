import React from 'react';
import { Files, Search, GitBranch, PlayCircle, Blocks, Settings } from 'lucide-react';

export type ActivityView = 'explorer' | 'search' | 'git' | 'debug' | 'extensions';

interface ActivityBarProps {
  activeView: ActivityView;
  onSelectView: (view: ActivityView) => void;
  onOpenSettings: () => void;
}

export const ActivityBar: React.FC<ActivityBarProps> = ({
  activeView,
  onSelectView,
  onOpenSettings,
}) => {
  return (
    <aside className="w-12 bg-[#181818] border-r border-[#2d2d2d] flex flex-col justify-between items-center py-2 z-40 select-none flex-shrink-0">
      <div className="flex flex-col items-center w-full space-y-1">
        {/* Explorer */}
        <button
          onClick={() => onSelectView('explorer')}
          className={`relative w-full flex justify-center py-2.5 transition-colors group ${
            activeView === 'explorer' ? 'text-white' : 'text-[#858585] hover:text-white'
          }`}
          title="Explorer (Ctrl+Shift+E)"
        >
          {activeView === 'explorer' && (
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#007acc]" />
          )}
          <Files className="w-5 h-5 transition-transform group-hover:scale-110" />
        </button>

        {/* Search */}
        <button
          onClick={() => onSelectView('search')}
          className={`relative w-full flex justify-center py-2.5 transition-colors group ${
            activeView === 'search' ? 'text-white' : 'text-[#858585] hover:text-white'
          }`}
          title="Search (Ctrl+Shift+F)"
        >
          {activeView === 'search' && (
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#007acc]" />
          )}
          <Search className="w-5 h-5 transition-transform group-hover:scale-110" />
        </button>

        {/* Source Control with 3+ years badge */}
        <button
          onClick={() => onSelectView('git')}
          className={`relative w-full flex justify-center py-2.5 transition-colors group ${
            activeView === 'git' ? 'text-white' : 'text-[#858585] hover:text-white'
          }`}
          title="Source Control (3+ Years Experience)"
        >
          {activeView === 'git' && (
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#007acc]" />
          )}
          <div className="relative">
            <GitBranch className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="absolute -top-1 -right-2 bg-[#007acc] text-white text-[9px] font-bold px-1 rounded-full border border-[#181818]">
              3+
            </span>
          </div>
        </button>

        {/* Run & Debug */}
        <button
          onClick={() => onSelectView('debug')}
          className={`relative w-full flex justify-center py-2.5 transition-colors group ${
            activeView === 'debug' ? 'text-white' : 'text-[#858585] hover:text-white'
          }`}
          title="Run & Debug"
        >
          {activeView === 'debug' && (
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#007acc]" />
          )}
          <PlayCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
        </button>

        {/* Extensions */}
        <button
          onClick={() => onSelectView('extensions')}
          className={`relative w-full flex justify-center py-2.5 transition-colors group ${
            activeView === 'extensions' ? 'text-white' : 'text-[#858585] hover:text-white'
          }`}
          title="Extensions"
        >
          {activeView === 'extensions' && (
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#007acc]" />
          )}
          <Blocks className="w-5 h-5 transition-transform group-hover:scale-110" />
        </button>
      </div>

      {/* Bottom Profile Avatar & Settings */}
      <div className="flex flex-col items-center w-full space-y-2">
        <a
          href="https://www.linkedin.com/in/lawrence-melvin-39b417215/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full flex justify-center py-1 text-[#858585] hover:text-white"
          title="Lawrence Melvin S (LinkedIn)"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#007acc] to-[#38bdf8] flex items-center justify-center text-white font-mono text-[10px] font-bold border border-[#007acc]/40 shadow hover:scale-105 transition-transform">
            LM
          </div>
        </a>
        <button
          onClick={onOpenSettings}
          className="relative w-full flex justify-center py-2 text-[#858585] hover:text-white group"
          title="Manage Settings"
        >
          <Settings className="w-5 h-5 group-hover:rotate-45 transition-transform duration-200" />
        </button>
      </div>
    </aside>
  );
};
