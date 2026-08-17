import { motion } from "framer-motion";
import { FaCheckCircle, FaBriefcase } from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import TechChip from "../ui/TechChip";

import { experience } from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <Container>
        <SectionTitle
          eyebrow="PROFESSIONAL EXPERIENCE"
          title="Applying software engineering to solve real-world challenges."
          description="Hands-on industry experience building AI-powered applications, backend services, and production-ready software solutions."
        />

        <div className="mt-24">
          {experience.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-slate-900/40
                backdrop-blur-xl
                p-10
                transition-all
                duration-300
                hover:border-teal-500/20/40
                hover:shadow-[0_20px_60px_rgba(20,184,166,.15)]
              "
            >
              {/* Header */}

              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

                <div className="flex items-start gap-5">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-teal-500/10
                      text-teal-400
                      text-xl
                    "
                  >
                    <FaBriefcase />
                  </div>

                  <div>

                    <h3 className="text-3xl font-bold">
                      {job.role}
                    </h3>

                    <p className="mt-2 text-lg font-medium text-teal-400">
                      {job.company}
                    </p>

                    <p className="mt-2 text-slate-500">
                      {job.location}
                    </p>

                  </div>

                </div>

                <div
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-2
                    text-sm
                    font-medium
                    text-slate-300
                  "
                >
                  {job.duration}
                </div>

              </div>

              {/* Description */}

              <p
                className="
                  mt-10
                  max-w-4xl
                  text-lg
                  leading-9
                  text-slate-400
                "
              >
                {job.description}
              </p>

              {/* Achievements */}

              <div className="mt-12">

                <h4 className="text-xl font-semibold">
                  Key Contributions
                </h4>

                <div className="mt-6 space-y-5">

                  {job.achievements.map((item) => (

                    <motion.div
                      key={item}
                      whileHover={{ x: 5 }}
                      className="
                        flex
                        items-start
                        gap-4
                      "
                    >
                      <FaCheckCircle
                        className="
                          mt-1
                          shrink-0
                          text-teal-400
                        "
                      />

                      <p
                        className="
                          leading-8
                          text-slate-400
                        "
                      >
                        {item}
                      </p>

                    </motion.div>

                  ))}

                </div>

              </div>

              {/* Technologies */}

              <div
                className="
                  mt-12
                  flex
                  flex-wrap
                  gap-4
                "
              >
                {job.technologies.map((tech) => (

                  <TechChip key={tech}>
                    {tech}
                  </TechChip>

                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Experience;