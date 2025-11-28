import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Selenium Testing", logo: "https://www.svgrepo.com/show/354321/selenium.svg" },
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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.07 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-emerald-50 text-slate-900"
    >
      {/* background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-10 h-64 w-64 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute top-1/3 right-[-4rem] h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute -bottom-16 left-1/4 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24">

        {/* Header */}
        <header className="mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-pink-200 px-4 py-1 text-[11px] font-semibold tracking-[0.25em] uppercase text-pink-500 shadow-sm">
            About Me
          </div>

          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Know Who{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                  I&apos;M
                </span>
              </h2>
              <p className="mt-3 max-w-xl text-sm md:text-base text-slate-600">
                I help learners bridge the gap between theory and real-world
                development with structured guidance and hands-on mentoring.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs md:text-sm text-slate-600">
              <div className="flex items-center gap-2 rounded-full bg-white/80 border border-emerald-200 px-3 py-1 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Mentor @ NxtWave</span>
              </div>
            </div>
          </div>
        </header>

        {/* Stacked Layout (one box after another) */}
        <div className="space-y-10 lg:space-y-12">

          {/* ABOUT BOX */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="rounded-3xl bg-white/85 border border-slate-100 px-6 sm:px-8 py-7 sm:py-8 
                            shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur space-y-5">

              <p className="text-base md:text-lg leading-relaxed text-slate-800">
                I&apos;m{" "}
                <span className="font-semibold text-pink-600">
                  Pedamallu Hari Priya
                </span>
                , a{" "}
                <span className="font-semibold text-emerald-600">
                  passionate Live Mentor
                </span>{" "}
                and{" "}
                <span className="font-semibold text-sky-600">
                  Software Developer
                </span>{" "}
                at NxtWave.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                I completed my{" "}
                <span className="font-semibold text-emerald-600">
                  B.Tech in Electronics and Communication Engineering
                </span>{" "}
                from{" "}
                <span className="font-semibold text-emerald-600">NRIIT</span> in
                2018. Since then, I&apos;ve been focused on helping students turn
                fundamentals into strong, industry-ready skills.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                At NxtWave, I support learners across{" "}
                <span className="font-semibold text-sky-700">
                  HTML, CSS, JavaScript, Python, Java, SQL, Node.js, Spring
                  Boot, Selenium
                </span>
                , breaking down complex concepts into simple and practical
                explanations.
              </p>

              {/* ⭐ SINGLE-LINE STATS SECTION */}
              <p className="text-sm md:text-base font-medium text-rose-600 bg-rose-50/70 border border-rose-200 
                            px-4 py-2 rounded-full inline-block shadow-sm">
                Coding doubts resolved: <span className="font-bold">35,000+</span> — Helping learners debug, reason, and build confidence step by step.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-slate-700 mt-2">
                I also conduct{" "}
                <span className="font-semibold text-purple-600">
                  engaging bonus sessions
                </span>{" "}
                covering debugging workflows, clean code practices, and real-world
                project design.
              </p>

              {/* Motto with animation */}
              <div className="pt-5 mt-4 border-t border-slate-100">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 text-center mb-1">
                  Motto
                </p>
                <motion.p
                  className="text-lg md:text-xl font-semibold italic text-center 
                             bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 
                             bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                >
                  Learn. Build. Grow. Repeat.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* PROFESSIONAL SKILLSET BOX */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl bg-white/90 border border-slate-100 p-6 sm:p-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur"
          >
            <div className="flex items-center justify-between gap-2 mb-5">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  Professional Skillset
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Hover on an icon to see the skill.
                </p>
              </div>
              <span className="rounded-full bg-pink-50 px-3 py-1 text-[11px] font-semibold text-pink-600 border border-pink-200">
                Tech Stack
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 justify-items-center"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="group relative flex flex-col items-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/80 
                                  shadow-md shadow-slate-200 hover:shadow-sky-100/90 hover:-translate-y-1 
                                  transition-all cursor-pointer">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  {/* tooltip name on hover */}
                  <span
                    className="pointer-events-none absolute top-[3.3rem] rounded-full bg-slate-900 text-white 
                               text-[11px] font-medium px-3 py-1 opacity-0 scale-90 translate-y-1 
                               group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 
                               transition-all duration-200 whitespace-nowrap"
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* TOOLS I USE BOX */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="rounded-3xl bg-white/90 border border-slate-100 p-6 sm:p-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur"
          >
            <div className="flex items-center justify-between gap-2 mb-5">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  Tools I Use
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Hover on an icon to see the tool.
                </p>
              </div>
              <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-sky-600 border border-sky-200">
                Daily Drivers
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 justify-items-center"
            >
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="group relative flex flex-col items-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/80 
                                  shadow-md shadow-slate-200 hover:shadow-emerald-100/90 hover:-translate-y-1 
                                  transition-all cursor-pointer">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-7 h-7 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  {/* tooltip name on hover */}
                  <span
                    className="pointer-events-none absolute top-[3.3rem] rounded-full bg-slate-900 text-white 
                               text-[11px] font-medium px-3 py-1 opacity-0 scale-90 translate-y-1 
                               group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 
                               transition-all duration-200 whitespace-nowrap"
                  >
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
