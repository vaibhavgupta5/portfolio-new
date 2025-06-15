'use client';

import { useRef, useState } from 'react';
import { Mail, FileUser } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ScheduleCallButton from '../ui/ScheduleCallButton';

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [err, setErr] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    msg?: string;
  }>({});

  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

  const validateForm = () => {
    if (!form.current) return false;

    const name = (form.current.elements.namedItem('name') as HTMLInputElement)?.value.trim();
    const email = (form.current.elements.namedItem('email') as HTMLInputElement)?.value.trim();
    const msg = (form.current.elements.namedItem('msg') as HTMLTextAreaElement)?.value.trim();

    const errors: { name?: string; email?: string; msg?: string } = {};

    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Invalid email format';
    if (!msg) errors.msg = 'Message cannot be empty';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (form.current) {
      setIsLoading(true);
      emailjs.sendForm(service_id, template_id, form.current, public_key).then(
        () => {
          setErr('Message Sent');
          setIsLoading(false);
          form.current?.reset();
          setFormErrors({});

          setTimeout(() => {
            setErr('');
            setIsLoading(false);
          }, 3000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setErr('Failed to send message');

          setTimeout(() => {
            setErr('');
          }, 3000);
        }
      );
    }
  };

  return (
    <section className="md:w-[90%] text-white mx-auto md:py-10  md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Mail size={22} />
          <p className='flex md:hidden'>Contact Me</p>
          <p className='hidden md:flex'>I Love to hear from you.</p>
          
        </h2>
        <p className="text-[#999999] text-sm mt-1 mb-4">
          Connect with Me Today. Let’s Create Something Amazing Together!
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <a
            href="mailto:vaibhavgupta.v890@gmail.com"
            className="bg-[#141415] border border-[#202021] text-white px-8 py-3 rounded-xl flex items-center gap-2 hover:bg-transparent transition"
          >
            <Mail size={18} /> EMAIL ME
          </a>
          <a
            href="https://drive.google.com/file/d/13rBZ-XsTdCBmTH2qC2JDtV0QZPWJglYm/view?usp=sharing"
            target="_blank"
            className="bg-[#141415] border border-[#202021] text-white px-8 py-3 rounded-xl flex items-center gap-2 hover:bg-transparent transition"
          >
            <FileUser size={18} /> RESUME
          </a>
          <ScheduleCallButton />
        </div>

        <div className="w-full border-b border-dashed border-[#202021] my-6" />

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 md:col-span-2"
        >
          <div className="flex w-full gap-4 flex-wrap">
            <div className="w-full md:w-[49%]">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full bg-[#0A0A0B] border border-[#202021] rounded-xl px-4 py-3 text-sm text-white outline-none"
              />
              {formErrors.name && (
                <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
              )}
            </div>
            <div className="w-full md:w-[49%]">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-[#0A0A0B] border border-[#202021] rounded-xl px-4 py-3 text-sm text-white outline-none"
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
              )}
            </div>
          </div>
          <div>
            <textarea
              name="msg"
              rows={6}
              placeholder="Message"
              className="w-full bg-[#0A0A0B] border border-[#202021] rounded-xl px-4 py-3 text-sm text-white outline-none"
            />
            {formErrors.msg && (
              <p className="text-red-500 text-xs mt-1">{formErrors.msg}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#141415] border border-[#202021] text-center text-white px-8 py-3 rounded-xl cursor-pointer hover:bg-transparent transition"
          >
            {isLoading === false? "Send Your Message" : "Sending..."}
          </button>

          {err && (
            <p
              className={`text-sm mt-2 ${
                err === 'Message Sent' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {err}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
