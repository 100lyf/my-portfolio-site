"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Loader2 } from "lucide-react"; // spinner icon for loading state

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_rorrh16",     // 🔹 replace with your EmailJS Service ID
        "template_z7t1f8q",    // 🔹 replace with your Template ID
        form.current,
        "zv9X_UvzqT16SkQcW"      // 🔹 replace with your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSent(true);
          setIsSending(false);
          form.current.reset();
          setTimeout(() => setSent(false), 3000); // reset "Sent" message after 3s
        },
        (error) => {
          console.error("Email error:", error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-6"
      id="contact"
    >
      <div className="xl:pt-16 xl:pb-18 container mx-auto">
        <h3 className="xl:pb-12 text-2xl text-accent font-semibold mb-2 text-left">
          - hello 👋
        </h3>

        <div className="flex flex-col xl:flex-row items-center gap-[30px]">
          {/* form */}
          <motion.div
            className="flex-1 xl:h-auto order-2 xl:order-none w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-8 sm:p-10 rounded-xl bg-card shadow-md w-[95%] sm:w-[85%] xl:w-[100%] mx-auto"
            >
              <h3 className="text-4xl text-accent font-semibold mb-2 text-left">
                Get in touch
              </h3>

              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  required
                  className="p-3 rounded-md bg-[#F5F5F5] text-[#091434] placeholder-[#A0A0A0] outline-none"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  required
                  className="p-3 rounded-md bg-[#F5F5F5] text-[#091434] placeholder-[#A0A0A0] outline-none"
                />
              </div>

              <Textarea
                name="message"
                required
                className="h-[200px] bg-[#F5F5F5] text-[#091434] placeholder-[#A0A0A0] rounded-md"
                placeholder="Message"
              />

              <div className="flex items-center justify-between mt-2">
                {/* social icons */}
                <div className="flex gap-4 text-[#A0A0A0] text-2xl">
                  <a href="mailto:adaportfolio25@gmail.com" className="hover:text-accent">
                    <FaEnvelope />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ada-ugo"
                    target="_blank"
                    className="hover:text-accent"
                  >
                    <FaLinkedin />
                  </a>
                </div>

                {/* send button */}
                <Button
                  type="submit"
                  size="md"
                  disabled={isSending}
                  className="max-w-40 font-semibold bg-[#FF923E] text-[#091434] hover:bg-transparent hover:border-2 hover:border-[#FF923E] hover:text-[#091434] flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="animate-spin w-4 h-4" />
                      Sending...
                    </>
                  ) : sent ? (
                    "Sent!"
                  ) : (
                    "Send"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* gif */}
          <motion.div
            className="flex-1 flex justify-center xl:justify-end order-1 xl:order-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/images/girl.gif"
              alt="Girl working on laptop"
              className="max-h-[400px] w-auto object-contain"
            />
          </motion.div>
        </div>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-10">
        &copy; Ada
      </footer>
    </motion.section>
  );
};

export default Contact;
