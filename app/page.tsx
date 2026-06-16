"use client";

import React from "react";
import InteractiveBackground from "@/components/InteractiveBackground";
import LeftSidebar from "@/components/LeftSidebar";
import RightNavbar from "@/components/RightNavbar";
import SectionBadge from "@/components/SectionBadge";
import Timeline from "@/components/Timeline";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonialSlider from "@/components/TestimonialSlider";
import ContactForm from "@/components/ContactForm";
import {
  Home,
  User,
  FileText,
  Briefcase,
  Cpu,
  Layers,
  MessageSquare,
  DollarSign,
  Mail,
  Video,
  BookOpen,
  Settings,
  Check,
  Sparkles,
} from "lucide-react";

const skills = [
  { name: "SolidWorks / CAD", level: 92 },
  { name: "Thermodynamics", level: 88 },
  { name: "Fluid Mechanics", level: 85 },
  { name: "MATLAB / Simulation", level: 80 },
  { name: "Content Creation", level: 95 },
  { name: "Video Editing", level: 78 },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Interactive Canvas Background */}
      <InteractiveBackground />

      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Right Navigation */}
      <RightNavbar />

      {/* Main Content */}
      <main className="relative z-10 lg:ml-[420px] lg:mr-[90px] px-6 py-8 lg:py-8">
        {/* ==================== HOME / INTRO SECTION ==================== */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center py-20"
        >
          <SectionBadge icon={Home} text="Introduce" />

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight">
            Say Hi from{" "}
            <span className="text-[#28e98c] font-normal">Bayzid Bostami</span>,{" "}
            <br className="hidden md:block" />
            Mechanical Engineer &{" "}
            <span className="text-[#28e98c] font-normal">Educator</span>
          </h1>

          <p className="text-lg text-zinc-400 font-light mt-8 max-w-2xl leading-relaxed">
            I simplify complex engineering concepts and share knowledge through
            my YouTube channel — Bostami Education. Passionate about
            thermodynamics, CAD, and empowering the next generation of
            engineers.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-16">
            <div className="bg-[#191919] border border-zinc-800 rounded-[20px] px-8 py-7 group hover:border-zinc-600 transition-all duration-300">
              <h2 className="text-4xl md:text-5xl font-light text-[#28e98c]">
                100K+
              </h2>
              <p className="text-sm text-zinc-400 font-light mt-2">
                YouTube Subscribers
              </p>
            </div>
            <div className="bg-[#191919] border border-zinc-800 rounded-[20px] px-8 py-7 group hover:border-zinc-600 transition-all duration-300">
              <h2 className="text-4xl md:text-5xl font-light text-[#28e98c]">
                200+
              </h2>
              <p className="text-sm text-zinc-400 font-light mt-2">
                Educational Videos Published
              </p>
            </div>
          </div>
        </section>

        {/* ==================== ABOUT SECTION ==================== */}
        <section id="about" className="py-24">
          <SectionBadge icon={User} text="About" />

          <h2 className="text-3xl md:text-5xl font-light text-white leading-snug tracking-tight">
            Every great lesson begins{" "}
            <br className="hidden md:block" />
            with an even{" "}
            <span className="text-[#28e98c]">better story</span>
          </h2>

          <p className="text-[16px] text-zinc-400 font-light mt-8 max-w-3xl leading-[1.85]">
            Since beginning my career as a Mechanical Engineer, I&apos;ve dedicated
            myself to making engineering education accessible and engaging.
            Through Bostami Education — my YouTube platform — I break down
            complex topics like Thermodynamics, Fluid Mechanics, Heat Transfer,
            and CAD Design into easy-to-understand visual lessons. With over 100K
            subscribers and a rapidly growing community, my mission is to empower
            students across Bangladesh and beyond to master engineering concepts
            with confidence. I&apos;m quietly confident, naturally curious, and
            perpetually working on creating better educational content — one
            video at a time.
          </p>
        </section>

        {/* ==================== RESUME SECTION ==================== */}
        <section id="resume" className="py-24">
          <SectionBadge icon={FileText} text="Resume" />
          <Timeline />
        </section>

        {/* ==================== SERVICES SECTION ==================== */}
        <section id="services" className="py-24">
          <SectionBadge icon={Briefcase} text="Specializations" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-[#191919] border border-zinc-800 rounded-[20px] p-8 group hover:border-zinc-600 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-[#28e98c]/10 transition-all duration-300">
                <Video className="w-6 h-6 text-[#28e98c]" />
              </div>
              <h3 className="text-xl font-light text-white mb-3 group-hover:text-[#28e98c] transition-colors duration-300">
                YouTube Education
              </h3>
              <p className="text-[14px] text-zinc-500 font-light leading-relaxed">
                Creating high-quality educational content on Mechanical Engineering
                topics — from Thermodynamics to CAD Modeling, all in Bangla.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-[#191919] border border-zinc-800 rounded-[20px] p-8 group hover:border-zinc-600 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-[#28e98c]/10 transition-all duration-300">
                <Settings className="w-6 h-6 text-[#28e98c]" />
              </div>
              <h3 className="text-xl font-light text-white mb-3 group-hover:text-[#28e98c] transition-colors duration-300">
                Mechanical Design
              </h3>
              <p className="text-[14px] text-zinc-500 font-light leading-relaxed">
                Professional CAD modeling, FEA simulation, and product design
                using SolidWorks, AutoCAD, and Fusion 360.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-[#191919] border border-zinc-800 rounded-[20px] p-8 group hover:border-zinc-600 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-[#28e98c]/10 transition-all duration-300">
                <BookOpen className="w-6 h-6 text-[#28e98c]" />
              </div>
              <h3 className="text-xl font-light text-white mb-3 group-hover:text-[#28e98c] transition-colors duration-300">
                Online Courses
              </h3>
              <p className="text-[14px] text-zinc-500 font-light leading-relaxed">
                Comprehensive structured courses on Bostami Education platform
                covering core ME subjects with assignments and quizzes.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== SKILLS SECTION ==================== */}
        <section id="skills" className="py-24">
          <SectionBadge icon={Cpu} text="My Skills" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[15px] font-light text-white">
                    {skill.name}
                  </span>
                  <span className="text-2xl font-light text-[#28e98c]">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#28e98c] rounded-full skill-bar-fill"
                    style={
                      { "--skill-level": `${skill.level}%` } as React.CSSProperties
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== PORTFOLIO SECTION ==================== */}
        <section id="portfolio" className="py-24">
          <SectionBadge icon={Layers} text="Portfolio" />

          <h2 className="text-3xl md:text-5xl font-light text-white mb-12 tracking-tight">
            Featured <span className="text-[#28e98c]">Projects</span>
          </h2>

          <PortfolioGrid />
        </section>

        {/* ==================== TESTIMONIAL SECTION ==================== */}
        <section id="testimonial" className="py-24">
          <SectionBadge icon={MessageSquare} text="Testimonials" />
          <TestimonialSlider />
        </section>

        {/* ==================== PRICING SECTION ==================== */}
        <section id="pricing" className="py-24">
          <SectionBadge icon={DollarSign} text="Pricing" />

          <h2 className="text-3xl md:text-5xl font-light text-white mb-12 tracking-tight">
            My <span className="text-[#28e98c]">Pricing</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Plan */}
            <div className="bg-[#191919] border border-zinc-800 rounded-[20px] p-8 md:p-10 hover:border-zinc-600 transition-all duration-500">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-light border border-zinc-800 rounded-full px-4 py-1.5 mb-6">
                <Sparkles className="w-3 h-3" /> Basic
              </div>
              <p className="text-[14px] text-zinc-400 font-light mb-6">
                For students who need focused guidance on specific topics
              </p>
              <h3 className="text-4xl md:text-5xl font-light text-white mb-8">
                ৳999{" "}
                <span className="text-sm text-zinc-500 font-light">
                  / course
                </span>
              </h3>
              <ul className="space-y-3 mb-10">
                {[
                  "Access to recorded video lectures",
                  "Topic-specific course materials",
                  "Community discussion access",
                  "Certificate on completion",
                  "6 months course access",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14px] text-zinc-400 font-light"
                  >
                    <Check className="w-4 h-4 text-[#28e98c] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center w-full py-3.5 rounded-full border border-zinc-700 text-[13px] uppercase tracking-widest font-light text-zinc-300 hover:border-[#28e98c] hover:text-[#28e98c] transition-all duration-300"
              >
                Pick This Package
              </a>
            </div>

            {/* Premium Plan */}
            <div className="pricing-premium border border-[#28e98c]/30 rounded-[20px] p-8 md:p-10 hover:border-[#28e98c] transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#28e98c]/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#28e98c] font-light border border-[#28e98c]/40 rounded-full px-4 py-1.5 mb-6">
                  <Sparkles className="w-3 h-3" /> Premium
                </div>
                <p className="text-[14px] text-zinc-400 font-light mb-6">
                  Full mentorship with live sessions and personal guidance
                </p>
                <h3 className="text-4xl md:text-5xl font-light text-white mb-8">
                  ৳4,999{" "}
                  <span className="text-sm text-zinc-500 font-light">
                    / semester
                  </span>
                </h3>
                <ul className="space-y-3 mb-10">
                  {[
                    "Everything in Basic plan",
                    "Live interactive sessions every week",
                    "1-on-1 doubt solving with Bayzid",
                    "Priority project feedback",
                    "Full course catalog access",
                    "Lifetime access to content",
                    "Exclusive engineering resources",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[14px] text-zinc-400 font-light"
                    >
                      <Check className="w-4 h-4 text-[#28e98c] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center w-full py-3.5 rounded-full bg-[#28e98c] text-black text-[13px] uppercase tracking-widest font-medium border border-[#28e98c] hover:bg-transparent hover:text-[#28e98c] transition-all duration-300"
                >
                  Pick This Package
                </a>
              </div>
            </div>
          </div>

          <p className="text-sm text-zinc-500 font-light mt-8 text-center">
            Don&apos;t find a package that matches your needs?{" "}
            <a
              href="#contact"
              className="text-[#28e98c] hover:underline underline-offset-4"
            >
              Contact me
            </a>{" "}
            for a custom plan.
          </p>
        </section>

        {/* ==================== CONTACT SECTION ==================== */}
        <section id="contact" className="py-24 pb-32">
          <SectionBadge icon={Mail} text="Contact" />

          <h2 className="text-3xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Let&apos;s Work <span className="text-[#28e98c]">Together!</span>
          </h2>
          <p className="text-[14px] text-zinc-500 font-light mb-12">
            * Marked fields are required to fill.
          </p>

          <ContactForm />
        </section>
      </main>
    </div>
  );
}
