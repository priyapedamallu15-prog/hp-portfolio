import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Projects = () => {
  const projects = [
    // 1️⃣ Dussehra Events – HTML & CSS
    {
      title: "Dussehra Events – 2025 Celebration Page",
      description:
        "A festive Dussehra events website featuring Navaratri nights, Dandiya carousel sections, and joyful wishes. Built with Bootstrap components, responsive layouts, and colorful visual themes.",
      tech: ["HTML", "CSS", "Bootstrap", "Responsive Layout"],
      gradient: "from-orange-500 via-rose-400 to-red-500",
      image:
        "https://res.cloudinary.com/dl2zytwyi/image/upload/v1758193484/option-2_h0iwql.png",
      live: "https://hpdasara.ccbp.tech",
    },

    // 2️⃣ Wikipedia Search App – HTML, CSS, JS
    {
      title: "Wikipedia Search Application",
      description:
        "A JavaScript-powered Wikipedia search interface that fetches live results and displays title, link, and description using DOM manipulation and REST API integration.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST API"],
      gradient: "from-sky-500 via-cyan-400 to-emerald-400",
      image:
        "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png",
      live: "https://hpwikipedia.ccbp.tech",
    },

    // 3️⃣ React Project – GitHub Profile Visualizer (Image Added)
    {
      title: "GitHub Profile Visualizer (React.js)",
      description:
        "A React.js application that fetches GitHub user data, repositories, and analytics from an internal API. Includes routed pages, reusable components, search input validation, and a clean modern UI.",
      tech: ["React.js", "JavaScript", "REST API", "Routing", "Responsive UI"],
      gradient: "from-purple-500 via-indigo-500 to-blue-500",

      // 🔥 Your actual screenshot added here
      image: "https://res.cloudinary.com/ddut43twx/image/upload/v1764323580/facer4vkxz9y2v56ybej.jpg",

      live: "https://hpgitproj.ccbp.tech/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-emerald-50 text-slate-900"
    >
      {/* shared pastel blobs background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-10 h-64 w-64 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute top-1/3 right-[-4rem] h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute -bottom-16 left-1/4 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24">
        {/* Header */}
        <header className="mb-12 md:mb-16 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-sky-200 px-4 py-1 text-[11px] font-semibold tracking-[0.25em] uppercase text-sky-600 shadow-sm">
            Projects
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              My Recent{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-600">
              A selection of projects that highlight my frontend, backend, and
              React.js development skills.
            </p>
          </div>
        </header>

        {/* Projects Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white/90 backdrop-blur shadow-[0_18px_45px_rgba(148,163,184,0.22)] hover:shadow-[0_22px_55px_rgba(56,189,248,0.35)] transition-all hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-40 mix-blend-soft-light`}
                />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/85 px-3 py-2 shadow-md shadow-slate-300/60">
                  <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    Featured Project
                  </p>
                  <p className="text-sm font-semibold text-slate-900 truncate">
                    {project.title}
                  </p>
                </div>
              </div>

              <CardHeader className="pb-2 pt-4">
                <CardTitle className="text-lg font-semibold text-slate-900">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-[11px] uppercase tracking-wide text-slate-400">
                  Tech Project • Hands-on Development
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col gap-4 pb-5">
                <p className="text-sm leading-relaxed text-slate-700">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-slate-50/80 px-3 py-1 text-[11px] font-medium text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-2 text-xs md:text-sm font-semibold text-emerald-700 hover:bg-emerald-100 hover:border-emerald-300 hover:text-emerald-800 hover:-translate-y-0.5 transition-all shadow-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
