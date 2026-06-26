import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills">
      <Container>

        <SectionTitle
          eyebrow="Skills"
          title="Technologies I work with."
          description="A combination of programming languages, frameworks, databases and AI technologies that I use to build modern applications."
        />

        <div className="space-y-14">

          {skills.map((group, index) => (

            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="border-b border-white/10 pb-10"
            >

              <div className="grid lg:grid-cols-[220px_1fr] gap-8">

                {/* Category */}

                <div>

                  <h3
                    className="
                    uppercase
                    tracking-[0.25em]
                    text-sm
                    font-semibold
                    text-sky-400
                    "
                  >

                    {group.category}

                  </h3>

                </div>

                {/* Skills */}

                <div className="flex flex-wrap gap-4">

                  {group.items.map((skill) => (

                    <span
                      key={skill}
                      className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-white/10
                        text-slate-300
                        transition-all
                        duration-300
                        hover:border-sky-400
                        hover:text-white
                      "
                    >

                      {skill}

                    </span>

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