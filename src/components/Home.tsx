import { Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJoc2woMTg5IDEwMCUgNTAlIC8gMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/50 group-hover:border-primary transition-all group-hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Gopichand Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Intro Text */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light text-foreground/80">
              Hi There! 👋🏻
            </h2>
            
            <h1 className="text-4xl md:text-7xl font-bold">
              I'M{" "}
              <span className="text-gradient inline-block animate-[fade-in_1.5s_ease-out] hover:scale-105 transition-transform">
                GOPICHAND
              </span>
            </h1>

            <div className="space-y-2 text-xl md:text-2xl text-muted-foreground">
              <p className="font-semibold text-primary">Intensive Mentor</p>
              <p>Software Developer | Live Mentor</p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Empowering students to build real-world applications and master modern technologies at NxtWave
          </p>

          {/* 🔥 3D Text Marquee Effect */}
          <div className="mt-10 overflow-hidden relative h-12 perspective-[1000px]">
            <div className="animate-marquee3d absolute whitespace-nowrap text-2xl font-bold text-primary">
              <span className="mx-8">🚀 Software Developer</span>
              <span className="mx-8">💡 Live Mentor</span>
              <span className="mx-8">🔥 Intensive Mentor</span>
              <span className="mx-8">💻 NxtWave Professional</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} className="text-primary" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-primary" />
            </a>
            <a
              href="mailto:gopichand@example.com"
              className="p-3 rounded-full bg-card border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} className="text-primary" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
