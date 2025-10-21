import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#00FFFF]/20 bg-gradient-to-r from-[#0B1220] to-[#0D0D0D] relative z-10">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          className="text-gray-400 text-lg"
          whileInView={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          © 2025 Software Development Team | All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}