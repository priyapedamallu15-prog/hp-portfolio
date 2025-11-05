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
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      pdfUrl: "https://example.com/sample.pdf",
    },
    {
      title: "Cybersecurity – Malicious Email Investigation",
      description:
        "Investigated and analyzed malicious emails using Maltego during Ethical Hacking Workshop by Abhinav Devaguptapu.",
      tech: ["Maltego", "Cybersecurity", "Threat Analysis"],
      gradient: "from-blue-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      pdfUrl: "https://example.com/sample.pdf",
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Developed an interactive dashboard using Power BI and Excel to analyze real-time retail data.",
      tech: ["Power BI", "Excel", "Data Visualization"],
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      pdfUrl: "https://example.com/sample.pdf",
    },
    {
      title: "Generative AI 2.0 Product Development",
      description:
        "Built an AI-driven product prototype under mentorship of Tezan Sahu during NxtWave's Mega Workshop.",
      tech: ["Python", "AI/ML", "Product Design"],
      gradient: "from-pink-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&h=600&fit=crop",
      pdfUrl: "https://example.com/sample.pdf",
    },
    {
      title: "Emoji Memory Game",
      description:
        "Interactive React game using state management and event handling concepts.",
      tech: ["React", "JavaScript", "CSS"],
      gradient: "from-orange-500 to-yellow-500",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      pdfUrl: "https://example.com/sample.pdf",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website showcasing projects and achievements.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      gradient: "from-cyan-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      pdfUrl: "https://example.com/sample.pdf",
    },
  ];

  return (
    <section id="projects" className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
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
                className="group bg-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                </div>
                <CardHeader>
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
