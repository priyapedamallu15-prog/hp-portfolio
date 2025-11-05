import { Award, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      title: "Full Stack Development Certification",
      issuer: "NxtWave",
      year: "2024",
      description: "Mastered React, Node.js, Express, MongoDB, and SQL.",
      icon: Award,
    },
    {
      title: "Developer Foundations Certification",
      issuer: "NxtWave",
      year: "2024",
      description: "Learned Git, CLI operations, and fundamental development principles.",
      icon: Award,
    },
    {
      title: "JavaScript Essentials Certification",
      issuer: "NxtWave",
      year: "2024",
      description: "Strengthened core JS concepts through project-based learning.",
      icon: Award,
    },
  ];

  const highlights = [
    "Mentored 100+ students in full-stack development",
    "Led workshops on Generative AI and Cybersecurity",
    "Built 20+ real-world projects with students",
    "Contributed to open-source projects",
  ];

  return (
    <section id="achievements" className="min-h-screen bg-secondary/30 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Achievements & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are my professional certifications and notable achievements.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

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
                <CardContent>
                  <p className="text-foreground/70 leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

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
