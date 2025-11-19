import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Dodger Arcade Game (Pygame)",
      description:
        "A fast-paced Dodger-style arcade game built with Python and Pygame. The player controls a UFO and avoids falling asteroids that increase in speed and size as levels progress. Includes animated backgrounds, multiple UFOs, pause mode, score tracking, and game-over screen.",
      tech: ["Python", "Pygame", "ctypes", "OS & Sys", "Random"],
      gradient: "from-cyan-500 to-blue-500",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
      ppt: "/DODGER.pdf", // your public PPT
    },
    {
  title: "Application Tracking System",
  description:
    "A web-based application for certificate verification. Students upload applications which are verified step-by-step by AO, FO, and the Director. The system reduces manual interaction, saves time, and allows students to track application status. Admins can approve or reject applications based on correctness.",
  tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP", "MySQL"],
  gradient: "from-blue-500 to-purple-500",
  image:
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&h=600&fit=crop",
  ppt: "/Application tracking system (1).pptx" 
}
,
    {
      title: "Movies App – Netflix / Prime Clone",
      description:
        "A full-stack OTT web app with trending movies, search, detailed views, and user authentication. Built using TMDb API. Includes protected routes, React Router navigation, slick sliders, Bootstrap layout, and Figma-based UI.",
      tech: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "TMDb API"],
      gradient: "from-orange-500 to-yellow-500",
      image:
        "https://res.cloudinary.com/daa0trmzd/image/upload/v1763534490/MOVIES_ipmgvh.png",
      live: "https://gopimovie.ccbp.tech",
    },
  ];

  return (
    <section id="projects" className="min-h-screen">
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
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                  />
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
                    {/* Show PPT for first 2 projects */}
                   {project.ppt && (
  <a
    href={project.ppt}
    download
    className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
  >
    <ExternalLink size={16} />
    <span className="text-sm font-medium">Download PPT</span>
  </a>
)}


                    {/* Show Live Demo for 3rd Project */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
