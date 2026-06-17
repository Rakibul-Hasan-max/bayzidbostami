"use client";

import React, { useState } from "react";
import { ArrowUpRight, Layers } from "lucide-react";

interface Project {
  title: string;
  tags: string[];
  link: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Thermodynamics Masterclass Series",
    tags: ["YouTube", "Education"],
    link: "#",
    category: "youtube",
  },
  {
    title: "Bostami Education Platform",
    tags: ["Web App", "EdTech"],
    link: "#",
    category: "platform",
  },
  {
    title: "CAD Modeling Complete Guide",
    tags: ["YouTube", "SolidWorks"],
    link: "#",
    category: "youtube",
  },
  {
    title: "Heat Sink Thermal Analysis",
    tags: ["Research", "FEA"],
    link: "#",
    category: "engineering",
  },
  {
    title: "Fluid Mechanics Crash Course",
    tags: ["YouTube", "Education"],
    link: "#",
    category: "youtube",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "YouTube", value: "youtube" },
  { label: "Platform", value: "platform" },
  { label: "Engineering", value: "engineering" },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-5 py-2 rounded-full text-[12px] tracking-widest uppercase font-light border transition-all duration-300 ${
              activeFilter === filter.value
                ? "bg-accent text-black border-accent"
                : "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-zinc-300"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="group relative bg-[#191919] border border-zinc-800 rounded-[20px] overflow-hidden hover:border-zinc-600 transition-all duration-500"
          >
            {/* Image Area */}
            <div className="relative w-full aspect-[16/10] bg-zinc-900 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#28e98c]/5 via-transparent to-[#28e98c]/10" />
              <div className="text-center z-10 p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center group-hover:border-accent/50 transition-all duration-300">
                  <Layers className="w-7 h-7 text-accent" />
                </div>
                <p className="text-zinc-400 text-sm font-light">{project.tags.join(" • ")}</p>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 flex items-center justify-between">
              <div>
                <div className="flex gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest text-zinc-500 border border-zinc-800 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[15px] font-light text-white group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300 shrink-0 ml-4">
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-accent transition-colors duration-300" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
