"use client";

import { type FormEvent, useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      name.trim() === "" ||
      subject.trim() === "" ||
      message.trim() === "" ||
      email.trim() === ""
    ) {
      setError("Please input required field!");
      return;
    }

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(
      `Hello my name is ${name}, ${message}`
    );
    window.location.href = `mailto:yadiapriyadi676@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section id="contact" className="pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-xl text-primary mb-2">Contact</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Contact Me
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full mb-8 px-4">
              <label
                htmlFor="name"
                className="text-base text-primary font-bold"
              >
                Name<span className="text-red-600">*</span>
              </label>
              <input
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                autoComplete="off"
                type="text"
                id="name"
                aria-required="true"
                aria-invalid={Boolean(error && name.trim() === "")}
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full mb-8 px-4">
              <label
                htmlFor="email"
                className="text-base text-primary font-bold"
              >
                Email<span className="text-red-600">*</span>
              </label>
              <input
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                autoComplete="off"
                type="email"
                id="email"
                aria-required="true"
                aria-invalid={Boolean(error && email.trim() === "")}
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full mb-8 px-4">
              <label
                htmlFor="subject"
                className="text-base text-primary font-bold"
              >
                Subject<span className="text-red-600">*</span>
              </label>
              <input
                name="subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  setError("");
                }}
                autoComplete="off"
                type="text"
                id="subject"
                aria-required="true"
                aria-invalid={Boolean(error && subject.trim() === "")}
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full mb-8 px-4">
              <label
                htmlFor="message"
                className="text-base text-primary font-bold"
              >
                Message<span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setError("");
                }}
                autoComplete="off"
                id="message"
                aria-required="true"
                aria-invalid={Boolean(error && message.trim() === "")}
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
              ></textarea>
            </div>
            {/* Submit */}
            <div className="w-full px-4">
              {error && (
                <p role="alert" className="text-red-600">
                  {error}
                </p>
              )}
              <button
                className="w-full text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-500"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
