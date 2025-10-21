import { useState } from "react";
import { motion } from "motion/react";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";

export function Header({ activeSection, isScrolled, scrollToSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
  ];

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0B1220]/90 backdrop-blur-xl border-b border-[#00FFFF]/20 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <motion.div
            className="font-bold text-2xl bg-gradient-to-r from-[#00FFFF] via-[#A3FF00] to-[#A020F0] bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            style={{ filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.3))" }}
          >
            HASH CODERS
          </motion.div>

          <Navigation
            navItems={navItems}
            activeSection={activeSection}
            onScrollToSection={handleScrollToSection}
          />

          <MobileMenu
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            navItems={navItems}
            activeSection={activeSection}
            onScrollToSection={handleScrollToSection}
          />
        </div>
      </div>
    </motion.header>
  );
}