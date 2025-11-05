import { Download, ExternalLink, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Resume = () => {
  const resumePdfUrl = "/Resume.pdf"; // Replace with your actual PDF URL

  return (
    <section id="resume" className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
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
            <CardContent className="p-4 md:p-6">
              <div className="space-y-6">
                {/* PDF Viewer */}
                <div className="w-full h-[800px] rounded-lg overflow-hidden border-2 border-primary/20">
                 <iframe
  src="/Resume.pdf#toolbar=0"
  className="w-full h-[800px] rounded-lg overflow-hidden border-2 border-primary/20"
  title="Gopichand Resume"
  frameBorder="0"
/>

                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={resumePdfUrl}
                    download="Gopichand_Resume.pdf"
                    className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105"
                  >
                    <Download size={20} className="group-hover:animate-bounce" />
                    <span className="font-semibold">Download Resume</span>
                  </a>
                  
                  <a 
                    href={resumePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-8 py-4 bg-card border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all hover:scale-105"
                  >
                    <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" />
                    <span className="font-semibold">View Online</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;
