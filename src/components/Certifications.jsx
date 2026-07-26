import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaAward,
} from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

import { certifications } from "../data/certifications";

function Certifications() {
  return (
    <section
      id="certifications"
      className="py-32"
    >
      <Container>
        <SectionTitle
          eyebrow="CERTIFICATIONS"
          title="Committed to continuous learning and professional growth."
          description="Expanding my knowledge through industry-recognized certifications, hands-on practice, and continuous exploration of modern technologies."
        />

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-slate-900/40
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-500/40
                hover:shadow-[0_20px_60px_rgba(59,130,246,.15)]
              "
            >
              {/* Header */}

              <div className="flex items-start justify-between gap-5">

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
                    bg-blue-500/10
                    text-xl
                    text-blue-400
                  "
                >
                  <FaAward />
                </div>

                <div
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-300
                  "
                >
                  {cert.year}
                </div>

              </div>

              {/* Title */}

              <h3
                className="
                  mt-8
                  text-2xl
                  font-bold
                  leading-snug
                "
              >
                {cert.title}
              </h3>

              {/* Issuer */}

              <p
                className="
                  mt-4
                  text-lg
                  text-blue-400
                  font-medium
                "
              >
                {cert.issuer}
              </p>

              {/* Credential */}

              {cert.credential && (
                <div className="mt-10">
                  <Button
                    href={cert.credential}
                    target="_blank"
                    variant="secondary"
                  >
                    View Credential
                    <FaExternalLinkAlt />
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Certifications;