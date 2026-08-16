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
    <section
      id="about"
      className="py-32"
    >
      <Container>
        <SectionTitle
          eyebrow="ABOUT ME"
          title="Passionate about building intelligent software that creates real-world impact."
          description="Combining Artificial Intelligence, Machine Learning and Full Stack Engineering to build scalable applications that solve meaningful problems."
        />

        <div
          className="
            mt-24
            grid
            items-center
            gap-20
            lg:grid-cols-[1.45fr_0.55fr]
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h3
              className="
                text-3xl
                font-bold
                leading-tight
                lg:text-4xl
              "
            >
              Creating modern software through{" "}
              <span className="gradient-text">
                AI, Machine Learning
              </span>{" "}
              and{" "}
              <span className="gradient-text">
                scalable full stack systems.
              </span>
            </h3>

            <p
              className="
                mt-8
                text-lg
                leading-9
                text-slate-400
              "
            >
              I'm a Computer Science undergraduate with a strong interest in
              Artificial Intelligence, Machine Learningand Full Stack Engineering
              . I enjoy transforming ideas into products
              that are practical, scalable, and designed for real-world use.
            </p>

            <p
              className="
                mt-8
                text-lg
                leading-9
                text-slate-400
              "
            >
              During my internship at <span className="text-white font-medium">Bharat Electronics Limited (BEL)</span>,
              I developed AI-powered applications including an
              <span className="text-white"> AI Medical Prescription Generator</span>
              and an
              <span className="text-white"> ICD Query Chatbot</span>,
              gaining hands-on experience with modern web technologies,
              backend development, and AI integration.
            </p>

            <p
              className="
                mt-8
                text-lg
                leading-9
                text-slate-400
              "
            >
              My long-term goal is to become a Software Engineer specializing
              in Artificial Intelligence, building systems that combine strong
              engineering principles with intelligent decision-making.
            </p>
          </motion.div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
                  flex
                  h-44
                  flex-col
                  justify-center
                  rounded-3xl
                  border
                  border-white/10
                  bg-slate-900/40
                  px-7
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-blue-500/60
                  hover:shadow-[0_15px_40px_rgba(59,130,246,.18)]
                "
              >
                <h3
                  className="
                    gradient-text
                    text-5xl
                    font-black
                    leading-none
                  "
                >
                  {item.number}
                </h3>

                <p
                  className="
                    mt-5
                    text-base
                    font-medium
                    leading-6
                    text-slate-300
                  "
                >
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