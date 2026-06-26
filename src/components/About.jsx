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
    <section id="about">
      <Container>

        <SectionTitle
          eyebrow="About Me"
          title="Building software that solves real-world problems."
          description="I'm passionate about Artificial Intelligence, Machine Learning and Backend Engineering."
        />

        <div className="grid lg:grid-cols-[1.4fr_.6fr] gap-12 lg:gap-24 gap-24 items-start">

          {/* Left */}

          <motion.div
            initial={{ opacity:0,y:40 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
          >

            <p className="text-2xl leading-10">

              I'm a Computer Science student who enjoys
              designing intelligent software using AI,
              Machine Learning and scalable backend
              technologies.

            </p>

            <p className="mt-8 text-slate-400 leading-9">

              During my internship at Bharat Electronics Limited,
              I developed AI-powered applications including an
              AI Medical Prescription Generator and an ICD
              Query Chatbot while working with modern backend
              technologies.

            </p>

            <p className="mt-8 text-slate-400 leading-9">

              I enjoy turning ideas into products that people
              can actually use. My goal is to become a Software
              Engineer specializing in Artificial Intelligence
              and Distributed Systems.

            </p>

          </motion.div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-5">

            {stats.map((item)=>(

              <motion.div
                key={item.label}
                initial={{ opacity:0,y:30 }}
                whileInView={{ opacity:1,y:0 }}
                viewport={{ once:true }}
                transition={{ duration:.6 }}
                className="
                card
                p-8
                hover:-translate-y-1
                transition
                "
              >

                <h3 className="text-5xl font-bold gradient-text">

                  {item.number}

                </h3>

                <p className="mt-3 text-slate-400">

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