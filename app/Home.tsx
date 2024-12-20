"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import {motion} from "framer-motion";

// You can replace these with actual social media links
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/noahatkins",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/noahatkins/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Unsplash",
    url: "https://unsplash.com/@natkins",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
      </svg>
    ),
  },
];

const fadeIn = {
  initial: {opacity: 0, y: 20},
  animate: {opacity: 1, y: 0},
  transition: {duration: 0.5},
};

const projects = [
  {
    name: "Kombo",
    url: "https://kombo.noahatkins.com",
    technologies: "Next.js, TypeScript, Tailwind CSS",
    description: "A code-breaking game challenging players to crack the code using logic and deduction within 8 attempts.",
    image: "https://kombo.noahatkins.com/api/og",
  },
  // {
  //   name: "Hue Hub",
  //   url: "https://huehub.noahatkins.com",
  //   technologies: "React, TypeScript",
  //   description: "A color palette repository providing quick access and copying functionality for project color schemes.",
  //   image: "https://huehub.noahatkins.com/api/og",
  // },
  {
    name: "TodoLS",
    url: "https://todols.noahatkins.com",
    technologies: "Next.js, TypeScript, Tailwind CSS",
    description: "A task management application leveraging local storage for persistent state management.",
    image: "https://todols.noahatkins.com/api/og",
  },
];

const experiences = [
  {
    company: "Forsta",
    position: "Software Support Engineer",
    period: "Sep 2022 - Present",
    description: "Support enterprise clients with SaaS platform implementation, providing technical solutions and developing innovative approaches to meet complex business requirements.",
  },
  {
    company: "NetFore Systems",
    position: "Solutions Engineer",
    period: "Aug 2021 - Sep 2022",
    description: "Collaborated with major enterprises (Walmart, BCBS, Hulu) through Five9 to implement Intelligent Virtual Agents, leveraging AI and Natural Language Processing technologies.",
  },
  {
    company: "PSL Group",
    position: "Freelance",
    period: "May 2021 - Sep 2022",
    description: "Developed and integrated JSON-based learning modules into healthcare professional training platforms, enhancing educational content delivery and user experience.",
  },
  {
    company: "FightTM",
    position: "Full Stack Developer",
    period: "Dec 2020 - Jun 2021",
    description: "Contributed to a 4-person team developing a social networking platform focused on gaming tournament organization and video clip sharing.",
  },
];

