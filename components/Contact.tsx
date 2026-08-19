"use client";

import { FormEvent, useState } from "react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    const form = event.currentTarget;

    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""
    );

    formData.append(
      "subject",
      "New Portfolio Contact Message"
    );

    formData.append(
      "from_name",
      "Rasindu Portfolio"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus(
          "Your message has been sent successfully. Thank you!"
        );

        form.reset();
      } else {
        setStatus(
          "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus(
        "Unable to send the message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section id="contact">

      <SectionHeading
        eyebrow="Contact"
        title="Let's connect"
        description="Have a question, project idea, or internship opportunity? Feel free to get in touch."
      />

      <div className="grid gap-10 md:grid-cols-2">

        {/* Contact information */}
        <div>

          <h3 className="text-xl font-semibold text-white">
            Get in touch
          </h3>

          <p className="mt-4 max-w-md leading-7 text-gray-400">
            I'm open to discussing software engineering,
            software development, QA, internship opportunities,
            and interesting technology projects.
          </p>

          <div className="mt-8 space-y-4">

            <a
              href="mailto:rasinduchandumina763@gmail.com"
              className="flex items-center gap-3 text-gray-400 transition hover:text-white"
            >
              <Mail size={18} />
              <span>
                rasinduchandumina763@gmail.com
              </span>
            </a>

            <a
                href="https://github.com/rasinduchandumina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 transition hover:text-white"
                >
                <span className="text-sm font-medium">
                    GitHub
                </span>
                </a>

               <a
                href="https://www.linkedin.com/in/rasindu763/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 transition hover:text-white"
                >
                <span className="text-sm font-medium">
                    LinkedIn
                </span>
                </a>

          </div>

        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
        >

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-300"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="mt-2 w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-white/30"
            />
          </div>

          {/* Email */}
          <div className="mt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-300"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-white/30"
            />
          </div>

          {/* Message */}
          <div className="mt-5">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-300"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Write your message..."
              className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-white/30"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send size={16} />

            {isSubmitting
              ? "Sending..."
              : "Send Message"}
          </button>

          {/* Status */}
          {status && (
            <p
              className="mt-4 text-center text-sm text-gray-400"
              aria-live="polite"
            >
              {status}
            </p>
          )}

        </form>

      </div>

    </Section>
  );
}