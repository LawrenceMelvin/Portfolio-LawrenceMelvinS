import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

interface ContactSectionProps {
  email?: string;
  phone?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

const ContactSection = ({
  email = "lawrence2000april@gmail.com",
  phone = "+91 97890 46500",
  githubUrl = "https://github.com/LawrenceMelvin",
  linkedinUrl = "https://www.linkedin.com/in/lawrence-melvin-39b417215/",
}: ContactSectionProps) => {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="space-y-8 max-w-md">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Alternative ways to reach me</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-primary hover:underline"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-primary hover:underline"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Social Profiles</CardTitle>
                <CardDescription>Connect with me online</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <span>GitHub</span>
                  </a>

                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
