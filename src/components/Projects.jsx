import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects">
      <Container>
        <SectionTitle
          eyebrow="Featured Work"
          title="Projects That Define My Journey"
          description="These projects showcase my experience in AI, Machine Learning, Backend Engineering and Full Stack Development."
        />

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Image */}

              <div className={index % 2 ? "lg:order-2" : ""}>
                <div className="card
p-10
border
border-slate-700
hover:border-blue-500/40
transition-all
duration-300 overflow-hidden hover:shadow-2xl transition duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full hover:scale-105 transition duration-700"
                  />
                </div>
              </div>

              {/* Content */}

              <div>
                <p className="uppercase tracking-[0.3em] text-blue-400 text-sm font-semibold">
                  Project 0{project.id}
                </p>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 leading-tight">
                  {project.title}
                </h3>

                <p className="mt-8 text-slate-400 leading-8 text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3
py-1
rounded-lg
bg-slate-800
text-slate-300
text-sm
border
border-slate-700
hover:border-blue-500
transition bg-slate-800 border border-white/10 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-8 mt-10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 hover:text-blue-400 transition"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 hover:text-blue-400 transition"
                    >
                      Live Demo
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;