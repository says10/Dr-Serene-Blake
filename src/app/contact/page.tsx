'use client';
import { ChangeEvent, FormEvent, useState } from 'react';

interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
  agree: boolean;
}

interface ContactFormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  preferredTime?: string;
  agree?: string;
}

function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agree: false,
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors: ContactFormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Invalid email address.";
    if (!form.message.trim()) newErrors.message = "Please let us know what brings you here.";
    if (!form.preferredTime.trim()) newErrors.preferredTime = "Preferred time is required.";
    if (!form.agree) newErrors.agree = "You must agree to be contacted.";
    return newErrors;
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    let fieldValue: string | boolean = value;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      fieldValue = e.target.checked;
    }
    setForm((prev) => ({ ...prev, [name]: fieldValue }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", message: "", preferredTime: "", agree: false });
    }
  }

  if (submitted) {
    return (
      <div className="text-center text-primary font-serif text-xl py-8">
        Thank you for reaching out! Dr. Blake will contact you soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-serif text-primary mb-1" htmlFor="name">Name *</label>
        <input
          className={`w-full border border-primary rounded-lg px-4 py-2 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-primary-light bg-neutral ${errors.name ? 'border-red-400' : 'border-primary'}`}
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      <div>
        <label className="block font-serif text-primary mb-1" htmlFor="email">Email *</label>
        <input
          className={`w-full border border-primary rounded-lg px-4 py-2 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-primary-light bg-neutral ${errors.email ? 'border-red-400' : 'border-primary'}`}
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block font-serif text-primary mb-1" htmlFor="phone">Phone *</label>
        <input
          className={`w-full border border-primary rounded-lg px-4 py-2 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-primary-light bg-neutral ${errors.phone ? 'border-red-400' : 'border-primary'}`}
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="(555) 234-5678"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>
      <div>
        <label className="block font-serif text-primary mb-1" htmlFor="message">What brings you here? *</label>
        <textarea
          className={`w-full border border-primary rounded-lg px-4 py-2 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-primary-light bg-neutral ${errors.message ? 'border-red-400' : 'border-primary'}`}
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="How can I help you?"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      <div>
        <label className="block font-serif text-primary mb-1" htmlFor="preferredTime">Preferred time to reach you *</label>
        <input
          className={`w-full border border-primary rounded-lg px-4 py-2 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-primary-light bg-neutral ${errors.preferredTime ? 'border-red-400' : 'border-primary'}`}
          type="text"
          id="preferredTime"
          name="preferredTime"
          value={form.preferredTime}
          onChange={handleChange}
          placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
        />
        {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
        <p className="text-xs text-gray-600 mt-1">Let us know when you&apos;re typically available for a call or consultation</p>
      </div>
      <div className="flex items-center">
        <input
          className={`mr-2 accent-primary ${errors.agree ? 'ring-2 ring-red-400' : ''}`}
          type="checkbox"
          id="agree"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
        />
        <label htmlFor="agree" className="text-gray-700">I agree to be contacted *</label>
      </div>
      {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}
      <button
        type="submit"
        className="w-full bg-amber-400 text-primary font-semibold rounded-lg px-8 py-3 text-base md:text-lg shadow hover:bg-primary hover:text-white transition-colors duration-200 mt-2"
      >
        Submit
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-8 md:py-20 bg-neutral flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-xl px-2 md:px-4">
        <div className="bg-white border border-primary rounded-2xl shadow-lg p-6 md:p-12">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary text-center mb-2">Get In Touch</h2>
          <p className="text-center text-gray-700 mb-6 md:mb-8 text-base md:text-lg">
            Simply fill out the brief fields below and Dr. Serena Blake will be in touch with you soon. This form is safe, private, and completely free.
          </p>
          <ContactForm />
          <p className="text-xs text-gray-600 mt-8 text-center">
            <span className="inline-block align-middle mr-1">ⓘ</span>
            By clicking submit you consent to receive texts and emails from Dr. Serena Blake.
          </p>
        </div>
      </div>
    </section>
  );
} 