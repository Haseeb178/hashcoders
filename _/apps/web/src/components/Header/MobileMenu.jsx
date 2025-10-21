import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

export function MobileMenu({ isOpen, onToggle, navItems, activeSection, onScrollToSection }) {
  return (
    <>
      {/* Enhanced Mobile Menu Button */}
      <motion.button
        className="md:hidden text-white p-2 rounded-lg bg-[#00FFFF]/10 border border-[#00FFFF]/20"
        onClick={onToggle}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Enhanced Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0B1220]/95 backdrop-blur-xl border-t border-[#00FFFF]/20 absolute top-full left-0 right-0"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onScrollToSection(item.id)}
                className={`block w-full text-left transition-all duration-300 py-3 px-4 rounded-lg ${
                  activeSection === item.id
                    ? "text-[#00FFFF] bg-[#00FFFF]/10"
                    : "text-gray-300 hover:text-[#A3FF00]"
                }`}
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}