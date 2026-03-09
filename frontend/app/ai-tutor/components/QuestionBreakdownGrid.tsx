import React from "react";
import { Check, X, Minus, BarChart2 } from "lucide-react";

export type QuestionStatus = "correct" | "incorrect" | "skipped";

interface QuestionBreakdownGridProps {
  statuses: QuestionStatus[];
}

export default function QuestionBreakdownGrid({ statuses }: QuestionBreakdownGridProps) {
  return (
    <div className="bg-[#14152C] border border-[#2A2B4A] rounded-2xl p-6 shadow-lg mb-10">
      
      <div className="flex items-center justify-between border-b border-[#2A2B4A] pb-4 mb-6">
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <BarChart2 className="w-5 h-5 text-[#8E90B0]" />
          <h3>Question Breakdown</h3>
        </div>
        <span className="text-[#8E90B0] text-sm">Click to review</span>
      </div>

      <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 md:gap-3">
        {statuses.map((status, index) => {
          let bgClass = "";
          let Icon = null;

          if (status === "correct") {
            bgClass = "bg-[#052E16] border-[#22C55E]";
            Icon = <Check className="w-5 h-5 text-[#22C55E]" />;
          } else if (status === "incorrect") {
            bgClass = "bg-[#450A0A] border-[#EF4444]";
            Icon = <X className="w-5 h-5 text-[#EF4444]" />;
          } else {
            bgClass = "bg-[#1A1A32] border-[#2A2B4A]";
            Icon = <Minus className="w-5 h-5 text-[#8E90B0]" />;
          }

          return (
            <button
              key={index}
              className={`aspect-square w-full rounded-lg border-2 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-md ${bgClass}`}
              title={`Question ${index + 1} - ${status}`}
            >
              {Icon}
            </button>
          );
        })}
      </div>

    </div>
  );
}
