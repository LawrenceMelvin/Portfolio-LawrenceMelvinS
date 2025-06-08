import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectsShowcaseProps {
  projects?: Project[];
}

const ProjectsShowcase = ({
  projects = [
    {
      title: "Insurance Tracker",
      description:
        "Full-stack React + Spring Boot app to manage health, term & auto insurance. PostgreSQL backend, with secure registration and google Oauth2 login, renewal reminders and dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      techStack: ["React", "Spring Boot", "PostgreSQL", "OAuth2"],
      liveUrl: "https://www.insuretracks.com",
      githubUrl: "https://github.com/LawrenceMelvin/Insurance-Tracker",
    },
    {
      title: "BachatPlan - Simple Saving App",
      description:
        "Full-stack React + Spring Boot app to manage personal finances.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      techStack: ["React", "Flask"],
      liveUrl: "https://bachatplan.netlify.app/",
      githubUrl: "https://github.com/LawrenceMelvin/SmartInvest-Backend",
    },
    {
      title: "AWS Transcriber",
      description: "Converts .mp4 to subtitles using Amazon S3 & Transcribe.",
      image:
        "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=800&q=80",
      techStack: ["AWS S3", "AWS Transcribe", "Python"],
      githubUrl: "https://github.com/LawrenceMelvin/AWS-Transcriber",
    },
    {
      title: "Things I Do Blog",
      description: "Flask blog with Dockerized deployment on AWS via Jenkins.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      techStack: ["Flask", "Docker", "AWS", "Jenkins"],
      githubUrl: "https://github.com/LawrenceMelvin/FlaskBlog-Thing-I-Do/tree/master",
    },
    {
      title: "Heart Attack Risk Prediction",
      description: "Predicts risk using Random Forest (Python, Scikit-learn).",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      techStack: ["Python", "Scikit-learn", "Random Forest"],
      githubUrl: "https://github.com/LawrenceMelvin/Heart-Disease-risk-",
    },
  ],
}: ProjectsShowcaseProps) => {
  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Projects</h2>
        <p className="text-gray-600 text-center mb-12">
          Some of my recent work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="flex justify-between pt-2">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}

                {project.liveUrl && (
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
