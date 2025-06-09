"use client";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import {GeistMono} from "geist/font/mono";

// You can replace these with actual social media links
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/noahatkins",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
    description: "A code-breaking game challenging players to crack the code using logic and deduction within 8 attempts.",
    image: "https://kombo.noahatkins.com/api/og",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel", "Local Storage"],
  },
  {
    name: "QuizCache",
    url: "https://quizcache.noahatkins.com",
    description: "AI-powered tool that converts PDF and TXT files into interactive flashcards, enabling efficient study and learning through automated content transformation.",
    image: "https://quizcache.noahatkins.com/api/og",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI", "Vercel", "PDF Processing"],
  },
  {
    name: "TodoLS",
    url: "https://todols.noahatkins.com",
    description: "A task management application leveraging local storage for persistent state management.",
    image: "https://todols.noahatkins.com/api/og",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Local Storage", "Vercel"],
  },
];

const experiences = [
  {
    company: "Forsta",
    position: "Software Support Engineer",
    period: "Sep 2022 - Present",
    description: "Support enterprise clients with SaaS platform implementation, providing technical solutions and developing innovative approaches to meet complex business requirements.",
    skills: ["JavaScript", "jQuery", "Zendesk", "REST APIs", "JIRA", "Kibana"],
  },
  {
    company: "NetFore Systems",
    position: "Solutions Engineer",
    period: "Aug 2021 - Sep 2022",
    description: "Collaborated with major enterprises (Walmart, BCBS, Hulu) through Five9 to implement Intelligent Virtual Agents, leveraging AI and Natural Language Processing technologies.",
    skills: ["NLP", "Dialogflow", "REST APIs", "IVR"],
  },
  {
    company: "PSL Group",
    position: "Freelance",
    period: "May 2021 - Sep 2022",
    description: "Developed and integrated JSON-based learning modules into healthcare professional training platforms, enhancing educational content delivery and user experience.",
    skills: ["JavaScript", "React", "Node.js", "JSON"],
  },
  {
    company: "FightTM",
    position: "Full Stack Developer",
    period: "Dec 2020 - Jun 2021",
    description: "Contributed to a 4-person team developing a social networking platform focused on gaming tournament organization and video clip sharing.",
    skills: ["React", "Node.js", "PostgreSQL", "REST APIs", "Redux"],
  },
];

export default function Home() {
  const [codeText, setCodeText] = useState("'Hello World, I'm Noah.'");
  const originalAbout = "Technical problem solver with a passion for coding, sports, and exploring new places. Committed to creating meaningful impact through technology.";

  const handleExecute = () => {
    console.log(codeText);
  };

  return (
    <motion.main className="min-h-screen px-4 py-16 md:py-24 bg-[#111827]" initial="initial" animate="animate">
      {/* Hero Section */}
      <div className="relative max-w-lg mx-auto text-center mb-24">
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}} className="relative z-10">
          <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3}} className="max-w-3xl mx-auto">
            <div className="bg-[#1e2738] rounded-lg overflow-hidden mb-8 mx-auto max-w-lg border border-[#2a3441] shadow-[0_0_15px_rgba(0,0,0,0.2)]">
              <div className="flex items-center justify-between px-4 py-2 bg-[#1e2738]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <button onClick={handleExecute} className="text-xs text-gray-300 hover:text-white px-2 py-1 rounded border border-[#2a3441] hover:border-[#3a4451] transition-colors">
                  Execute
                </button>
              </div>
              <div className={`p-4 ${GeistMono.className}`}>
                <span className="text-[#c678dd] text-xs md:text-base">console</span>
                <span className="text-gray-200 text-xs md:text-base">.</span>
                <span className="text-[#61afef] text-xs md:text-base">log</span>
                <span className="text-gray-200 text-xs md:text-base">(</span>
                <input type="text" value={codeText} onChange={(e) => setCodeText(e.target.value)} className="bg-transparent text-[#98c379] focus:outline-none focus:ring-1 focus:ring-[#3a4451] max-w-[300px] overflow-hidden text-ellipsis text-xs md:text-base" style={{width: `${codeText.length}ch`}} />
                <span className="text-gray-200 text-xs md:text-base">);</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <motion.div initial={{opacity: 0}} animate={{opacity: 0.15}} transition={{delay: 0.5}} className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 blur-3xl" />
        </div>
      </div>

      {/* About Section */}
      <motion.section className="max-w-lg mx-auto mb-24" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} viewport={{once: true}}>
        <motion.h2 className="text-lg md:text-xl font-bold mb-6 text-gray-100" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} viewport={{once: true}}>
          About
        </motion.h2>
        <motion.div className="border border-[#2a3441] bg-[#1e2738] p-6 md:p-8 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)]" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.4}} viewport={{once: true}}>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">{originalAbout}</p>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors"
                initial={{opacity: 0}}
                whileInView={{
                  opacity: 1,
                  transition: {
                    delay: 0.1 * index,
                  },
                }}
                viewport={{once: true}}
              >
                <span className="w-4 h-4">{link.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="max-w-lg mx-auto mb-24" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} viewport={{once: true}}>
        <motion.h2 className="text-lg md:text-xl font-bold mb-6 text-gray-100" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} viewport={{once: true}}>
          Experience
        </motion.h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <motion.div
                key={exp.company}
                className="p-6 md:p-8 border border-[#2a3441] rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] bg-[#1e2738]"
                initial={{opacity: 0, y: 20}}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {delay: index * 0.1},
                }}
                viewport={{once: true}}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <h3 className="text-lg font-bold mb-1 text-gray-100">{exp.company}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  {exp.position} • {exp.period}
                </p>
                <p className="text-gray-300 text-sm md:text-base mb-4">{exp.description}</p>
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{height: 0, opacity: 0}}
                      animate={{height: "auto", opacity: 1}}
                      exit={{height: 0, opacity: 0}}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill) => (
                          <motion.span key={skill} initial={{scale: 0.8, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 0.8, opacity: 0}} transition={{duration: 0.2}} className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section className="max-w-lg mx-auto" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} viewport={{once: true}}>
        <motion.h2 className="text-lg md:text-xl font-bold mb-6 text-gray-100" initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} viewport={{once: true}}>
          Projects
        </motion.h2>
        <div className="space-y-4">
          {projects.map((project, index) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-[#2a3441] rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] bg-[#1e2738]"
                initial={{opacity: 0, y: 50}}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2,
                  },
                }}
                viewport={{once: true, margin: "-100px"}}
                whileHover={{y: -5}}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <motion.div className="w-full h-full" whileHover={{scale: 1.05}} transition={{duration: 0.4}}>
                    <Image src={project.image} alt={`${project.name} preview`} fill className="object-cover transition-transform duration-300" sizes="(max-width: 768px) 100vw, 42rem" />
                  </motion.div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-lg font-bold mb-1 text-gray-100">{project.name}</h3>
                  <p className="text-gray-300 text-sm md:text-base mb-4">{project.description}</p>
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.stack.map((tech) => (
                            <motion.span key={tech} initial={{scale: 0.8, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 0.8, opacity: 0}} transition={{duration: 0.2}} className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 transition-colors">
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.section>
    </motion.main>
  );
}
