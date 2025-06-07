import React from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface HeroSectionProps {
  name?: string;
  title?: string;
  summary?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
}

const HeroSection = ({
  name = "Lawrence Melvin S",
  title = "Software Engineer",
  summary = "Software Engineer with 3+ years of experience in backend development and automation. Skilled in Python, Java, Spring Boot, and AWS. Experienced in building scalable batch jobs, integrating APIs, and deploying full-stack applications. Strong understanding of secure coding, and DevOps workflows.",
  githubUrl = "https://github.com/LawrenceMelvin",
  linkedinUrl = "https://www.linkedin.com/in/lawrence-melvin-39b417215/",
  email = "lawrence2000april@gmail.com",
}: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background/95 to-primary/5 min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available for opportunities
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="block text-foreground/90">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                  {name}
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground/80">
                {title}
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href={`mailto:${email}`} className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Let's Connect
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-2 hover:bg-accent/5"
              >
                <a href="#" className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <a href={`mailto:${email}`}>
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl scale-110 animate-pulse" />
              <Avatar className="relative h-80 w-80 lg:h-96 lg:w-96 border-4 border-background shadow-2xl ring-4 ring-primary/10">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=lawrence"
                  alt={name}
                  className="object-cover"
                />
                <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-primary/10 to-accent/10">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce delay-300" />
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent rounded-full animate-bounce delay-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
