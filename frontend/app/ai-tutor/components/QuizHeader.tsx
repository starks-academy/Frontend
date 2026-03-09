"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious?: () => void;
  onNext?: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
}

export default function QuizHeader({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  canGoBack,
  canGoForward,
}: QuizHeaderProps) {
  const progressPercentage = Math.round((currentQuestion / totalQuestions) * 100);

  return (
    <div className="w-full mb-12">
      <div className="flex items-center justify-between mb-4">
        
        {/* Pagination Controls */}
        <div className="flex items-center gap-4">
          <button 
            className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors 
              ${canGoBack ? "border-[#2A2B4A] bg-[#14152C] hover:border-[#F58320] text-white cursor-pointer" : "border-[#2A2B4A]/30 bg-transparent text-[#2A2B4A] cursor-not-allowed"}
            `}
            onClick={onPrevious}
            disabled={!canGoBack}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="text-white font-medium">
            Question <span className="font-bold text-[#F58320]">{currentQuestion}</span> of {totalQuestions}
          </div>

          <button 
            className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors 
              ${canGoForward ? "border-[#2A2B4A] bg-[#14152C] hover:border-[#F58320] text-white cursor-pointer" : "border-[#2A2B4A]/30 bg-transparent text-[#2A2B4A] cursor-not-allowed"}
            `}
            onClick={onNext}
            disabled={!canGoForward}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Text */}
        <div className="text-[#8E90B0] text-sm font-medium">
          {progressPercentage}% complete
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-[#14152C] rounded-full overflow-hidden border border-[#2A2B4A]">
        <div 
          className="h-full bg-linear-to-r from-[#F58320] to-[#FFB067] transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}
