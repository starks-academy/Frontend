import React from "react";

interface OpenEndedInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isSubmitted: boolean;
  isCorrect: boolean | null;
}

export default function OpenEndedInput({
  value,
  onChange,
  isSubmitted,
  isCorrect,
}: OpenEndedInputProps) {
  
  let containerClasses = "w-full p-4 rounded-xl border-2 transition-all duration-300 min-h-[150px] md:min-h-[200px] outline-none text-white resize-y";
  
  if (!isSubmitted) {
    containerClasses += " bg-[#14152C] border-[#2A2B4A] focus:border-[#F58320] focus:shadow-[0_0_15px_rgba(245,131,32,0.15)]";
  } else {
    // Styling post-submission based on correctness
    if (isCorrect) {
      containerClasses += " bg-[#052E16]/30 border-[#22C55E] text-[#22C55E]";
    } else {
      containerClasses += " bg-[#450A0A]/30 border-[#EF4444] text-[#EF4444]";
    }
  }

  return (
    <textarea
      className={containerClasses}
      value={value}
      onChange={onChange}
      disabled={isSubmitted}
      placeholder="Type your explanation here..."
    />
  );
}
