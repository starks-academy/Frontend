import React from "react";
import { Check, X, Minus } from "lucide-react";

interface ResultsBreakdownCardProps {
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
  total: number;
}

export default function ResultsBreakdownCard({
  correctCount,
  incorrectCount,
  skippedCount,
  total,
}: ResultsBreakdownCardProps) {
  
  const correctPercent = Math.round((correctCount / total) * 100) || 0;
  const incorrectPercent = Math.round((incorrectCount / total) * 100) || 0;
  const skippedPercent = Math.round((skippedCount / total) * 100) || 0;

  return (
    <div className="bg-[#14152C] border border-[#2A2B4A] rounded-2xl p-6 shadow-lg mb-6">
      <h3 className="text-lg font-bold text-white border-b border-[#2A2B4A] pb-4 mb-4">
        Results Breakdown
      </h3>

      <div className="space-y-6 text-sm">
        
        {/* Correct Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 w-1/3">
            <div className="w-6 h-6 rounded flex items-center justify-center bg-[#052E16]/30 text-[#22C55E]">
              <Check className="w-4 h-4" />
            </div>
            <span className="text-[#8E90B0] font-medium">Correct</span>
          </div>
          <div className="flex items-center gap-4 w-2/3 justify-end">
            <span className="text-white font-bold">{correctCount} <span className="text-[#8E90B0] font-normal">({correctPercent}%)</span></span>
            <div className="w-16 md:w-24 h-2 bg-[#2A2B4A] rounded-full overflow-hidden shrink-0">
              <div className="h-full bg-[#22C55E]" style={{ width: `${correctPercent}%` }}></div>
            </div>
          </div>
        </div>

        {/* Incorrect Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 w-1/3">
            <div className="w-6 h-6 rounded flex items-center justify-center bg-[#450A0A]/30 text-[#EF4444]">
              <X className="w-4 h-4" />
            </div>
            <span className="text-[#8E90B0] font-medium">Incorrect</span>
          </div>
          <div className="flex items-center gap-4 w-2/3 justify-end">
            <span className="text-white font-bold">{incorrectCount} <span className="text-[#8E90B0] font-normal">({incorrectPercent}%)</span></span>
            <div className="w-16 md:w-24 h-2 bg-[#2A2B4A] rounded-full overflow-hidden shrink-0">
              <div className="h-full bg-[#EF4444]" style={{ width: `${incorrectPercent}%` }}></div>
            </div>
          </div>
        </div>

        {/* Skipped Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 w-1/3">
            <div className="w-6 h-6 rounded flex items-center justify-center bg-[#2A2B4A]/30 text-[#8E90B0]">
              <Minus className="w-4 h-4" />
            </div>
            <span className="text-[#8E90B0] font-medium">Skipped</span>
          </div>
          <div className="flex items-center gap-4 w-2/3 justify-end">
            <span className="text-white font-bold">{skippedCount} <span className="text-[#8E90B0] font-normal">({skippedPercent}%)</span></span>
            <div className="w-16 md:w-24 h-2 bg-[#2A2B4A] rounded-full overflow-hidden shrink-0">
              <div className="h-full bg-[#8E90B0]" style={{ width: `${skippedPercent}%` }}></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
