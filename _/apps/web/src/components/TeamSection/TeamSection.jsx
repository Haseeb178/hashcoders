import { motion } from "motion/react";
import { TeamMemberCard } from "./TeamMemberCard";
import { team } from "./teamData";

export function TeamSection() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-[#00FFFF] via-[#A3FF00] to-[#A020F0] bg-clip-text text-transparent px-4"
            style={{ lineHeight: "1.3", paddingBottom: "16px" }}
          >
            The Talented Minds Behind Our Software Solutions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}