export const Home = () => {
  const [codeText, setCodeText] = useState("'Hello World, I'm Noah.'");
  const originalAbout = "Technical problem solver with a passion for coding, sports, and exploring new places. Committed to creating meaningful impact through technology.";
  const [isTextScrambled, setIsTextScrambled] = useState(true);
  const [aboutText, setAboutText] = useState(originalAbout);
  const [socialIconsRotation, setSocialIconsRotation] = useState(90);

  useEffect(() => {
    if (isTextScrambled) {
      const words = originalAbout.split(" ");
      setAboutText([...words].sort(() => Math.random() - 0.5).join(" "));
    }
  }, [isTextScrambled, originalAbout]);

  const handleExecute = () => {
    console.log(codeText);
  };

  const handleFixText = () => {
    setAboutText(originalAbout);
    setIsTextScrambled(false);
    setSocialIconsRotation(0);
  };

  return (
    <motion.main className="min-h-screen px-4 py-16 md:py-24" initial="initial" animate="animate">
      {/* Hero Section */}
      <div className="relative max-w-lg mx-auto text-center mb-24">
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}} className="relative z-10">
          <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3}} className="max-w-3xl mx-auto">
            <div className="bg-[#1e1e1e] rounded-lg overflow-hidden mb-8 mx-auto max-w-lg">
              <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <button onClick={handleExecute} className="text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600">
                  Execute
                </button>
              </div>
              <div className="p-4 font-mono">
                <span className="text-[#c678dd] text-xs md:text-base">console</span>
                <span className="text-white text-xs md:text-base">.</span>
                <span className="text-[#61afef] text-xs md:text-base">log</span>
                <span className="text-white text-xs md:text-base">(</span>
                <input type="text" value={codeText} onChange={(e) => setCodeText(e.target.value)} className="bg-transparent text-[#98c379] focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-[300px] overflow-hidden text-ellipsis text-xs md:text-base" style={{width: `${codeText.length}ch`}} />
                <span className="text-white text-xs md:text-base">);</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <motion.div initial={{opacity: 0}} animate={{opacity: 0.1}} transition={{delay: 0.5}} className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-600/10 to-blue-500/10 blur-3xl" />
        </div>
      </div>

      {/* About Section */}
      <motion.section className="max-w-lg mx-auto mb-24" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} viewport={{once: true}}>
        <div className="flex justify-between items-center mb-6">
          <motion.h2 className="text-xl md:text-2xl font-bold" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} viewport={{once: true}}>
            About
          </motion.h2>
          <button onClick={handleFixText} disabled={!isTextScrambled} className={`px-3 py-1 rounded-md flex items-center gap-2 h-8 ${isTextScrambled ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30" : "bg-green-500/20 text-green-400 cursor-not-allowed"}`}>
            {isTextScrambled ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                </svg>
                <span>Fix</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Fixed</span>
              </>
            )}
          </button>
        </div>
        <div className="space-y-6">
          <motion.div className="flex items-center gap-2" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.4}} viewport={{once: true}}>
            <p className="text-md md:text-lg text-gray-400 leading-relaxed min-h-[4.5rem]">{aboutText}</p>
          </motion.div>

          <motion.div className="flex flex-wrap gap-4" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.6}} viewport={{once: true}}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 p-3 rounded-full bg-card hover:bg-blue-500/10 transition-all duration-300"
                initial={{opacity: 0, rotate: 90}}
                animate={{
                  opacity: 1,
                  rotate: socialIconsRotation,
                  transition: {
                    delay: 0.1 * index,
                    duration: 0.5,
                  },
                }}
                whileHover={{scale: 1.1}}
              >
                <span className="text-gray-400 group-hover:text-blue-500 transition-colors">{link.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="max-w-lg mx-auto mb-24" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} viewport={{once: true}}>
        <motion.h2 className="text-xl md:text-2xl font-bold mb-6" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} viewport={{once: true}}>
          Experience
        </motion.h2>
        <motion.div className="space-y-4" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.3, delay: 0.3}} viewport={{once: true}}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="bg-card rounded-xl p-6 md:p-8 hover:bg-opacity-70 transition-colors duration-200"
              initial={{opacity: 0, y: 20}}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {delay: index * 0.1},
              }}
              viewport={{once: true}}
              whileHover={{x: 10}}
            >
              <h3 className="text-lg font-bold mb-1">{exp.company}</h3>
              <p className="text-gray-400 text-sm mb-3">
                {exp.position} • {exp.period}
              </p>
              <p className="text-gray-300 text-sm md:text-base">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section className="max-w-lg mx-auto" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} viewport={{once: true}}>
        <motion.h2 className="text-xl md:text-2xl font-bold mb-6" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} viewport={{once: true}}>
          Projects
        </motion.h2>
        <motion.div className="grid grid-cols-1 gap-4" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.3, delay: 0.3}} viewport={{once: true}}>
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-card rounded-xl overflow-hidden"
              initial={{opacity: 0, y: 50}}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.2, // Staggered delay based on index
                },
              }}
              viewport={{once: true, margin: "-100px"}}
              whileHover={{
                y: -5,
                transition: {duration: 0.2},
              }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <motion.div className="w-full h-full" whileHover={{scale: 1.05}} transition={{duration: 0.4}}>
                  <Image src={project.image} alt={`${project.name} preview`} fill className="object-cover transition-transform duration-300" sizes="(max-width: 768px) 100vw, 42rem" />
                </motion.div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-lg font-bold mb-1">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.technologies}</p>
                <p className="text-gray-300 text-sm md:text-base">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>
    </motion.main>
  );
};
