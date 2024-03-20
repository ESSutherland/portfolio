import React, { useRef } from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa6";
import { sendEmail } from "../actions/sendEmail";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { pending } = useFormStatus();
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  return (
    <section
      id="contact"
      className="text-center mb-32 scroll-mt-56 w-full max-w-[700px]"
    >
      <h1 className="text-[2.5rem] font-bold blue_gradient mb-2">Contact</h1>
      <h2 className="text-zinc-200">
        Contact me directly via{" "}
        <a
          href="mailto:ESutherland95@gmail.com"
          className="text-sky-500 font-bold"
        >
          Email
        </a>{" "}
        or use this form.
      </h2>
      <Toaster />
      <form
        className="mt-16 flex-center flex-col gap-4 w-full"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          if (emailRef.current) {
            (emailRef.current as HTMLInputElement).value = "";
          }

          if (messageRef.current) {
            (messageRef.current as HTMLTextAreaElement).value = "";
          }

          toast.success("Message sent!");
        }}
      >
        <input
          className="h-14 rounded-lg px-4 w-full bg-zinc-500 text-white placeholder:text-zinc-200 outline-none"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
          ref={emailRef}
        />
        <textarea
          className="h-52 my-3 rounded-lg p-4 w-full bg-zinc-500 text-white placeholder:text-zinc-200 outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          ref={messageRef}
        />
        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 text-zinc-200 font-bold rounded-lg h-14 w-[80%] flex-center gap-3 group hover:scale-[1.02] transition-all disabled:bg-zinc-500"
          disabled={pending}
        >
          Send{" "}
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </section>
  );
};

export default Contact;
