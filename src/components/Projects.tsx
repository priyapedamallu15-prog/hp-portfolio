import { ExternalLink, Github, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Projects = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const projects = [
    {
      title: "Generative AI Chatbot",
      description:
        "Built an intelligent chatbot during Generative AI Mega Workshop led by Rahul Attuluri, CEO of NxtWave.",
      tech: ["React", "OpenAI API", "Node.js"],
      gradient: "from-cyan-500 to-blue-500",
      pdfUrl: "https://example.com/sample.pdf",
    },
    {
      title: "Cybersecurity – Malicious Email Investigation",
      description:
        "Investigated and analyzed malicious emails using Maltego during Ethical Hacking Workshop by Abhinav Devaguptapu.",
      tech: ["Maltego", "Cybersecurity", "Threat Analysis"],
      gradient: "from-blue-500 to-purple-500",
      pdfUrl: "https://example.com/sample.pdf",
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Developed an interactive dashboard using Power BI and Excel to analyze real-time retail data.",
      tech: ["Power BI", "Excel", "Data Visualization"],
      gradient: "from-purple-500 to-pink-500",
      pdfUrl: "https://example.com/sample.pdf",
    },
    {
      title: "Generative AI 2.0 Product Development",
      description:
        "Built an AI-driven product prototype under mentorship of Tezan Sahu during NxtWave's Mega Workshop.",
      tech: ["Python", "AI/ML", "Product Design"],
      gradient: "from-pink-500 to-orange-500",
      pdfUrl: "https://example.com/sample.pdf",
    },
    {
      title: "Emoji Memory Game",
      description:
        "Interactive React game using state management and event handling concepts.",
      tech: ["React", "JavaScript", "CSS"],
      gradient: "from-orange-500 to-yellow-500",
      pdfUrl: "https://example.com/sample.pdf",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website showcasing projects and achievements.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      gradient: "from-cyan-500 to-teal-500",
      pdfUrl: "https://example.com/sample.pdf",
    },
  ];

  return (
    <section id="projects" className="flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              My Recent <span className="text-gradient">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are a few projects I've worked on recently.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live</span>
                    </button>
                    <button 
                      onClick={() => setSelectedPdf(project.pdfUrl)}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                    >
                      <FileText size={16} />
                      <span className="text-sm font-medium">PDF</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedPdf} onOpenChange={() => setSelectedPdf(null)}>
        <DialogContent className="max-w-4xl h-[90vh]">
          <DialogHeader>
            <DialogTitle>Project Documentation</DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden">
            {selectedPdf && (
              <iframe
                src={selectedPdf}
                className="w-full h-full rounded-lg"
                title="Project PDF"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
