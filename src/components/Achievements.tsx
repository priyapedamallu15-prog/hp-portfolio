import { Award, CheckCircle2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Achievements = () => {
  const achievements = [
    {
      title: "Build Your Own Static Website",
      issuer: "NxtWave",
      year: "2024",
      description: "HTML, CSS, and Bootstrap fundamentals for static web development.",
      link: "https://certificates.ccbp.in/intensive/static-website?id=CWOBCGTZWV",
      icon: Award,
    },
    {
      title: "Build Your Own Responsive Website",
      issuer: "NxtWave",
      year: "2024",
      description: "Advanced responsive design using HTML, CSS, and Bootstrap.",
      link: "https://certificates.ccbp.in/intensive/responsive-website?id=TZVKYXCQZF",
      icon: Award,
    },
    {
      title: "Introduction to Databases",
      issuer: "NxtWave",
      year: "2024",
      description: "Learned SQL queries, schema design, and relational database basics.",
      link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=UXRMRAEXTL",
      icon: Award,
    },
    {
      title: "Programming Foundations",
      issuer: "NxtWave",
      year: "2024",
      description: "Strong foundation in programming logic using Python.",
      link: "https://certificates.ccbp.in/intensive/programming-foundations?id=KDQRDASWKL",
      icon: Award,
    },
    {
      title: "Developer Foundations",
      issuer: "NxtWave",
      year: "2024",
      description:
        "Comprehensive foundation course covering Git, command line operations, and development principles.",
      link: "https://certificates.ccbp.in/intensive/developer-foundations?id=RAPQRYNSYW",
      icon: Award,
    },
    {
      title: "Build Your Own Dynamic Web Application",
      issuer: "NxtWave",
      year: "2024",
      description: "Created interactive applications using HTML, CSS, and JavaScript.",
      link: "https://your-certificate-link-6.com",
      icon: Award,
    },
    {
      title: "JavaScript Essentials",
      issuer: "NxtWave",
      year: "2024",
      description: "Strengthened JavaScript fundamentals through practical examples.",
      link: "https://certificates.ccbp.in/intensive/node-js?id=OKUJBUXQCP",
      icon: Award,
    },
    {
      title: "Responsive Web Design using Flexbox & Node.js",
      issuer: "NxtWave",
      year: "2024",
      description: "Mastered modern layouts with Flexbox and backend logic with Node.js.",
      link: "https://your-certificate-link-8.com",
      icon: Award,
    },
    {
      title: "React JS - Getting Started",
      issuer: "NxtWave",
      year: "2024",
      description: "Built interactive UIs and learned component-based architecture using React.",
      link: "https://certificates.ccbp.in/intensive/react-js?id=TYTGLCCBKL",
      icon: Award,
    },
  ];

  const highlights = [
    "Mentored 10000+ students in mern-stack development",
    "Led workshops on Generative AI and Cybersecurity",
    "Built 20+ real-world projects with students",
    "Contributed to open-source projects",
  ];

  return (
    <section id="achievements" className="min-h-screen bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Achievements & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are my professional certifications and notable achievements.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Certificates */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group bg-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <achievement.icon size={32} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {achievement.issuer} • {achievement.year}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/70 leading-relaxed">{achievement.description}</p>

                  {/* Fancy Button */}
                  <Button
                    className="relative w-full overflow-hidden rounded-full py-2.5 px-4 text-base font-semibold text-primary-foreground transition-all duration-300 
                               bg-gradient-to-r from-primary via-cyan-400 to-blue-600
                               hover:from-cyan-400 hover:to-primary 
                               shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:shadow-[0_0_30px_rgba(56,189,248,0.8)]
                               active:scale-95 group/button"
                    onClick={() => window.open(achievement.link, "_blank")}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Certificate <ExternalLink size={18} className="transition-transform group-hover/button:translate-x-1" />
                    </span>
                    <span
                      className="absolute inset-0 opacity-0 group-hover/button:opacity-30 transition-opacity duration-500 
                                 bg-[radial-gradient(circle_at_center,white,transparent_70%)]"
                    ></span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-16 p-8 bg-card rounded-2xl border border-primary/20 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Professional <span className="text-gradient">Highlights</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-secondary rounded-lg hover:bg-primary/10 transition-all"
                >
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
