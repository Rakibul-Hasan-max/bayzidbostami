import React from "react";
import { LucideIcon } from "lucide-react";

interface SectionBadgeProps {
  icon: LucideIcon;
  text: string;
}

export default function SectionBadge({ icon: Icon, text }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 border border-zinc-700 rounded-full px-4 py-1.5 text-[11px] font-light tracking-widest uppercase text-white mb-10">
      <Icon className="w-3 h-3 text-zinc-400" />
      <span>{text}</span>
    </div>
  );
}
