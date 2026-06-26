import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { experience } from "../data/experience";

function Experience() {
  return (
    <section id="experience">
      <Container>

        <SectionTitle
          eyebrow="Experience"
          title="Professional Experience"
          description="Industry experience where I applied software engineering and AI concepts to solve real-world problems."
        />

        <div className="space-y-12">

          {experience.map((job) => (

            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-sky-400
                transition
              "
            >

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">

                <div>

                  <h3 className="text-2xl sm:text-3xl font-bold">

                    {job.role}

                  </h3>

                  <p className="mt-2 text-sky-400 text-lg">

                    {job.company}

                  </p>

                  <p className="mt-2 text-slate-500">

                    {job.location}

                  </p>

                </div>

                <div className="text-slate-400">

                  {job.duration}

                </div>

              </div>

              <p className="mt-8 leading-8 text-slate-400">

                {job.description}

              </p>

              <div className="mt-8">

                <h4 className="font-semibold text-lg mb-4">

                  Key Contributions

                </h4>

                <ul className="space-y-4">

                  {job.achievements.map((item) => (

                    <li
                      key={item}
                      className="text-slate-400 leading-7"
                    >
                      • {item}
                    </li>

                  ))}

                </ul>

              </div>

              <div className="flex flex-wrap gap-3 mt-10">

                {job.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-white/10
                      text-sm
                      text-slate-300
                    "
                  >

                    {tech}

                  </span>

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