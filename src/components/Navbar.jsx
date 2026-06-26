import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import Container from "../ui/Container";
import Button from "../ui/Button";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Projects", to: "/#projects" },
    { label: "About", to: "/#about" },
    { label: "Skills", to: "/#skills" },
    { label: "Experience", to: "/#experience" },
    { label: "Certificates", to: "/#certifications" },
    { label: "Contact", to: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "py-6"
      }`}
    >
      <Container className="flex items-center justify-between">

        <HashLink smooth to="/#home">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="gradient-text">HBS</span>
          </h1>
        </HashLink>

        <nav className="hidden md:flex items-center gap-10">

          {links.map((link) => (
            <HashLink
              key={link.label}
              smooth
              to={link.to}
              className="text-slate-300 hover:text-white transition"
            >
              {link.label}
            </HashLink>
          ))}

        </nav>

        <div className="hidden md:block">
          <Button href="/resume.pdf" target="_blank">
            Resume
          </Button>
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

      </Container>

      {menuOpen && (
        <div className="glass mt-4 mx-4 rounded-2xl md:hidden">

          <div className="flex flex-col p-6 gap-6">

            {links.map((link) => (
              <HashLink
                key={link.label}
                smooth
                to={link.to}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </HashLink>
            ))}

            <Button
    href="/resume.pdf"
    target="_blank"
    className="px-7 py-3"
>
    Resume
</Button>

          </div>

        </div>
      )}
    </header>
  );
}

export default Navbar;