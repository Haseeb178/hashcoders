import { motion } from "motion/react";
import { ServiceCard } from "./ServiceCard";
import { services } from "./servicesData";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]/50 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-[#00FFFF] to-[#A020F0] bg-clip-text text-transparent px-4"
            style={{ lineHeight: "1.3", paddingBottom: "12px" }}
          >
            Our Comprehensive Range of Software Development
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}