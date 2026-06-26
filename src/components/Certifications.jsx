import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import { certifications } from "../data/certifications";

function Certifications() {
  return (
    <section id="certifications">
      <Container>

        <SectionTitle
          eyebrow="Certifications"
          title="Continuous Learning"
          description="I enjoy continuously learning new technologies and strengthening my knowledge through industry-recognized certifications."
        />

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((cert) => (

            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                rounded-3xl
                border
                border-white/10
                p-8
                hover:border-sky-400
                transition
              "
            >

              <h3 className="text-2xl font-semibold">

                {cert.title}

              </h3>

              <p className="mt-3 text-slate-400">

                {cert.issuer}

              </p>

              <p className="mt-2 text-slate-500">

                {cert.year}

              </p>

              {cert.credential && (

                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-8
                    text-sky-400
                    hover:text-sky-300
                  "
                >

                  View Credential

                  <FaExternalLinkAlt />

                </a>

              )}

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Certifications;