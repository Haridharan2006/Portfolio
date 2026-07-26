import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

import Container from "../ui/Container";
import { socialLinks } from "../data/socialLinks";

function Footer() {
  const socials = [
    {
      icon: <FaGithub />,
      href: socialLinks.github,
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: socialLinks.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=haridharanbs2006@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="mt-32 border-t border-white/10">

      <Container>

        <div className="py-20">

          <div className="grid gap-16 lg:grid-cols-[1fr_auto]">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <h2 className="text-4xl font-black tracking-tight">

                <span className="gradient-text">
                  HBS
                </span>

              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  leading-9
                  text-slate-400
                "
              >
                Computer Science undergraduate passionate about
                Artificial Intelligence, Machine Learning,
                Backend Engineering and scalable software systems.

                I enjoy building modern applications that solve
                real-world problems while continuously learning
                new technologies.
              </p>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="flex flex-col items-start lg:items-end"
            >

              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Connect
              </p>

              <div className="mt-6 flex gap-4">

                {socials.map((social) => (

                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      y: -4,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-slate-900/40
                      text-lg
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-blue-500
                      hover:bg-blue-500/10
                      hover:text-blue-400
                    "
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>

                ))}

              </div>

              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="
                  mt-10
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-3
                  text-sm
                  text-slate-300
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:text-white
                "
              >
                Back to Top

                <FaArrowUp />
              </button>

            </motion.div>

          </div>

          {/* Bottom */}

          <div
            className="
              mt-16
              flex
              flex-col
              gap-5
              border-t
              border-white/10
              pt-8
              text-sm
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <p className="text-slate-500">

              © {new Date().getFullYear()} Haridharan B S.
              All rights reserved.

            </p>

            <p
              className="
                flex
                items-center
                gap-2
                text-slate-500
              "
            >

              Built with

              <FaHeart className="text-red-500" />

              using React, Tailwind CSS &
              Framer Motion.

            </p>

          </div>

        </div>

      </Container>

    </footer>
  );
}

export default Footer;