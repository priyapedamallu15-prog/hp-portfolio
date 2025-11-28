import { Award, CheckCircle2, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    {
      title: "Build Your Own Static Website",
      issuer: "NxtWave",
      year: "2024",
      description:
        "HTML, CSS, and Bootstrap fundamentals for static web development.",
      link: "https://certificates.ccbp.in/intensive/static-website?id=FBEZYXCSHG",
      icon: Award,
    },
    {
      title: "Build Your Own Responsive Website",
      issuer: "NxtWave",
      year: "2024",
      description: "Advanced responsive design using HTML, CSS, and Bootstrap.",
      link: "https://certificates.ccbp.in/intensive/responsive-website?id=ZTWDGWSQLA",
      icon: Award,
    },
    {
      title: "Introduction to Databases",
      issuer: "NxtWave",
      year: "2024",
      description:
        "Learned SQL queries, schema design, and relational database basics.",
      link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=UAPTXYKMBE",
      icon: Award,
    },
    {
      title: "Programming Foundations",
      issuer: "NxtWave",
      year: "2024",
      description: "Strong foundation in programming logic using Python.",
      link: "https://certificates.ccbp.in/intensive/programming-foundations?id=XOBDFXAWIL",
      icon: Award,
    },
    {
      title: "Developer Foundations",
      issuer: "NxtWave",
      year: "2024",
      description:
        "Comprehensive foundation course covering Git, CLI, and software development principles.",
      link: "https://certificates.ccbp.in/intensive/developer-foundations?id=GOZATBIWRZ",
      icon: Award,
    },
    {
      title: "Build Your Own Dynamic Web Application",
      issuer: "NxtWave",
      year: "2024",
      description:
        "Created interactive applications using HTML, CSS, and JavaScript.",
      link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=DRHIQDJYFD",
      icon: Award,
    },
    {
      title: "JavaScript Essentials",
      issuer: "NxtWave",
      year: "2024",
      description:
        "Strengthened JavaScript fundamentals through hands-on practice.",
      link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=PIVDYTSNPE",
      icon: Award,
    },
    {
      title: "Responsive Web Design using Flexbox",
      issuer: "NxtWave",
      year: "2024",
      description: "Mastered modern page layouts using Flexbox.",
      link: "https://certificates.ccbp.in/intensive/flexbox?id=OMCJKGWQLR",
      icon: Award,
    },
    {
      title: "Node JS",
      issuer: "NxtWave",
      year: "2024",
      description:
        "Built backend APIs using Node.js and Express, including routing, middleware, and database integration.",
      link: "https://certificates.ccbp.in/intensive/node-js?id=FWYRCRBASD",
      icon: Award,
    },
  ];

  const highlights = [
    "Helped learners debug complex code by explaining root causes step-by-step instead of just giving fixes.",
    "Guided students in building real-world projects by breaking requirements into simple, achievable tasks.",
    "Supported learners in strengthening programming logic through structured practice and hands-on live sessions.",
    "Mentored students for interviews by improving problem-solving, project explanation, and communication confidence.",
  ];

  // Animation variants – typesafe (no 'ease' string)
  const gridVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const highlightVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 },
    },
  };

  return (
    <section
      id="achievements"
      className="relative min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-emerald-50 text-slate-900"
    >
      {/* background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-10 h-64 w-64 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute top-1/3 right-[-4rem] h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute -bottom-16 left-1/4 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24">
        {/* Header */}
        <header className="mb-12 md:mb-16 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-pink-200 px-4 py-1 text-[11px] uppercase tracking-[0.25em] font-semibold text-pink-500 shadow-sm">
            Achievements
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Achievements &{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-600">
              A journey of learning, growth, and continuous improvement.
            </p>
          </div>
        </header>

        {/* Achievements Grid with animations */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((achievement) => (
            <motion.div key={achievement.title} variants={cardVariants}>
              <Card
                className="group rounded-3xl border border-slate-100 bg-white/85 backdrop-blur 
                shadow-[0_18px_45px_rgba(148,163,184,0.22)] hover:shadow-[0_22px_55px_rgba(129,140,248,0.35)] 
                transition-all hover:-translate-y-1.5 overflow-hidden relative"
              >
                {/* soft gradient blob */}
                <div className="absolute -top-16 right-0 h-24 w-24 rounded-full bg-pink-200/40 blur-2xl opacity-80 group-hover:opacity-100 transition-opacity" />

                <CardHeader className="relative pb-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 via-purple-400 to-sky-400 shadow-sm shadow-pink-200/80">
                      <achievement.icon size={20} className="text-white" />
                    </div>

                    <div className="text-xs font-medium text-slate-500">
                      <p className="uppercase tracking-wide">{achievement.issuer}</p>
                      <p className="text-[11px] mt-0.5 text-slate-400">
                        {achievement.year}
                      </p>
                    </div>
                  </div>

                  <CardTitle className="text-base md:text-lg font-semibold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {achievement.title}
                  </CardTitle>

                  <CardDescription className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                    Certificate
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-5 space-y-4">
                  <p className="text-sm leading-relaxed text-slate-700">
                    {achievement.description}
                  </p>

                  <Button
                    variant="ghost"
                    onClick={() => window.open(achievement.link, "_blank")}
                    className="w-full rounded-full border border-sky-200 bg-sky-50/60 text-sm font-semibold text-sky-700 
                    hover:bg-sky-100 hover:border-sky-300 hover:text-sky-800 transition-all flex items-center gap-2 justify-center"
                  >
                    View Certificate <ExternalLink size={15} />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Highlights */}
        <section className="mt-16">
          <div className="rounded-3xl border border-slate-100 bg-white/90 backdrop-blur px-6 sm:px-8 py-8 md:py-10 shadow-[0_18px_45px_rgba(148,163,184,0.18)]">
            <div className="text-center mb-8 space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                Professional{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                  Highlights
                </span>
              </h3>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                Impactful experiences that shaped my journey as a mentor.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {highlights.map((text, index) => (
                <motion.div
                  key={index}
                  variants={highlightVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.12 }}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-sky-300 
                  px-4 py-3 hover:bg-sky-50 transition-all"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-sky-400 shadow-sm">
                    <CheckCircle2 size={18} className="text-white" />
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Achievements;
