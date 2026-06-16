import React from "react";

interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  description: string;
}

const experienceData: TimelineItem[] = [
  {
    period: "2022 - Present",
    title: "Founder & Lead Educator",
    institution: "Bostami Education",
    description:
      "Created a leading online educational platform that simplifies complex mechanical engineering concepts. Published 100+ high-quality video tutorials, growing the subscriber base to 100k+ and mentoring students globally.",
  },
  {
    period: "2020 - 2022",
    title: "Mechanical Design Engineer",
    institution: "Industrial Automation Ltd",
    description:
      "Designed industrial mechanical components, HVAC layouts, and factory piping structures. Performed CAD modeling, structural analysis, and collaborated with fabrication teams to deploy automated systems.",
  },
  {
    period: "2018 - 2020",
    title: "Academic Consultant & Freelance Specialist",
    institution: "Self-Employed",
    description:
      "Provided expert consultation for engineering students in mechanical drafting, 3D printing prototypes, and computational fluid dynamics (CFD) simulation modeling.",
  },
];

const educationData: TimelineItem[] = [
  {
    period: "2014 - 2018",
    title: "B.Sc. in Mechanical Engineering",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    description:
      "Graduated with honors. Developed strong foundations in Thermodynamics, Fluid Mechanics, CAD/CAM, Heat Transfer, and Control Systems. Completed thesis on thermal performance analysis of heat sinks.",
  },
  {
    period: "2019",
    title: "Advanced CAD & Finite Element Analysis (FEA)",
    institution: "Autodesk Authorized Training Center",
    description:
      "Earned certifications in SolidWorks simulation and Autodesk Fusion 360, focusing on static, dynamic, and thermal stress modeling.",
  },
];

export default function Timeline() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Experience Column */}
      <div className="space-y-10">
        <h3 className="text-xl font-light tracking-wide text-white mb-6">
          Work <span className="text-[#28e98c]">Experience</span>
        </h3>
        <div className="relative border-l border-zinc-800 pl-8 space-y-10 py-2">
          {experienceData.map((item, index) => (
            <div key={index} className="group relative">
              {/* Timeline Bullet */}
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-700 group-hover:bg-[#28e98c] group-hover:border-[#28e98c] transition-all duration-300" />
              
              {/* Year Badge */}
              <span className="text-xs font-light text-zinc-500 group-hover:text-[#28e98c] transition-colors duration-300">
                {item.period}
              </span>
              
              {/* Job Title */}
              <h4 className="text-lg font-light text-white mt-1 group-hover:text-[#28e98c] transition-colors duration-300">
                {item.title}
              </h4>
              
              {/* Institution */}
              <p className="text-[13px] text-zinc-400 font-light mt-0.5">
                {item.institution}
              </p>
              
              {/* Description */}
              <p className="text-sm text-zinc-500 font-light mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Column */}
      <div className="space-y-10">
        <h3 className="text-xl font-light tracking-wide text-white mb-6">
          Education & <span className="text-[#28e98c]">Credentials</span>
        </h3>
        <div className="relative border-l border-zinc-800 pl-8 space-y-10 py-2">
          {educationData.map((item, index) => (
            <div key={index} className="group relative">
              {/* Timeline Bullet */}
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-700 group-hover:bg-[#28e98c] group-hover:border-[#28e98c] transition-all duration-300" />
              
              {/* Year Badge */}
              <span className="text-xs font-light text-zinc-500 group-hover:text-[#28e98c] transition-colors duration-300">
                {item.period}
              </span>
              
              {/* Degree Title */}
              <h4 className="text-lg font-light text-white mt-1 group-hover:text-[#28e98c] transition-colors duration-300">
                {item.title}
              </h4>
              
              {/* Institution */}
              <p className="text-[13px] text-zinc-400 font-light mt-0.5">
                {item.institution}
              </p>
              
              {/* Description */}
              <p className="text-sm text-zinc-500 font-light mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
