import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-[#00FFFF] to-[#A3FF00] bg-clip-text text-transparent px-4"
            style={{ lineHeight: "1.3", paddingBottom: "8px" }}
          >
            Meet the Visionaries
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              At Hash Coders, we are a team of passionate developers and
              innovators dedicated to driving technological advancement and
              setting new standards in software development. Our mission is to
              transform ideas into powerful digital solutions that empower
              businesses to thrive in the modern world.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              With our combined expertise across multiple technologies and
              platforms, we create software that not only meets today's
              requirements but anticipates tomorrow's challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
                alt="Developer at work"
                className="rounded-2xl shadow-2xl border border-[#00FFFF]/20"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-[#00FFFF]/20 to-[#A3FF00]/20 rounded-2xl blur-2xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}