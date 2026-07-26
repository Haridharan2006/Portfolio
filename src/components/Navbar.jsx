import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import Container from "../ui/Container";
import Button from "../ui/Button";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { label: "Projects", to: "/#projects", id: "projects" },
    { label: "About", to: "/#about", id: "about" },
    { label: "Skills", to: "/#skills", id: "skills" },
    { label: "Experience", to: "/#experience", id: "experience" },
    { label: "Certificates", to: "/#certifications", id: "certifications" },
    { label: "Contact", to: "/#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "home",
        "projects",
        "about",
        "skills",
        "experience",
        "certifications",
        "contact",
      ];

      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <Container>
          <div
            className={`
              mt-5
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-white/10
              bg-slate-900/70
              backdrop-blur-xl
              transition-all
              duration-300
              ${
                scrolled
                  ? "px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,.35)]"
                  : "px-7 py-5"
              }
            `}
          >
            <HashLink
              smooth
              to="/#home"
              className="group"
            >
              <h1 className="text-2xl font-black tracking-tight">
                <span className="gradient-text group-hover:opacity-80 transition">
                  HBS
                </span>
              </h1>
            </HashLink>

            <nav className="hidden lg:flex items-center gap-2">
              {links.map((link) => (
                <HashLink
                  key={link.label}
                  smooth
                  to={link.to}
                  className={`
                    relative
                    rounded-xl
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      activeSection === link.id
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }
                  `}
                >
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeLink"
                      className="absolute inset-0 rounded-xl bg-white/10"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {link.label}
                  </span>
                </HashLink>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button
                href="/resume.pdf"
                target="_blank"
              >
                Resume
              </Button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                rounded-xl
                p-2
                text-3xl
                text-white
                transition
                hover:bg-white/10
                lg:hidden
              "
            >
              {menuOpen ? (
                <HiOutlineX />
              ) : (
                <HiOutlineMenuAlt3 />
              )}
            </button>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              left-4
              right-4
              top-24
              z-40
              rounded-2xl
              border
              border-white/10
              bg-slate-900/95
              backdrop-blur-xl
              lg:hidden
            "
          >
            <div className="flex flex-col gap-2 p-6">
              {links.map((link) => (
                <HashLink
                  key={link.label}
                  smooth
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    text-slate-300
                    transition
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  {link.label}
                </HashLink>
              ))}

              <div className="mt-3">
                <Button
                  href="/resume.pdf"
                  target="_blank"
                  className="w-full justify-center"
                >
                  Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;