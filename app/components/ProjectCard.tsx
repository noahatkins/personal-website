import React, {useState} from "react";
import {motion} from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  className?: string;
  index: number;
}

const ProjectCard = ({title, description, techStack, link, className = "", index}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`border-8 border-[#1a2234] p-6 md:p-8 ${className}`}
      initial={{opacity: 0}}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.1 * index,
        },
      }}
      viewport={{once: true}}
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base md:text-lg font-semibold text-gray-100">{title}</h3>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-gray-300 transition-colors">
              View Project →
            </a>
          )}
        </div>
        <p className="text-xs md:text-sm text-gray-300 mb-4">{description}</p>
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-2 overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96" : "max-h-8"}`}>
          {techStack.map((tech, i) => (
            <span key={tech} className={`text-xs px-2 py-1 border border-[#2a3441] ${i % 2 === 0 ? "bg-[#1a2234] text-gray-300" : "text-gray-400"}`}>
              {tech}
            </span>
          ))}
        </div>
        <button onClick={() => setIsExpanded(!isExpanded)} className="text-xs text-gray-400 hover:text-gray-300 mt-2 transition-colors">
          {isExpanded ? "Show less" : "Show more"}
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
