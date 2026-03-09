"use client";

import React from "react";
import Link from "next/link";
import { RotateCcw, Plus } from "lucide-react";
import ScoreSummaryCard from "../../components/ScoreSummaryCard";
import ResultsBreakdownCard from "../../components/ResultsBreakdownCard";
import QuestionBreakdownGrid, { QuestionStatus } from "../../components/QuestionBreakdownGrid";

// Hardcoded Mock Data for the Results Page demonstration
const TOTAL_QUESTIONS = 15;
const CORRECT_ANSWERS = 6;
const INCORRECT_ANSWERS = 9;
const SKIPPED_ANSWERS = 0;

const MOCK_STATUSES: QuestionStatus[] = [
  "incorrect", "correct", "correct", "correct", "incorrect",
  "incorrect", "incorrect", "incorrect", "incorrect", "incorrect",
  "correct", "correct", "incorrect", "incorrect", "correct"
];

export default function QuizResultsPage() {
  const percentage = Math.round((CORRECT_ANSWERS / TOTAL_QUESTIONS) * 100);

  let performanceLabel = "Keep Trying";
  if (percentage >= 80) performanceLabel = "Excellent";
  else if (percentage >= 60) performanceLabel = "Good Job";
  else if (percentage >= 40) performanceLabel = "Fair";

  return (
    <div className="min-h-screen bg-[#0A0B1A] pt-32 pb-20 px-4 md:px-8 font-sans flex justify-center">
      <div className="w-full max-w-3xl flex flex-col items-center">
        
        {/* Results Container */}
        <div className="w-full bg-[#0F1023] rounded-3xl p-6 md:p-10 border border-[#2A2B4A]/50 shadow-2xl relative">
          
          <ScoreSummaryCard 
            score={CORRECT_ANSWERS}
            total={TOTAL_QUESTIONS}
            percentage={percentage}
            performanceLabel={performanceLabel}
          />

          <ResultsBreakdownCard 
            correctCount={CORRECT_ANSWERS}
            incorrectCount={INCORRECT_ANSWERS}
            skippedCount={SKIPPED_ANSWERS}
            total={TOTAL_QUESTIONS}
          />

          <QuestionBreakdownGrid statuses={MOCK_STATUSES} />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/ai-tutor/quiz" className="w-full">
              <button className="w-full py-4 rounded-xl flex items-center justify-center gap-2 border-2 border-[#2A2B4A] bg-[#14152C] text-white font-bold hover:border-[#F58320]/50 hover:bg-[#1A1A32] transition-colors shadow-sm">
                <RotateCcw className="w-5 h-5" />
                Try Again
              </button>
            </Link>
            
            <Link href="/ai-tutor" className="w-full">
              <button className="w-full py-4 rounded-xl flex items-center justify-center gap-2 border-2 border-[#F58320] bg-linear-to-r from-[#F58320] to-[#FFB067] text-[#0A0B1A] font-bold hover:shadow-[0_0_20px_rgba(245,131,32,0.4)] transition-all">
                <Plus className="w-5 h-5" />
                New Quiz
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
