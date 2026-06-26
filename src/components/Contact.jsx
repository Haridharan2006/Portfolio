import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
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

  return (
    <section id="contact">
      <Container>

        <SectionTitle
          eyebrow="Contact"
          title="Let's Build Something Together."
          description="I'm always open to internships, collaborations and exciting software engineering opportunities."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 gap-20">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold">

              Get in Touch

            </h3>

            <div className="mt-10 space-y-6">

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=haridharanbs2006@gmail.com"
                className="flex items-center gap-4 hover:text-sky-400 transition"
              >
                <FaEnvelope />

                {socialLinks.email}

              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-sky-400 transition"
              >
                <FaGithub />

                GitHub

              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 hover:text-sky-400 transition"
              >
                <FaLinkedin />

                LinkedIn

              </a>

              <div className="flex items-center gap-4">

                <FaMapMarkerAlt />

                Bengaluru, Karnataka, India

              </div>

            </div>

          </div>

          {/* Right */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
          >

            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-white/10 bg-transparent p-4"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-white/10 bg-transparent p-4"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full rounded-xl border border-white/10 bg-transparent p-4"
            />

            <Button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>

          </form>

        </div>

      </Container>
    </section>
  );
}

export default Contact;