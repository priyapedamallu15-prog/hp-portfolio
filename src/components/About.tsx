import { Code2, Database, Palette, Terminal } from "lucide-react";

const About = () => {
  const skills = [
    { name: "React.js", icon: Code2 },
    { name: "JavaScript", icon: Code2 },
    { name: "Node.js", icon: Terminal },
    { name: "Express", icon: Terminal },
    { name: "MongoDB", icon: Database },
    { name: "HTML/CSS", icon: Palette },
  ];

  const tools = [
    "VS Code",
    "Git",
    "Postman",
    "Chrome DevTools",
    "GitHub",
    "npm",
  ];

  return (
    <section id="about" className="flex items-center justify-center bg-secondary/30">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Know Who <span className="text-gradient">I'M</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg leading-relaxed text-foreground/80">
                I'm <span className="text-primary font-semibold">Gopichand</span> — a passionate{" "}
                <span className="text-primary font-semibold">Intensive Mentor</span> and{" "}
                <span className="text-primary font-semibold">Software Developer</span> at NxtWave.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/80">
                I specialize in guiding students to build real-world, scalable web applications 
                while mastering modern technologies.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                With expertise in <span className="text-primary">HTML, CSS, JavaScript, React.js, 
                Node.js, and Express</span>, I enjoy transforming ideas into interactive experiences.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                I hold a Bachelor's degree in Computer Science and believe in continuous learning 
                through hands-on practice.
              </p>

              <div className="p-6 bg-card border border-primary/20 rounded-lg">
                <p className="text-xl font-semibold text-primary italic">
                  "Code. Learn. Inspire. Repeat."
                </p>
                <p className="text-sm text-muted-foreground mt-2">— that's my motto!</p>
              </div>
            </div>

            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="p-6 bg-card rounded-xl border border-primary/10 hover:border-primary/30 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-primary">Professional Skillset</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-primary/10 transition-all hover:scale-105"
                    >
                      <skill.icon size={20} className="text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-primary/10 hover:border-primary/30 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-primary">Tools I Use</h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
