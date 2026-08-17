import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

import { socialLinks } from "../data/socialLinks";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const contactItems = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: socialLinks.email,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=haridharanbs2006@gmail.com",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "Haridharan2006",
      href: socialLinks.github,
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Connect with me",
      href: socialLinks.linkedin,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Bengaluru, Karnataka, India",
    },
  ];

  return (
    <section
      id="contact"
      className="py-32"
    >
      <Container>

        <SectionTitle
          eyebrow="GET IN TOUCH"
          title="Let's build something meaningful together."
          description="Whether it's an internship, collaboration, research opportunity, or an exciting software engineering project, I'd love to hear from you."
        />

        <div className="mt-24 grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <h3 className="text-4xl font-bold">
              Let's connect.
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              I'm always interested in discussing Artificial Intelligence,
              Machine Learning, Backend Engineering, internships,
              freelance work and innovative software projects.
            </p>

            <div className="mt-12 space-y-5">

              {contactItems.map((item) => {

                const Card = (
                  <motion.div
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      flex
                      items-center
                      gap-5
                      rounded-2xl
                      border
                      border-white/10
                      bg-slate-900/40
                      p-5
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-teal-500/20/40
                    "
                  >

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-teal-500/10
                        text-teal-400
                        text-lg
                      "
                    >
                      {item.icon}
                    </div>

                    <div>

                      <p className="text-sm text-slate-500">
                        {item.title}
                      </p>

                      <p className="mt-1 font-medium">
                        {item.value}
                      </p>

                    </div>

                  </motion.div>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {Card}
                    </a>
                  );
                }

                return (
                  <div key={item.title}>
                    {Card}
                  </div>
                );
              })}

            </div>

          </motion.div>

          {/* FORM */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-900/40
              p-8
              backdrop-blur-xl
            "
          >

            <h3 className="text-2xl font-bold">
              Send me a message
            </h3>

            <div className="mt-8 space-y-6">

              <input
                name="name"
                placeholder="Your Name"
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  outline-none
                  transition
                  focus:border-teal-500/20
                "
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  outline-none
                  transition
                  focus:border-teal-500/20
                "
              />

              <textarea
                name="message"
                rows="7"
                placeholder="Tell me ..."
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  outline-none
                  resize-none
                  transition
                  focus:border-teal-500/20
                "
              />

              <Button
                type="submit"
                disabled={loading}
              >
                <FaPaperPlane />

                {loading ? "Sending..." : "Send Message"}
              </Button>

            </div>

          </motion.form>

        </div>

      </Container>
    </section>
  );
}

export default Contact;