import { motion } from "motion/react";

export function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0, 255, 255, 0.2)",
      }}
      className="bg-[#0B1220]/80 backdrop-blur-xl p-8 rounded-2xl border border-[#00FFFF]/20 hover:border-[#A3FF00]/50 transition-all duration-500 group relative overflow-hidden"
    >
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#00FFFF]/5 to-[#A3FF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
      />

      <div className="relative z-10">
        <motion.div
          className="w-20 h-20 bg-gradient-to-br from-[#00FFFF] to-[#A3FF00] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <service.icon size={36} className="text-[#0B1220]" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00FFFF] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-lg">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}