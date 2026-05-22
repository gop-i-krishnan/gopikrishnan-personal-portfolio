"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Mail, Phone, X } from "lucide-react";
import { useRef, useState } from "react";

const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe_2krepfL58XkngAvprbM6eLAQtW0iJdF0O_XjihELVkUEXQ/formResponse";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    <path d="M12 18h-.01"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="contact" className="relative py-20 z-10 bg-navy-900 border-t border-white/5 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple text-glow">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-10 max-w-5xl mx-auto md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 sm:space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Reach Out</h3>

            <a href="mailto:gopigopikrishnand@gmail.com" className="flex items-center gap-3 p-4 glass rounded-lg border border-white/10 hover:border-electric-blue/50 group transition-colors sm:gap-4">
              <div className="w-11 h-11 shrink-0 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue group-hover:scale-110 transition-transform sm:h-12 sm:w-12">
                <Mail />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium text-white break-all">gopigopikrishnand@gmail.com</p>
              </div>
            </a>

            <a href="tel:+919074891201" className="flex items-center gap-3 p-4 glass rounded-lg border border-white/10 hover:border-electric-blue/50 group transition-colors sm:gap-4">
              <div className="w-11 h-11 shrink-0 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue group-hover:scale-110 transition-transform sm:h-12 sm:w-12">
                <Phone />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium text-white">+91-9074891201</p>
              </div>
            </a>

            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com/in/gop-i-krishnan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center border border-white/10 hover:border-electric-blue hover:text-electric-blue hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://github.com/gop-i-krishnan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center border border-white/10 hover:border-electric-purple hover:text-electric-purple hover:shadow-[0_0_15px_rgba(112,0,255,0.4)] transition-all">
                <GithubIcon size={20} />
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            action={GOOGLE_FORM_ACTION}
            method="POST"
            target="google-form-submit-frame"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass p-5 rounded-lg border border-white/10 flex flex-col gap-4 sm:p-8"
            onSubmit={() => setIsSubmitting(true)}
          >
            <input type="hidden" name="fvv" value="1" />
            <input type="hidden" name="pageHistory" value="0" />
            <input type="hidden" name="fbzx" value="7770505704382730156" />

            <div>
              <label className="block text-sm text-gray-400 mb-2">Name</label>
              <input name="entry.328205615" type="text" required className="w-full bg-navy-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input name="entry.85215213" type="email" required className="w-full bg-navy-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea name="entry.712405175" rows={4} required className="w-full bg-navy-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-electric-blue transition-colors resize-none" placeholder="Your message here..."></textarea>
            </div>
            <button disabled={isSubmitting} className="mt-4 py-3 w-full bg-gradient-to-r from-electric-blue to-electric-purple text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-shadow disabled:cursor-not-allowed disabled:opacity-70">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
          <iframe
            name="google-form-submit-frame"
            className="hidden"
            title="Google form submission"
            onLoad={() => {
              if (!isSubmitting) {
                return;
              }

              setIsSubmitting(false);
              setShowConfirmation(true);
              formRef.current?.reset();
            }}
          />
        </div>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="contact-confirmation-title">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-sm rounded-lg border border-white/10 bg-navy-900 p-6 text-center shadow-[0_0_40px_rgba(0,240,255,0.18)]"
          >
            <button
              type="button"
              aria-label="Close confirmation"
              onClick={() => setShowConfirmation(false)}
              className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-electric-blue hover:text-electric-blue"
            >
              <X size={18} />
            </button>
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-electric-blue/10 text-electric-blue">
              <CheckCircle2 size={30} />
            </div>
            <h3 id="contact-confirmation-title" className="mb-2 text-xl font-bold text-white">
              Message Sent
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Thanks for reaching out. I received your message and will get back to you soon.
            </p>
            <button
              type="button"
              onClick={() => setShowConfirmation(false)}
              className="mt-6 w-full rounded-lg bg-gradient-to-r from-electric-blue to-electric-purple py-3 font-bold text-white transition-shadow hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              Done
            </button>
          </motion.div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 mt-20 text-center text-sm text-gray-500 border-t border-white/5 pt-8 md:mt-32">
        <p>&copy; {new Date().getFullYear()} Gopikrishnan D. All rights reserved.</p>
        <p className="mt-1">Building the intelligent future.</p>
      </div>
    </section>
  );
}
