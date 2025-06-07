import React, { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  isIntern?: boolean;
}

const ExperienceTimeline = ({
  experiences = defaultExperiences,
}: {
  experiences?: ExperienceItem[];
}) => {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({
    0: true, // First item expanded by default
  });

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 bg-background">
      <h2 className="text-3xl font-bold text-center mb-10">
        Professional Experience
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>

        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background z-10"></div>

              {/* Content */}
              <div className="md:w-1/2 pl-10 md:pl-0 md:px-6">
                <Card className="overflow-hidden border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                          <div className="flex flex-col items-start text-left w-full">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-semibold">
                                {experience.title}
                              </h3>
                              {experience.isIntern && (
                                <Badge variant="secondary" className="text-xs">
                                  Intern
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {experience.company} | {experience.period}
                            </p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <ul className="list-disc pl-5 space-y-2">
                            {experience.responsibilities.map(
                              (responsibility, idx) => (
                                <li key={idx} className="text-sm">
                                  {responsibility}
                                </li>
                              ),
                            )}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const defaultExperiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "BNP Paribas",
    period: "Aug 2022 - Present",
    responsibilities: [
      "Built Spring Batch jobs to process 1M+ records for financial and risk reports.",
      "Automated non-regression testing using Python; integrated AWS S3 & external APIs.",
      "Developed risk analysis screens using Spring + ExtJS and modernized legacy code.",
    ],
  },
  {
    title: "Intern",
    company: "BNP Paribas",
    period: "Jan 2022 - Aug 2022",
    responsibilities: [
      "Improved security by fixing Fortify issues; boosted SonarQube test coverage by 50%.",
      "Reconciled Ubix and market data using WTX and SQL.",
      "Handled WAR deployment using WebLogic.",
    ],
    isIntern: true,
  },
];

export default ExperienceTimeline;
