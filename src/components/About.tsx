import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  const tools = [
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "IntelliJ IDEA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Chrome DevTools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "npm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="min-h-screen bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Know Who <span className="text-gradient">I'M</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg leading-relaxed text-foreground/80">
                I'm <span className="text-primary font-semibold">Gopichand</span> — a passionate{" "}
                <span className="text-primary font-semibold">Intensive Mentor</span> and{" "}
                <span className="text-primary font-semibold">Software Developer</span> at NxtWave.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                I completed my <span className="text-primary font-semibold">B.Tech in Computer Science</span> 
                from <span className="text-primary font-semibold">IIIT Nuzvid</span> in 2020.
                With a strong foundation in software engineering and a drive for mentoring, 
                I’ve dedicated my career to helping students grow into confident developers.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                At NxtWave, I support learners across multiple courses including{" "}
                <span className="text-primary font-semibold">
                  React, Python, Java, SQL, Node.js, and Spring Boot
                </span>. 
                Over time, I’ve resolved <span className="text-primary font-semibold">30,000+ coding doubts</span> 
                and helped students overcome complex challenges with practical solutions.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                I also conduct engaging{" "}
                <span className="text-primary font-semibold">bonus sessions</span> that cover debugging, 
                clean code practices, React concepts, and real-world project insights — 
                making learning interactive and impactful.
              </p>

              <div className="p-6 bg-card border border-primary/20 rounded-lg shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <p className="text-xl font-semibold text-primary italic text-center">
                  "Code. Learn. Inspire. Repeat."
                </p>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  — That’s my motto!
                </p>
              </div>
            </div>

            {/* Right Side: Skills */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="p-6 bg-card rounded-xl border border-primary/10 hover:border-primary/30 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-primary">Professional Skillset</h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      transition={{ type: "spring", stiffness: 100, damping: 12 }}
                      className="group flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-primary/10 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                      />
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Tools */}
              <div className="p-6 bg-card rounded-xl border border-primary/10 hover:border-primary/30 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-primary">Tools I Use</h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
                    >
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-5 h-5 object-contain group-hover:scale-110 transition-transform"
                      />
                      <span>{tool.name}</span>
                    </div>
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
