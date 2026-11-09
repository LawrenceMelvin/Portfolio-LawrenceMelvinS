import React from 'react';
import { Search, PanelBottom, Columns, PanelLeft, Github, Terminal } from 'lucide-react';
import { FileTab } from './types';

interface TitleBarProps {
  activeTab: FileTab;
  onOpenCommandPalette: () => void;
  onToggleSidebar: () => void;
  onToggleTerminal: () => void;
  onSelectTab: (tab: FileTab) => void;
}

export const TitleBar: React.FC<TitleBarProps> = ({
  onOpenCommandPalette,
  onToggleSidebar,
  onToggleTerminal,
  onSelectTab,
}) => {
  return (
    <header className="h-9 bg-[#1e1e1e] border-b border-[#2d2d2d] flex items-center justify-between px-3 text-xs select-none z-50 text-[#cccccc]">
      {/* Left: Window Controls & VS Code Menu */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 mr-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] cursor-pointer hover:opacity-80 transition-opacity" title="Close" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] cursor-pointer hover:opacity-80 transition-opacity" title="Minimize" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] cursor-pointer hover:opacity-80 transition-opacity" title="Maximize" />
        </div>

        <nav className="hidden md:flex items-center space-x-1 text-[#cccccc] text-[11.5px]">
          <button className="px-2 py-0.5 rounded hover:bg-[#333333] transition-colors" onClick={() => onSelectTab('home')}>File</button>
          <button className="px-2 py-0.5 rounded hover:bg-[#333333] transition-colors" onClick={() => onSelectTab('projects')}>Edit</button>
          <button className="px-2 py-0.5 rounded hover:bg-[#333333] transition-colors" onClick={() => onSelectTab('skills')}>Selection</button>
          <button className="px-2 py-0.5 rounded hover:bg-[#333333] transition-colors" onClick={onToggleSidebar}>View</button>
          <button className="px-2 py-0.5 rounded hover:bg-[#333333] transition-colors" onClick={onOpenCommandPalette}>Go</button>
          <button className="px-2 py-0.5 rounded hover:bg-[#333333] transition-colors" onClick={() => onSelectTab('projects')}>Run</button>
          <button className="px-2 py-0.5 rounded hover:bg-[#333333] transition-colors flex items-center gap-1" onClick={onToggleTerminal}>
            <Terminal className="w-3 h-3 text-[#f59e0b]" />
            Terminal
          </button>
          <button className="px-2 py-0.5 rounded hover:bg-[#333333] transition-colors" onClick={() => onSelectTab('contact')}>Help</button>
        </nav>
      </div>

      {/* Center: Command Palette search bar */}
      <div className="flex-1 max-w-[540px] mx-4">
        <button
          onClick={onOpenCommandPalette}
          className="w-full flex items-center justify-between bg-[#2d2d2d] hover:bg-[#37373d] transition-colors border border-[#3c3c3c] rounded px-3 py-1 text-[11px] text-[#9d9d9d] cursor-pointer shadow-inner"
        >
          <div className="flex items-center gap-2 truncate font-mono">
            <Search className="w-3.5 h-3.5 text-[#9d9d9d]" />
            <span className="truncate">Lawrence Melvin S — Software Engineer (Workspace)</span>
          </div>
          <span className="hidden lg:inline-block ml-auto text-[10px] bg-[#222222] px-1.5 py-0.5 rounded border border-[#3e3e42] text-[#858585]">
            ⌘P / Ctrl+P
          </span>
        </button>
      </div>

      {/* Right: Window / View layout actions */}
      <div className="flex items-center gap-2 text-[#9d9d9d]">
        <button
          className="p-1 hover:text-white hover:bg-[#333333] rounded transition-colors"
          title="Toggle Primary Side Bar"
          onClick={onToggleSidebar}
        >
          <PanelLeft className="w-3.5 h-3.5" />
        </button>
        <button
          className="p-1 hover:text-white hover:bg-[#333333] rounded transition-colors"
          title="Toggle Terminal Panel"
          onClick={onToggleTerminal}
        >
          <PanelBottom className="w-3.5 h-3.5" />
        </button>
        <button
          className="p-1 hover:text-white hover:bg-[#333333] rounded transition-colors"
          title="Switch to Projects"
          onClick={() => onSelectTab('projects')}
        >
          <Columns className="w-3.5 h-3.5" />
        </button>
        <div className="h-3.5 w-[1px] bg-[#333333] mx-1" />
        <a
          href="https://github.com/LawrenceMelvin"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-0.5 bg-[#007acc]/20 hover:bg-[#007acc] text-[#38bdf8] hover:text-white text-[11px] rounded transition-all flex items-center gap-1 font-mono"
        >
          <Github className="w-3 h-3" />
          <span>LawrenceMelvin</span>
        </a>
      </div>
    </header>
  );
};
