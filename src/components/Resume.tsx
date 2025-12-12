import { Download, ExternalLink, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Resume = () => {
  // replace with the actual URL or file path of your PDF
  const resumePdfUrl = "/Hari Priya-resume.pdf";

  return (
    <section
      id="resume"
      className="relative min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-emerald-50 text-slate-900"
    >
      {/* shared pastel blob background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-10 h-64 w-64 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute top-1/3 right-[-4rem] h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute -bottom-16 left-1/4 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24">
        {/* Header */}
        <header className="mb-10 md:mb-14 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-emerald-200 px-4 py-1 text-[11px] font-semibold tracking-[0.25em] uppercase text-emerald-600 shadow-sm">
            Resume
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              My{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                Resume
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-600">
              View or download my complete professional resume, including work
              experience, skills, and projects.
            </p>
          </div>
        </header>

        {/* Main card */}
        <Card className="rounded-3xl border border-slate-100 bg-white/90 backdrop-blur shadow-[0_18px_45px_rgba(148,163,184,0.22)]">
          <CardContent className="p-5 sm:p-7 space-y-6">
            {/* top row: icon + text + buttons */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 via-purple-400 to-sky-400 shadow-md shadow-pink-200/80">
                  <FileText size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Hari Priya
                  </p>
                  <p className="text-xs text-slate-500">
                    Software Developer • Intensive Mentor
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={resumePdfUrl}
                  download="Gopichand_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-5 py-2.5 text-xs sm:text-sm font-semibold text-sky-700 hover:bg-sky-100 hover:border-sky-300 hover:text-sky-800 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </a>

                <a
                  href={resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-5 py-2.5 text-xs sm:text-sm font-semibold text-emerald-700 hover:bg-emerald-100 hover:border-emerald-300 hover:text-emerald-800 hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <ExternalLink size={18} />
                  <span>Open in New Tab</span>
                </a>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="w-full rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/60">
              <iframe
                src={`${resumePdfUrl}#toolbar=0`}
                title="Gopichand Resume"
                className="w-full h-[480px] sm:h-[620px] md:h-[760px]"
              />
            </div>

            <p className="text-xs md:text-sm text-slate-500 text-center">
              If the embedded preview does not load properly, use{" "}
              <span className="font-semibold text-sky-600">
                “Open in New Tab”
              </span>{" "}
              or{" "}
              <span className="font-semibold text-emerald-600">
                “Download Resume”
              </span>{" "}
              to view it directly.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;