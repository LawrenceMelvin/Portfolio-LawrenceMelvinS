import React from 'react';
import { ChevronRight, X, Split, MoreHorizontal } from 'lucide-react';
import { FileTab, WORKSPACE_FILES } from './types';

interface EditorTabsProps {
  activeTab: FileTab;
  onSelectTab: (tab: FileTab) => void;
  onCloseTab?: (tab: FileTab) => void;
}

export const EditorTabs: React.FC<EditorTabsProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const activeFile = WORKSPACE_FILES.find((f) => f.id === activeTab) || WORKSPACE_FILES[0];

  const renderBadge = (ext: string) => {
    switch (ext) {
      case 'tsx':
        return <span className="text-[#3178c6] font-bold text-[10px]">TSX</span>;
      case 'py':
        return <span className="text-[#ffd343] font-bold text-[10px]">PY</span>;
      case 'json':
        return <span className="text-[#f89820] font-bold text-[10px]">&#123; &#125;</span>;
      case 'ts':
        return <span className="text-[#3178c6] font-bold text-[10px]">TS</span>;
      case 'md':
        return <span className="text-[#4ec9b0] font-bold text-[10px]">MD</span>;
      default:
        return <span className="text-[#858585] font-bold text-[10px]">FILE</span>;
    }
  };

  return (
    <div className="flex flex-col bg-[#1e1e1e] flex-shrink-0 select-none">
      {/* 1. Open Tabs Row */}
      <div className="h-9 bg-[#252526] border-b border-[#2d2d2d] flex items-center overflow-x-auto no-scrollbar">
        {WORKSPACE_FILES.map((file) => {
          const isActive = activeTab === file.id;
          return (
            <div
              key={file.id}
              onClick={() => onSelectTab(file.id)}
              className={`h-full px-3.5 flex items-center gap-2 border-r border-[#2d2d2d] cursor-pointer group transition-colors ${
                isActive
                  ? 'bg-[#1e1e1e] border-t-2 border-[#007acc] text-white text-xs'
                  : 'bg-[#2d2d2d]/60 hover:bg-[#2d2d2d] text-[#969696] hover:text-[#cccccc] text-xs border-t-2 border-transparent'
              }`}
            >
              {renderBadge(file.ext)}
              <span className="font-sans font-medium text-[12px]">{file.name}</span>
              <button
                className="opacity-0 group-hover:opacity-100 hover:bg-[#333333] rounded p-0.5 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <X className="w-3 h-3 text-[#9d9d9d]" />
              </button>
            </div>
          );
        })}

        {/* Far Right Action Icons */}
        <div className="flex-1 flex justify-end items-center px-3 gap-2">
          <button className="text-[#858585] hover:text-white p-1 hover:bg-[#333333] rounded" title="Split Editor">
            <Split className="w-3.5 h-3.5" />
          </button>
          <button className="text-[#858585] hover:text-white p-1 hover:bg-[#333333] rounded" title="More Actions">
            <MoreHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. Breadcrumbs Navigation */}
      <div className="h-6 px-4 bg-[#1e1e1e] border-b border-[#2d2d2d]/50 flex items-center text-[11px] text-[#858585] gap-1.5 font-mono">
        <span className="hover:text-[#cccccc] cursor-pointer">portfolio</span>
        <ChevronRight className="w-3 h-3 text-[#6e7681]" />
        <span className="hover:text-[#cccccc] cursor-pointer">src</span>
        <ChevronRight className="w-3 h-3 text-[#6e7681]" />
        <span className="text-[#cccccc] font-medium">{activeFile.name}</span>
        <span className="ml-2 px-1.5 py-0.2 bg-[#2d2d2d] text-[10px] rounded text-[#4ec9b0]">
          {activeFile.label}
        </span>
        <div className="ml-auto flex items-center gap-3 text-[10px] text-[#6e7681]">
          <span>Ln 1, Col 1</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
};
