import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import TechChip from "../ui/TechChip";

import { skills } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <Container>
        <SectionTitle
          eyebrow="TECHNICAL EXPERTISE"
          title="Technologies I use to build modern applications."
          description="A growing toolkit spanning Artificial Intelligence, Backend Engineering, Databases, Cloud Technologies, and Full Stack Development."
        />

        <div className="mt-24 space-y-10">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-slate-900/40
                backdrop-blur-xl
                p-8
                transition-all
                duration-300
                hover:border-teal-500/20/40
                hover:shadow-[0_20px_60px_rgba(20,184,166,.15)]
              "
            >
              <div
                className="
                  grid
                  gap-8
                  lg:grid-cols-[240px_1fr]
                  lg:items-start
                "
              >
                {/* CATEGORY */}

                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.35em]
                      text-teal-400
                      font-semibold
                    "
                  >
                    CATEGORY
                  </p>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    {group.category}
                  </h3>
                </div>

                {/* SKILLS */}

                <div className="flex flex-wrap gap-4">
                  {group.items.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                    >
                      <TechChip>
                        {skill}
                      </TechChip>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;