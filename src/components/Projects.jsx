import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import TechChip from "../ui/TechChip";
import ImageGallery from "./ImageGallery";

import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-28"
    >
      <Container>

        <SectionTitle
          eyebrow="FEATURED WORK"
          title="Projects That Define My Journey"
          description="A collection of projects showcasing my experience in Artificial Intelligence, Machine Learning, Backend Engineering and Full Stack Development."
        />

        <div className="mt-24 space-y-52">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              className="
                grid
                items-center
                gap-12
                lg:grid-cols-2
                lg:gap-20
              "
            >

              {/* IMAGE */}

              <div
                className={
                  index % 2 === 1
                    ? "lg:order-2"
                    : ""
                }
              >
                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: .3,
                  }}
                  className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-slate-900/40
                    backdrop-blur-xl
                    shadow-[0_20px_80px_rgba(59,130,246,.15)]
                  "
                >

                  <ImageGallery
                    images={project.images}
                    title={project.title}
                  />

                </motion.div>

              </div>

              {/* CONTENT */}

              <div
                className="
                  max-w-xl
                "
              >

                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[0.35em]
                    text-blue-400
                    font-semibold
                  "
                >
                  FEATURED PROJECT
                </p>

                <h3
                  className="
                    mt-5
                    text-4xl
                    lg:text-5xl
                    font-black
                    tracking-tight
                    leading-tight
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-8
                    text-lg
                    leading-9
                    text-slate-400
                  "
                >
                  {project.description}
                </p>

                {/* FEATURES */}

                <div className="mt-10 space-y-4">

                  {(project.features || []).map((feature) => (

                    <div
                      key={feature}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >

                      <FaCheckCircle
                        className="
                          mt-1
                          text-blue-400
                          shrink-0
                        "
                      />

                      <span
                        className="
                          text-slate-300
                          leading-7
                        "
                      >
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                {/* TECHNOLOGIES */}

                <div
                  className="
                    mt-12
                    flex
                    flex-wrap
                    gap-4
                  "
                >

                  {project.technologies.map((tech) => (

                    <TechChip
                      key={tech}
                    >
                      {tech}
                    </TechChip>

                  ))}

                </div>
                                {/* ACTION BUTTONS */}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="
                    mt-14
                    flex
                    flex-wrap
                    gap-4
                  "
                >

                  {project.github && (
                    <Button
                      href={project.github}
                      target="_blank"
                    >
                      <FaGithub />
                      View Source
                    </Button>
                  )}

                  {project.demo ? (
                    <Button
                      href={project.demo}
                      target="_blank"
                      variant="secondary"
                    >
                      Live Demo
                      <FaExternalLinkAlt />
                    </Button>
                  ) : (
                    <Button
                      variant="secondary"
                      disabled
                      className="
                        cursor-not-allowed
                        opacity-60
                      "
                    >
                      Demo Coming Soon
                    </Button>
                  )}

                </motion.div>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default Projects;