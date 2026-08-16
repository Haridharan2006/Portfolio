import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import Button from "../ui/Button";
import Badge from "../ui/Badge";
import TechChip from "../ui/TechChip";
import FloatingBadge from "../ui/FloatingBadge";
import Container from "../ui/Container";
import { HashLink } from "react-router-hash-link";

import { socialLinks } from "../data/socialLinks";

const technologies = [
  "Python",
  "React",
  "Node.js",
  "Docker",
  "TensorFlow",
  "PyTorch",
  "PostgreSQL",
];

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 lg:pt-28 pb-16"
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            top-0
            left-1/2
            h-[520px]
            w-[520px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -bottom-32
            right-0
            h-[320px]
            w-[320px]
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />

      </div>

      <Container>

        <div
          className="
            relative
            z-10
            grid
            lg:grid-cols-2
            gap-8
            xl:gap-12
            items-center
          "
        >

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="max-w-2xl"
          >

            <Badge>

              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

              Available for AI & Software Internships

            </Badge>

            <motion.p
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:.2 }}
              className="
                mt-8
                text-lg
                font-medium
                text-slate-300
              "
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity:0,y:20 }}
              animate={{ opacity:1,y:0 }}
              transition={{ delay:.3 }}
              className="
                mt-3
                text-5xl
                lg:text-6xl
                xl:text-7xl
                font-black
                tracking-tight
                leading-[0.95]
              "
            >
              Haridharan{" "}
              <span className="gradient-text">
                B S
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity:0,y:25 }}
              animate={{ opacity:1,y:0 }}
              transition={{ delay:.45 }}
              className="
                mt-10
                text-3xl
                lg:text-[2.6rem]
                font-bold
                leading-tight
                text-white
              "
            >
              Building{" "}
              <span className="gradient-text">
                AI Applications
              </span>,
              <br />

              Machine Learning Solutions
              <br />

              & Scalable Full Stack Systems.
            </motion.h2>

            <motion.p
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:.6 }}
              className="
                mt-8
                max-w-xl
                text-lg
                leading-9
                text-slate-400
              "
            >
              Computer Science undergraduate passionate about
              Artificial Intelligence, Machine Learning,
              Full Stack Engineering and building
              production-ready software that solves
              real-world problems.
            </motion.p>
                        {/* CTA Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mt-14 flex flex-wrap gap-4"
            >
              <HashLink smooth to="/#projects">
                <Button className="min-w-[210px]">
                  <FaArrowRight />
                  View Projects
                </Button>
              </HashLink>

              <Button
                href="/resume.pdf"
                target="_blank"
                variant="secondary"
                className="min-w-[210px]"
              >
                <FaDownload />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex items-center gap-5"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  group
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-900/60
                  backdrop-blur-md
                  text-slate-300
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:bg-blue-500/10
                  hover:text-blue-400
                  hover:shadow-lg
                  hover:shadow-blue-500/20
                "
              >
                <FaGithub size={20} />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  group
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-900/60
                  backdrop-blur-md
                  text-slate-300
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:bg-blue-500/10
                  hover:text-blue-400
                  hover:shadow-lg
                  hover:shadow-blue-500/20
                "
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=haridharanbs2006@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                className="
                  group
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-900/60
                  backdrop-blur-md
                  text-slate-300
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:bg-blue-500/10
                  hover:text-blue-400
                  hover:shadow-lg
                  hover:shadow-blue-500/20
                "
              >
                <FaEnvelope size={18} />
              </a>
            </motion.div>

            {/* Technologies */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-14"
            >
              <p
                className="
                  mb-6
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-slate-500
                "
              >
                Technologies I Work With
              </p>

              <div className="flex flex-wrap gap-4">
                {technologies.map((tech) => (
                  <TechChip key={tech}>
                    {tech}
                  </TechChip>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}
                    <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative flex items-center justify-center">

              {/* Background Glow */}

              <div
                className="
                  absolute
                  h-[420px]
                  w-[420px]
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500/20
                  to-cyan-500/10
                  blur-[90px]
                "
              />

              {/* Floating Badges */}

              <FloatingBadge className="-top-6 left-0">
                🤖 AI
              </FloatingBadge>

              <FloatingBadge className="top-10 -right-12">
                ⚛ React
              </FloatingBadge>

              <FloatingBadge className="bottom-16 -left-12">
                🐳 Docker
              </FloatingBadge>

              <FloatingBadge className="-bottom-5 right-4">
                🧠 ML
              </FloatingBadge>

              {/* Outer Ring */}

              <div
                className="
                  absolute
                  h-[430px]
                  w-[430px]
                  rounded-full
                  border
                  border-blue-500/20
                "
              />

              {/* Inner Ring */}

              <div
                className="
                  absolute
                  h-[390px]
                  w-[390px]
                  rounded-full
                  border
                  border-white/5
                "
              />

              {/* Profile Image */}

              <motion.img
                src="/profile.png"
                alt="Haridharan B S"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  z-10
                  h-[280px]
                  w-[280px]
                  rounded-full
                  object-cover
                  border-4
                  border-white/10
                  shadow-[0_25px_80px_rgba(59,130,246,0.25)]
                  sm:h-[340px]
                  sm:w-[340px]
                  lg:h-[390px]
                  lg:w-[390px]
                  xl:h-[420px]
                  xl:w-[420px]
                "
              />

            </div>
          </motion.div>

        </div>

      </Container>

    </section>
  );
}

export default Hero;