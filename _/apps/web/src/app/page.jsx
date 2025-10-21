"use client";

import { motion } from "motion/react";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { Header } from "@/components/Header/Header";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { ServicesSection } from "@/components/ServicesSection/ServicesSection";
import { AdvantagesSection } from "@/components/AdvantagesSection/AdvantagesSection";
import { ProjectsSection } from "@/components/ProjectsSection/ProjectsSection";
import { TeamSection } from "@/components/TeamSection/TeamSection";
import { ContactSection } from "@/components/ContactSection/ContactSection";
import { Footer } from "@/components/Footer/Footer";
import { GlobalStyles } from "@/components/GlobalStyles/GlobalStyles";

export default function HashCodersWebsite() {
  const { activeSection, isScrolled, scrollToSection } = useScrollNavigation();

  return (
    <div className="bg-[#0B1220] text-white font-poppins overflow-x-hidden relative">
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220] via-[#0D0D0D] to-[#0B1220]" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(163, 255, 0, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(160, 32, 240, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#00FFFF] to-[#A3FF00] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Header
        activeSection={activeSection}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
      />

      <HeroSection onScrollToSection={scrollToSection} />

      <AboutSection />

      <ServicesSection />

      <AdvantagesSection />

      <ProjectsSection />

      <TeamSection />

      <ContactSection />

      <Footer />

      <GlobalStyles />
    </div>
  );
}