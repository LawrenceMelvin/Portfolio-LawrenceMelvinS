import React from 'react';
import { GitBranch, RefreshCw, XCircle, AlertTriangle, Radio, Check, Bell } from 'lucide-react';
import { FileTab, WORKSPACE_FILES } from './types';

interface StatusBarProps {
  activeTab: FileTab;
  onToggleTerminal: () => void;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  activeTab,
  onToggleTerminal,
}) => {
  const activeFile = WORKSPACE_FILES.find((f) => f.id === activeTab) || WORKSPACE_FILES[0];

  const getLanguageMode = (ext: string) => {
    switch (ext) {
      case 'tsx':
        return 'TypeScript React';
      case 'py':
        return 'Python';
      case 'json':
        return 'JSON';
      case 'ts':
        return 'TypeScript';
      case 'md':
        return 'Markdown';
      default:
        return 'Plain Text';
    }
  };

  return (
    <footer className="h-6 bg-[#007acc] text-white flex items-center justify-between px-2 text-[11px] font-mono select-none z-50 flex-shrink-0">
      {/* Left items: Git Branch, Sync, Errors */}
      <div className="flex items-center space-x-3">
        <a
          href="https://github.com/LawrenceMelvin/Portfolio-LawrenceMelvinS"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:bg-black/10 px-1.5 py-0.5 rounded transition-colors"
          title="Git Branch: main"
        >
          <GitBranch className="w-3 h-3" />
          <span>main*</span>
        </a>

        <button
          onClick={onToggleTerminal}
          className="flex items-center gap-1 hover:bg-black/10 px-1.5 py-0.5 rounded transition-colors"
          title="Synchronize Changes"
        >
          <RefreshCw className="w-3 h-3" />
        </button>

        <button
          onClick={onToggleTerminal}
          className="flex items-center gap-1.5 hover:bg-black/10 px-1.5 py-0.5 rounded transition-colors"
          title="Errors and Warnings"
        >
          <span className="flex items-center gap-0.5">
            <XCircle className="w-3 h-3" />
            <span>0</span>
          </span>
          <span className="flex items-center gap-0.5">
            <AlertTriangle className="w-3 h-3" />
            <span>0</span>
          </span>
        </button>

        <div className="hidden sm:flex items-center gap-1 hover:bg-black/10 px-1.5 py-0.5 rounded transition-colors">
          <Radio className="w-3 h-3 text-[#6ffbbe]" />
          <span>Port: 3000 (Live)</span>
        </div>
      </div>

      {/* Right items: Line/Col, Spaces, Encoding, Language, Prettier */}
      <div className="flex items-center space-x-3">
        <span className="hidden sm:inline hover:bg-black/10 px-1.5 py-0.5 rounded cursor-pointer">
          Ln 24, Col 18
        </span>
        <span className="hidden md:inline hover:bg-black/10 px-1.5 py-0.5 rounded cursor-pointer">
          Spaces: 2
        </span>
        <span className="hidden md:inline hover:bg-black/10 px-1.5 py-0.5 rounded cursor-pointer">
          UTF-8
        </span>
        <span className="hover:bg-black/10 px-1.5 py-0.5 rounded cursor-pointer font-sans font-medium">
          {getLanguageMode(activeFile.ext)}
        </span>
        <span className="flex items-center gap-1 hover:bg-black/10 px-1.5 py-0.5 rounded cursor-pointer">
          <Check className="w-3 h-3" />
          <span>Prettier</span>
        </span>
        <button className="hover:bg-black/10 p-1 rounded transition-colors" title="Notifications">
          <Bell className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
};
