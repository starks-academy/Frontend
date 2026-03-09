import React from "react";
import { Check, X } from "lucide-react";

export type OptionState = "default" | "selected" | "correct" | "incorrect";

interface OptionItemProps {
  text: string;
  state: OptionState;
  onClick: () => void;
  disabled: boolean;
}

export default function OptionItem({
  text,
  state,
  onClick,
  disabled,
}: OptionItemProps) {
  
  // Base styling for the container
  let containerClasses = "flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer mb-3 w-full text-left";
  
  // Icon styling and rendering
  let Icon = null;
  let iconContainerClasses = "w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors border";

  switch (state) {
    case "default":
      containerClasses += " bg-[#14152C] border-[#2A2B4A] hover:bg-[#1A1A32] hover:border-[#F58320]/50";
      iconContainerClasses += " bg-transparent border-[#2A2B4A]/50";
      break;
    case "selected":
      containerClasses += " bg-[#1F1B40] border-[#F58320] shadow-[0_0_15px_rgba(245,131,32,0.1)]";
      iconContainerClasses += " bg-[#F58320] border-[#F58320]";
      Icon = <Check className="w-4 h-4 text-white" />;
      break;
    case "correct":
      containerClasses += " bg-[#052E16]/30 border-[#22C55E]";
      iconContainerClasses += " bg-[#22C55E] border-[#22C55E]";
      Icon = <Check className="w-4 h-4 text-white" />;
      break;
    case "incorrect":
      containerClasses += " bg-[#450A0A]/30 border-[#EF4444]";
      iconContainerClasses += " bg-[#EF4444] border-[#EF4444]";
      Icon = <X className="w-4 h-4 text-white" />;
      break;
  }

  // If disabled but not selected/correct/incorrect, dim it
  if (disabled && state === "default") {
    containerClasses = "flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 w-full text-left bg-[#0A0B1A]/50 border-[#2A2B4A]/30 opacity-50 cursor-not-allowed";
  }

  return (
    <button 
      className={containerClasses} 
      onClick={onClick} 
      disabled={disabled}
    >
      <div className={iconContainerClasses}>
        {Icon}
      </div>
      <span className={`text-base font-medium ${state === "default" && disabled ? "text-[#8E90B0]" : "text-white"}`}>
        {text}
      </span>
    </button>
  );
}
