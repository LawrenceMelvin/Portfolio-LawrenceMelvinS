import React from "react";
import HeroSection from "./HeroSection";
import ExperienceTimeline from "./ExperienceTimeline";
import ProjectsShowcase from "./ProjectsShowcase";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">Lawrence Melvin</div>
          <div className="hidden md:flex space-x-6">
            <a href="#hero" className="hover:text-primary transition-colors">
              Home
            </a>
            <a
              href="#experience"
              className="hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="py-16 md:py-24">
          <HeroSection />
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Professional Experience
            </h2>
            <ExperienceTimeline />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Languages */}
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "Perl"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {["Spring", "Flask", "React"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Jenkins", "Postman", "JUnit", "Docker"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Cloud/DB */}
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-4">Cloud/DB</h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "PostgreSQL", "Oracle SQL"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section id="projects" className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
            <ProjectsShowcase />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Get In Touch
            </h2>
            <ContactSection />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Lawrence Melvin. All rights
            reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com/LawrenceMelvin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/lawrence-melvin-39b417215/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="mailto:lawrence2000april@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
