import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-28">
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I work with."
          description="A combination of programming languages, frameworks, databases and AI technologies that I use to build modern applications."
        />

        <div className="mt-20 space-y-12">

          {skills.map((group, index) => (

            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                border
                border-slate-800
                rounded-2xl
                bg-slate-900/30
                backdrop-blur-md
                p-7
                hover:border-blue-500/50
                transition-all
                duration-300
              "
            >

              <div className="grid lg:grid-cols-[220px_1fr] gap-8 items-start">

                {/* Category */}

                <div>

                  <h3
                    className="
                      uppercase
                      tracking-[0.30em]
                      text-sm
                      font-bold
                      text-blue-400
                    "
                  >
                    {group.category}
                  </h3>

                </div>

                {/* Skills */}

                <div className="flex flex-wrap gap-4">

                  {group.items.map((skill) => (

                    <motion.span
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      key={skill}
                      className="
                        px-5
                        py-2.5
                        rounded-xl
                        border
                        border-slate-700
                        bg-slate-800/60
                        text-slate-200
                        text-sm
                        font-medium
                        transition-all
                        duration-300
                        hover:border-blue-500
                        hover:bg-blue-500/10
                        hover:text-white
                        cursor-default
                      "
                    >
                      {skill}
                    </motion.span>

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