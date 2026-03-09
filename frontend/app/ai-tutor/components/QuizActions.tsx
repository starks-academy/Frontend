import React from "react";

interface QuizActionsProps {
  isAnswerSubmitted: boolean;
  isLastQuestion: boolean;
  onSkipClick: () => void;
  onSubmitClick: () => void;
  onNextClick: () => void;
  hasSelectedOption: boolean;
}

export default function QuizActions({
  isAnswerSubmitted,
  isLastQuestion,
  onSkipClick,
  onSubmitClick,
  onNextClick,
  hasSelectedOption,
}: QuizActionsProps) {
  return (
    <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#2A2B4A]/50">
      
      {/* Skip Button */}
      <button 
        className="px-6 py-3 rounded-lg font-medium text-[#8E90B0] hover:text-white hover:bg-[#14152C] transition-colors"
        onClick={onSkipClick}
        disabled={isAnswerSubmitted}
      >
        Skip Question
      </button>

      {/* Main Action Button (Submit or Next) */}
      {!isAnswerSubmitted ? (
        <button 
          className={`px-8 py-3 rounded-lg font-bold transition-all
            ${hasSelectedOption 
              ? "bg-brand-orange text-white shadow-[0_0_15px_rgba(245,131,32,0.3)] hover:bg-orange-500" 
              : "bg-[#14152C] text-[#8E90B0] border border-[#2A2B4A] cursor-not-allowed"
            }
          `}
          onClick={onSubmitClick}
          disabled={!hasSelectedOption}
        >
          Check Answer
        </button>
      ) : (
        <button 
          className="px-8 py-3 rounded-lg font-bold bg-[#14152C] border border-[#F58320] text-[#F58320] hover:bg-[#1F1B40] transition-colors"
          onClick={onNextClick}
        >
          {isLastQuestion ? "Finish Quiz" : "Next Question"}
        </button>
      )}

    </div>
  );
}
