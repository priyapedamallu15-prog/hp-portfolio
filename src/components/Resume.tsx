import { Download, ExternalLink, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Resume = () => {
  return (
    <section id="resume" className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              My <span className="text-gradient">Resume</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download or view my complete professional resume
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <Card className="bg-card border-primary/20 animate-slide-up">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                {/* Resume Preview */}
                <div className="aspect-[8.5/11] bg-secondary/50 rounded-lg border-2 border-dashed border-primary/20 flex items-center justify-center hover:border-primary/40 transition-all">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                      <FileText size={48} className="text-primary-foreground" />
                    </div>
                    <p className="text-2xl font-bold text-gradient">Gopichand</p>
                    <p className="text-muted-foreground">Intensive Mentor | Software Developer</p>
                    <p className="text-sm text-foreground/60 max-w-md mx-auto px-4">
                      Full Stack Developer with expertise in React, Node.js, and modern web technologies.
                      Passionate about mentoring and building scalable applications.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105">
                    <Download size={20} className="group-hover:animate-bounce" />
                    <span className="font-semibold">Download Resume</span>
                  </button>
                  
                  <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-card border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all hover:scale-105">
                    <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
                    <span className="font-semibold">View Online</span>
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                  {[
                    { label: "Experience", value: "2+ Years" },
                    { label: "Projects", value: "20+" },
                    { label: "Students", value: "100+" },
                    { label: "Certificates", value: "5+" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-secondary rounded-lg hover:bg-primary/10 transition-all"
                    >
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center space-y-4 pt-8 border-t border-primary/10 animate-fade-in">
            <p className="text-foreground/80">Designed and Developed by Gopichand</p>
            <p className="text-muted-foreground">© 2025 Gopichand. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
