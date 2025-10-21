import { motion } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";

export function HeroSection({ onScrollToSection }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Tech Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop"
          alt="Tech background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220]/80 via-[#0D0D0D]/60 to-[#0B1220]/80" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl sm:text-8xl lg:text-9xl font-bold mb-8"
          style={{ lineHeight: "1.1" }}
        >
          <motion.span
            className="bg-gradient-to-r from-[#00FFFF] via-[#A3FF00] to-[#A020F0] bg-clip-text text-transparent"
            animate={{
              filter: [
                "drop-shadow(0 0 20px rgba(0, 255, 255, 0.5))",
                "drop-shadow(0 0 40px rgba(163, 255, 0, 0.5))",
                "drop-shadow(0 0 20px rgba(160, 32, 240, 0.5))",
                "drop-shadow(0 0 20px rgba(0, 255, 255, 0.5))",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            HASH CODERS
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mb-12"
        >
          <motion.p
            className="text-2xl sm:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            style={{ lineHeight: "1.4" }}
            animate={{
              textShadow: [
                "0 0 10px rgba(0, 255, 255, 0.3)",
                "0 0 20px rgba(163, 255, 0, 0.3)",
                "0 0 10px rgba(0, 255, 255, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            We specialize in crafting tailored software solutions to meet the
            needs of your business.
          </motion.p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(0, 255, 255, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onScrollToSection("services")}
          className="bg-gradient-to-r from-[#00FFFF] to-[#A3FF00] text-[#0B1220] px-10 py-5 rounded-xl font-bold text-xl inline-flex items-center gap-3 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#00FFFF]/30"
        >
          Kickoff <ArrowRight size={24} />
        </motion.button>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="text-[#00FFFF] cursor-pointer p-3 rounded-full border border-[#00FFFF]/30 bg-[#00FFFF]/5 backdrop-blur-sm"
          onClick={() => onScrollToSection("about")}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
          }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}