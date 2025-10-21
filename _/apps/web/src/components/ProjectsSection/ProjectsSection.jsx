import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projectsData";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]/50 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-[#A020F0] to-[#00FFFF] bg-clip-text text-transparent px-4"
            style={{ lineHeight: "1.3", paddingBottom: "12px" }}
          >
            Our Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}