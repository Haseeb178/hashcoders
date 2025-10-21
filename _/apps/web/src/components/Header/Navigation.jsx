import { motion } from "motion/react";

export function Navigation({ navItems, activeSection, onScrollToSection }) {
  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => onScrollToSection(item.id)}
          className={`relative transition-all duration-300 py-2 px-4 rounded-lg ${
            activeSection === item.id
              ? "text-[#00FFFF] bg-[#00FFFF]/10"
              : "text-gray-300 hover:text-[#A3FF00]"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          {item.label}
          {activeSection === item.id && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00FFFF] to-[#A3FF00]"
              layoutId="activeIndicator"
            />
          )}
        </motion.button>
      ))}
    </nav>
  );
}