import { motion } from "motion/react";
import { Phone, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]/50 relative z-10"
    >
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#00FFFF] to-[#A3FF00] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-[#A020F0] via-[#00FFFF] to-[#A3FF00] bg-clip-text text-transparent px-4"
            style={{ lineHeight: "1.3", paddingBottom: "12px" }}
          >
            Let's Build Something Great
          </h2>
          <motion.p
            className="text-2xl text-gray-300 mb-12 leading-relaxed"
            animate={{
              textShadow: [
                "0 0 10px rgba(0, 255, 255, 0.3)",
                "0 0 20px rgba(163, 255, 0, 0.3)",
                "0 0 10px rgba(160, 32, 240, 0.3)",
                "0 0 10px rgba(0, 255, 255, 0.3)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            We design customized software solutions crafted to meet your
            business needs.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-6 bg-[#0B1220]/80 backdrop-blur-xl p-8 rounded-2xl border border-[#00FFFF]/20 hover:border-[#A3FF00]/50 transition-all duration-500"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-[#00FFFF] to-[#A3FF00] rounded-2xl flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Phone size={28} className="text-[#0B1220]" />
              </motion.div>
              <div className="text-left">
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Phone
                </p>
                <p className="text-2xl font-bold text-[#00FFFF]">
                  0340-0975534
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-6 bg-[#0B1220]/80 backdrop-blur-xl p-8 rounded-2xl border border-[#A3FF00]/20 hover:border-[#A020F0]/50 transition-all duration-500"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-[#A3FF00] to-[#A020F0] rounded-2xl flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Mail size={28} className="text-[#0B1220]" />
              </motion.div>
              <div className="text-left">
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Email
                </p>
                <p className="text-2xl font-bold text-[#A3FF00]">
                  hash.devolper@gmail.com
                </p>
              </div>
            </motion.div>
          </div>

          <motion.a
            href="mailto:hash.devolper@gmail.com"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 50px rgba(0, 255, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-[#00FFFF] via-[#A3FF00] to-[#A020F0] text-[#0B1220] px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#00FFFF]/30"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}