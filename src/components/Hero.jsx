import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import Button from "../ui/Button";
import Container from "../ui/Container";
import { HashLink } from "react-router-hash-link";

import { socialLinks } from "../data/socialLinks";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >

            <p className="uppercase tracking-[0.35em] text-blue-400 text-sm font-semibold">

              AI • MACHINE LEARNING • BACKEND

            </p>

            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">

              Haridharan

              <br />

              <span className="gradient-text">
                B S
              </span>

            </h1>

            <p className="mt-8 text-lg sm:text-xl text-slate-400 leading-8 sm:leading-9 max-w-xl">

              Computer Science student building AI-powered
              software, intelligent applications and scalable
              backend systems.

            </p>

            <div className="flex flex-wrap gap-8 mt-20">
              <HashLink smooth to="/#projects">
                <Button>
                  View Projects
                </Button>
              </HashLink>
              
              <Button
                href="/resume.pdf"
                target="_blank"
                variant="secondary"
              >
                Download Resume
              </Button>
            </div>

            <div className="flex gap-10 mt-12 text-2xl">

              <a
                href={socialLinks.github}
                target="_blank"
              >
                <FaGithub />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=haridharanbs2006@gmail.com"
              >
                <FaEnvelope />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity:0,x:40 }}
            animate={{ opacity:1,x:0 }}
            transition={{ duration:.8 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div
                className="
                absolute
                -inset-6
                rounded-full
                bg-blue-500/20
                blur-3xl
                "
              />

              <img
                src="/profile.png"
                alt="Haridharan"
                className="
                  relative
                  w-[260px]
                  h-[260px]
                  sm:w-[320px]
                  sm:h-[320px]
                  lg:w-[420px]
                  lg:h-[420px]
                  rounded-full
                  object-cover
                  border
                  border-white/10
                  shadow-2xl
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