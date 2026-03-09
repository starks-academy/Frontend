import React from "react";

interface ScoreSummaryCardProps {
  score: number;
  total: number;
  percentage: number;
  performanceLabel: string;
}

export default function ScoreSummaryCard({
  score,
  total,
  percentage,
  performanceLabel,
}: ScoreSummaryCardProps) {
  
  // Determine color based on performance
  let colorClass = "text-[#F58320]"; // Default Orange
  let circleStroke = "#F58320";
  
  if (percentage >= 80) {
    colorClass = "text-[#22C55E]"; // Green for Great
    circleStroke = "#22C55E";
  } else if (percentage < 50) {
    colorClass = "text-[#EF4444]"; // Red for Poor
    circleStroke = "#EF4444";
  }

  return (
    <div className="bg-[#14152C] border border-[#2A2B4A] rounded-2xl p-6 md:p-8 flex items-center justify-between shadow-lg mb-6">
      
      {/* Text Info */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Quiz Complete!</h2>
        <p className={`font-semibold mb-2 ${colorClass}`}>
          {performanceLabel}
        </p>
        <p className="text-[#8E90B0] text-sm md:text-base">
          You scored {score} out of {total} questions correctly
        </p>
      </div>

      {/* Circular Progress Indicator */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 flex items-center justify-center rounded-full border-[6px] border-[#0A0B1A]">
        <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="transparent"
            stroke="#2A2B4A"
            strokeWidth="12"
          />
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="transparent"
            stroke={circleStroke}
            strokeWidth="12"
            strokeDasharray="276.46" // 2 * PI * 44
            strokeDashoffset={276.46 - (276.46 * percentage) / 100}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <span className="text-xl md:text-2xl font-bold text-white z-10">
          {percentage}%
        </span>
        {/* Inner background glow */}
        <div className="absolute inset-4 bg-[#0A0B1A] rounded-full -z-10 shadow-inner"></div>
      </div>
    </div>
  );
}
