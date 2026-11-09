import React, { useState, useEffect } from 'react';
import { TitleBar } from './TitleBar';
import { ActivityBar, ActivityView } from './ActivityBar';
import { SidebarExplorer } from './SidebarExplorer';
import { EditorTabs } from './EditorTabs';
import { IntegratedTerminal } from './IntegratedTerminal';
import { StatusBar } from './StatusBar';
import { CommandPalette } from './CommandPalette';
import { FileTab } from './types';

import { HomeView } from './views/HomeView';
import { ProjectsView } from './views/ProjectsView';
import { ExperienceView } from './views/ExperienceView';
import { SkillsView } from './views/SkillsView';
import { ContactView } from './views/ContactView';

export const VSCodeWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FileTab>('home');
  const [activeView, setActiveView] = useState<ActivityView>('explorer');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [terminalCommand, setTerminalCommand] = useState<string | undefined>(undefined);

  // Keyboard shortcut for Command Palette (⌘P / Ctrl+P)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'p') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === '`') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleRunTerminalCmd = (cmd: string) => {
    setTerminalOpen(true);
    setTerminalCommand(cmd);
    // Reset to avoid duplicate executions
    setTimeout(() => setTerminalCommand(undefined), 100);
  };

  const handleSelectTab = (tab: FileTab) => {
    setActiveTab(tab);
  };

  const handleSelectActivityView = (view: ActivityView) => {
    if (activeView === view && sidebarOpen) {
      setSidebarOpen(false);
    } else {
      setActiveView(view);
      setSidebarOpen(true);
    }
  };

  return (
    <div className="bg-[#181818] text-[#cccccc] font-sans h-screen w-screen overflow-hidden flex flex-col antialiased select-none">
      {/* 1. Title Bar */}
      <TitleBar
        activeTab={activeTab}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onToggleTerminal={() => setTerminalOpen(!terminalOpen)}
        onSelectTab={handleSelectTab}
      />

      {/* 2. Workspace Body: Activity Bar + Sidebar + Main Editor */}
      <div className="flex-1 flex overflow-hidden">
        {/* Activity Bar (Far Left vertical rail) */}
        <ActivityBar
          activeView={activeView}
          onSelectView={handleSelectActivityView}
          onOpenSettings={() => handleRunTerminalCmd('cat bio.txt')}
        />

        {/* Collapsible Sidebar */}
        {sidebarOpen && (
          <SidebarExplorer
            activeTab={activeTab}
            activeView={activeView}
            onSelectTab={handleSelectTab}
            onRunTerminalCmd={handleRunTerminalCmd}
          />
        )}

        {/* Editor Main Canvas */}
        <main className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0 overflow-hidden">
          {/* Editor Tabs & Breadcrumbs */}
          <EditorTabs
            activeTab={activeTab}
            onSelectTab={handleSelectTab}
          />

          {/* Active File Content View */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-0 relative">
            {activeTab === 'home' && (
              <HomeView
                onSelectTab={handleSelectTab}
                onRunTerminalCmd={handleRunTerminalCmd}
              />
            )}
            {activeTab === 'projects' && <ProjectsView />}
            {activeTab === 'experience' && <ExperienceView />}
            {activeTab === 'skills' && <SkillsView />}
            {activeTab === 'contact' && <ContactView />}
          </div>

          {/* Collapsible Integrated Terminal */}
          <IntegratedTerminal
            isOpen={terminalOpen}
            onClose={() => setTerminalOpen(false)}
            onSelectTab={handleSelectTab}
            externalCommand={terminalCommand}
          />
        </main>
      </div>

      {/* 3. Bottom Status Bar */}
      <StatusBar
        activeTab={activeTab}
        onToggleTerminal={() => setTerminalOpen(!terminalOpen)}
      />

      {/* 4. Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectTab={handleSelectTab}
        onRunTerminalCmd={handleRunTerminalCmd}
      />
    </div>
  );
};
