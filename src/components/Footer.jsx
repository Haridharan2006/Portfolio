import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

import Container from "../ui/Container";
import { socialLinks } from "../data/socialLinks";

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">

      <Container>

        <div className="py-16">

          {/* Top */}

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            <div>

              <h2 className="text-3xl font-bold">

                &lt;<span className="text-sky-400">HBS</span>/&gt;

              </h2>

              <p className="mt-4 max-w-md text-slate-400 leading-7">

                Passionate about Artificial Intelligence,
                Machine Learning and Full Stack Development.
                Always excited to build software that solves
                real-world problems.

              </p>

            </div>

            {/* Socials */}

            <div className="flex gap-8 text-2xl">

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=haridharanbs2006@gmail.com"
                className="hover:text-sky-400 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="text-slate-500 text-center">

              © {new Date().getFullYear()} Haridharan B S.
              All Rights Reserved.

            </p>

            <p className="flex items-center gap-2 text-slate-500">

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