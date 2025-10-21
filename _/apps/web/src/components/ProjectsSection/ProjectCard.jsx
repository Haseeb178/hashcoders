import { motion } from "motion/react";
import { Github } from "lucide-react";

export function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="bg-[#0B1220]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-[#00FFFF]/20 hover:border-[#A3FF00]/50 transition-all duration-500 group relative"
    >
      {/* Glowing Border Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#00FFFF]/10 via-[#A3FF00]/10 to-[#A020F0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        initial={false}
      />

      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ filter: "brightness(1.2)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="p-8 relative z-10">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00FFFF] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300 text-lg">
          {project.description}
        </p>
        <div className="mb-6">
          <span className="text-[#A3FF00] font-semibold bg-[#A3FF00]/10 px-3 py-1 rounded-full border border-[#A3FF00]/20">
            {project.tech}
          </span>
        </div>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-[#00FFFF] hover:text-[#A3FF00] transition-colors duration-300 bg-[#00FFFF]/10 px-6 py-3 rounded-xl border border-[#00FFFF]/20 hover:border-[#A3FF00]/30"
          whileHover={{ scale: 1.05 }}
          animate={{
            boxShadow: [
              "0 0 0 rgba(0, 255, 255, 0)",
              "0 0 20px rgba(0, 255, 255, 0.3)",
              "0 0 0 rgba(0, 255, 255, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Github size={20} />
          View on GitHub
        </motion.a>
      </div>
    </motion.div>
  );
}