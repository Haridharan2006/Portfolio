import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const stats = [
  {
    number: "4+",
    label: "Projects Built",
  },
  {
    number: "1",
    label: "Industry Internship",
  },
  {
    number: "10+",
    label: "Technologies",
  },
  {
    number: "2028",
    label: "Graduation",
  },
];

function About() {
  return (
    <section id="about" className="py-28">
      <Container>
        <SectionTitle
          eyebrow="About Me"
          title="Building software that solves real-world problems."
          description="I'm passionate about Artificial Intelligence, Machine Learning and Backend Engineering."
        />

        <div className="mt-20 grid lg:grid-cols-[1.45fr_0.55fr] gap-20 items-start">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-2xl leading-relaxed text-white font-medium">
              I'm a Computer Science student who enjoys designing
              intelligent software using AI, Machine Learning and
              scalable backend technologies.
            </p>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              During my internship at Bharat Electronics Limited,
              I developed AI-powered applications including an
              AI Medical Prescription Generator and an ICD Query
              Chatbot while working with modern backend technologies.
            </p>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              I enjoy turning ideas into products that people can
              actually use. My goal is to become a Software Engineer
              specializing in Artificial Intelligence and Distributed
              Systems.
            </p>
          </motion.div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">

            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  h-40
                  rounded-2xl
                  border
                  border-slate-700
                  bg-slate-900/60
                  backdrop-blur-md
                  flex
                  flex-col
                  justify-center
                  px-7
                  hover:border-blue-500/70
                  hover:-translate-y-2
                  hover:shadow-xl
                  hover:shadow-blue-500/10
                  transition-all
                  duration-300
                "
              >
                <h3 className="text-5xl font-extrabold gradient-text leading-none">
                  {item.number}
                </h3>

                <p className="mt-4 text-slate-300 text-base font-medium leading-snug">
                  {item.label}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;