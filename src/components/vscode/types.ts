export type FileTab = 'home' | 'projects' | 'experience' | 'skills' | 'contact';

export interface FileItem {
  id: FileTab;
  name: string;
  ext: 'tsx' | 'py' | 'json' | 'ts' | 'md';
  path: string;
  label: string;
}

export const WORKSPACE_FILES: FileItem[] = [
  { id: 'home', name: 'home.tsx', ext: 'tsx', path: 'src/home.tsx', label: 'Overview & Bio' },
  { id: 'projects', name: 'projects.py', ext: 'py', path: 'src/projects.py', label: 'Production Projects' },
  { id: 'experience', name: 'experience.json', ext: 'json', path: 'src/experience.json', label: 'Career & Impact' },
  { id: 'skills', name: 'skills.ts', ext: 'ts', path: 'src/skills.ts', label: 'Technical Stack' },
  { id: 'contact', name: 'contact.md', ext: 'md', path: 'src/contact.md', label: 'Get In Touch' },
];
