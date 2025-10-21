import { motion } from "motion/react";
import { Linkedin } from "lucide-react";

export function TeamMemberCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{
        y: -15,
        boxShadow: "0 25px 50px rgba(0, 255, 255, 0.3)",
      }}
      className="bg-[#0B1220]/80 backdrop-blur-xl p-8 rounded-2xl border border-[#00FFFF]/20 hover:border-[#A3FF00]/50 transition-all duration-500 text-center group relative overflow-hidden"
    >
      {/* Neon Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/5 via-[#A3FF00]/5 to-[#A020F0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        initial={false}
      />

      <div className="relative z-10">
        <div className="relative mb-8">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-[#00FFFF]/30 group-hover:border-[#A3FF00]/50 transition-colors duration-500"
            whileHover={{ scale: 1.1 }}
          />
          <motion.div
            className="absolute inset-0 w-28 h-28 rounded-full mx-auto bg-gradient-to-tr from-[#00FFFF]/20 to-[#A3FF00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>
        </div>

        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00FFFF] transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-[#A3FF00] mb-4 font-semibold text-lg">
          {member.role}
        </p>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          {member.skills}
        </p>

        <motion.a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#00FFFF]/20 to-[#A3FF00]/20 hover:from-[#00FFFF] hover:to-[#A3FF00] rounded-full transition-all duration-300 border border-[#00FFFF]/30 hover:border-transparent group"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
        >
          <Linkedin
            size={24}
            className="text-[#00FFFF] group-hover:text-[#0B1220] transition-colors duration-300"
          />
        </motion.a>
      </div>
    </motion.div>
  );
}