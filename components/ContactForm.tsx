"use client";

import React, { useState } from "react";
import { Send, Phone, MapPin, Mail } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Contact Info Cards */}
      <div className="space-y-4">
        <div className="bg-[#191919] border border-zinc-800 rounded-[16px] p-6 group hover:border-zinc-600 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-[#28e98c]/10 transition-all duration-300">
            <Phone className="w-5 h-5 text-[#28e98c]" />
          </div>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-light mb-1">Phone</p>
          <p className="text-[15px] text-white font-light">+880 1XXXXXXXXX</p>
        </div>
        <div className="bg-[#191919] border border-zinc-800 rounded-[16px] p-6 group hover:border-zinc-600 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-[#28e98c]/10 transition-all duration-300">
            <Mail className="w-5 h-5 text-[#28e98c]" />
          </div>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-light mb-1">Email</p>
          <p className="text-[15px] text-white font-light">contact@bostamieducation.com</p>
        </div>
        <div className="bg-[#191919] border border-zinc-800 rounded-[16px] p-6 group hover:border-zinc-600 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-[#28e98c]/10 transition-all duration-300">
            <MapPin className="w-5 h-5 text-[#28e98c]" />
          </div>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-light mb-1">Location</p>
          <p className="text-[15px] text-white font-light">Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="md:col-span-2 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
              className="w-full bg-[#191919] border border-zinc-800 rounded-[12px] px-5 py-4 text-[14px] text-white placeholder:text-zinc-600 font-light outline-none focus:border-[#28e98c] transition-colors duration-300"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *"
              required
              className="w-full bg-[#191919] border border-zinc-800 rounded-[12px] px-5 py-4 text-[14px] text-white placeholder:text-zinc-600 font-light outline-none focus:border-[#28e98c] transition-colors duration-300"
            />
          </div>
        </div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject *"
          required
          className="w-full bg-[#191919] border border-zinc-800 rounded-[12px] px-5 py-4 text-[14px] text-white placeholder:text-zinc-600 font-light outline-none focus:border-[#28e98c] transition-colors duration-300"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message *"
          required
          rows={6}
          className="w-full bg-[#191919] border border-zinc-800 rounded-[12px] px-5 py-4 text-[14px] text-white placeholder:text-zinc-600 font-light outline-none focus:border-[#28e98c] transition-colors duration-300 resize-none"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-[#28e98c] text-black rounded-full px-8 py-3.5 font-medium text-[13px] tracking-widest uppercase border border-[#28e98c] hover:bg-transparent hover:text-[#28e98c] transition-all duration-300"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </form>
    </div>
  );
}
