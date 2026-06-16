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
    title: "Founder & CEO, Lead Educator",
    institution: "Bostami Education",
    description:
      "Created a leading online educational platform that simplifies complex concepts from high school to college level in the field of Science group including Physics, Chemistry, Mathematics, and more. Published 100+ high-quality video tutorials, growing the subscriber base to 10k+ and mentoring students globally.",
  },
  {
    period: "2022 - 2024",
    title: "Assistant Teacher (Physics)",
    institution: "SBSC School & College, Gazipur, Dhaka",
    description:
      "Instructed 9th and 10th-grade physics classes, enhancing students' understanding of core scientific principles through engaging lessons.",
  },
  {
    period: "2021 - 2022",
    title: "Sub Assistant Engineer (RAC)",
    institution: "Minister High-Tech Park, Mymensingh",
    description:
      "Operated and maintained HVAC systems for the park's facilities. Ensured optimal performance and energy efficiency of cooling systems. Conducted regular maintenance and repair work to prevent downtime.",
  },
];

const educationData: TimelineItem[] = [
  {
    period: "2025 - 2028",
    title: "B.Sc. in Mechanical Engineering",
    institution: "International University of Business Agriculture and Technology (IUBAT)",
    description:
      "Graduated with honors. Developed strong foundations in Thermodynamics, Fluid Mechanics, CAD/CAM, Heat Transfer, and Control Systems. Completed thesis on thermal performance analysis of heat sinks.",
  },
  {
    period: "2017 - 2021",
    title: "Diploma in Refrigeration and Air Conditioning Technology",
    institution: "Dhaka Polytechnic Institute",
    description:
      "The program covers a wide range of topics, including thermodynamics, fluid mechanics, heat transfer, and refrigeration and air conditioning systems. Graduates of the program are eligible to work as refrigeration and air conditioning technicians, as well as in other related fields.",
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
