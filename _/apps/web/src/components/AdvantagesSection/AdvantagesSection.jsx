import { motion } from "motion/react";
import { Laptop, TrendingUp } from "lucide-react";

export function AdvantagesSection() {
  return (
    <section
      id="advantages"
      className="py-24 px-4 sm:px-6 lg:px-8 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-[#A3FF00] to-[#A020F0] bg-clip-text text-transparent px-4"
            style={{ lineHeight: "1.3", paddingBottom: "12px" }}
          >
            Discover the Key Advantages
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <motion.div
              className="space-y-6"
              whileInView={{ x: [0, 10, 0] }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-2 w-24 bg-gradient-to-r from-[#00FFFF] to-[#A3FF00] rounded-full"></div>
              <h3 className="text-3xl font-bold text-[#00FFFF]">
                3+ Years of Excellence
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                With over three years of cross-industry experience, we've
                successfully delivered software solutions across various
                sectors including healthcare, e-commerce, education, and
                enterprise applications. Our diverse portfolio demonstrates
                our ability to adapt and excel in any technological
                environment.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              whileInView={{ x: [0, 10, 0] }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-2 w-24 bg-gradient-to-r from-[#A3FF00] to-[#A020F0] rounded-full"></div>
              <h3 className="text-3xl font-bold text-[#A3FF00]">
                Innovation-Driven Approach
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                We stay at the forefront of technology trends, constantly
                learning and implementing the latest tools and methodologies
                to ensure your projects benefit from cutting-edge solutions.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative space-y-8"
          >
            {/* Floating Laptop Icon */}
            <motion.div
              className="absolute -top-8 -right-8 z-20"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="bg-gradient-to-r from-[#00FFFF] to-[#A3FF00] p-4 rounded-full">
                <Laptop size={32} className="text-[#0B1220]" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
                alt="Development workspace"
                className="rounded-2xl shadow-2xl border border-[#00FFFF]/20"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
                alt="Analytics dashboard"
                className="rounded-2xl shadow-2xl border border-[#A3FF00]/20"
              />
            </motion.div>

            {/* Floating Chart Icon */}
            <motion.div
              className="absolute -bottom-8 -left-8 z-20"
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="bg-gradient-to-r from-[#A3FF00] to-[#A020F0] p-4 rounded-full">
                <TrendingUp size={32} className="text-[#0B1220]" />
              </div>
            </motion.div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-[#A020F0]/20 to-[#00FFFF]/20 rounded-2xl blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}