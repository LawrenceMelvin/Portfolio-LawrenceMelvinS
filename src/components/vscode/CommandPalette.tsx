import React, { useState, useEffect, useRef } from 'react';
import { Search, FileCode2, Terminal, ArrowRight, X } from 'lucide-react';
import { FileTab, WORKSPACE_FILES } from './types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: FileTab) => void;
  onRunTerminalCmd: (cmd: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onRunTerminalCmd,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'p') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickActions = [
    { label: 'Go to file: home.tsx (Bio & Overview)', tab: 'home' as FileTab },
    { label: 'Go to file: projects.py (5 Production Systems)', tab: 'projects' as FileTab },
    { label: 'Go to file: experience.json (Career & Metrics)', tab: 'experience' as FileTab },
    { label: 'Go to file: skills.ts (Competencies)', tab: 'skills' as FileTab },
    { label: 'Go to file: contact.md (Get In Touch)', tab: 'contact' as FileTab },
    { label: 'Terminal: Run $ cat bio.txt', cmd: 'cat bio.txt' },
    { label: 'Terminal: Query $ ./deploy-status', cmd: './deploy-status' },
  ];

  const filtered = quickActions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center pt-16 px-4 backdrop-blur-sm font-mono select-none">
      <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg shadow-2xl max-w-xl w-full overflow-hidden text-xs">
        {/* Search Input Bar */}
        <div className="p-3 bg-[#1e1e1e] border-b border-[#2d2d2d] flex items-center gap-2">
          <Search className="w-4 h-4 text-[#858585]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a file name, command or search (e.g. 'projects', 'skills')..."
            className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs"
          />
          <button onClick={onClose} className="p-1 hover:bg-[#333333] rounded text-[#858585] hover:text-white">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto p-1.5 space-y-0.5">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (item.tab) {
                    onSelectTab(item.tab);
                  } else if (item.cmd) {
                    onRunTerminalCmd(item.cmd);
                  }
                  onClose();
                }}
                className="w-full px-3 py-2 text-left rounded hover:bg-[#007acc] text-[#cccccc] hover:text-white flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2">
                  {item.tab ? (
                    <FileCode2 className="w-3.5 h-3.5 text-[#38bdf8] group-hover:text-white" />
                  ) : (
                    <Terminal className="w-3.5 h-3.5 text-[#f59e0b] group-hover:text-white" />
                  )}
                  <span>{item.label}</span>
                </div>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))
          ) : (
            <div className="p-4 text-center text-[#858585]">No matching commands found.</div>
          )}
        </div>

        {/* Footer tip */}
        <div className="px-3 py-1.5 bg-[#1e1e1e] border-t border-[#2d2d2d] text-[10px] text-[#6e7681] flex justify-between">
          <span>Navigate with mouse or arrow keys</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
