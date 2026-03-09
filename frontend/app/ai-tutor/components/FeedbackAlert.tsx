import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

interface FeedbackAlertProps {
  isCorrect: boolean;
  explanation: React.ReactNode;
}

export default function FeedbackAlert({
  isCorrect,
  explanation,
}: FeedbackAlertProps) {
  
  const containerClasses = `w-full mt-6 p-6 rounded-xl border flex flex-col md:flex-row gap-4
    ${isCorrect 
      ? "bg-[#052E16]/40 border-[#22C55E]/50" 
      : "bg-[#450A0A]/40 border-[#EF4444]/50"
    }
  `;

  const iconClasses = `shrink-0 mt-1
    ${isCorrect ? "text-[#22C55E]" : "text-[#EF4444]"}
  `;

  return (
    <div className={containerClasses} role="alert">
      <div className={iconClasses}>
        {isCorrect ? (
          <CheckCircle className="w-6 h-6" />
        ) : (
          <XCircle className="w-6 h-6" />
        )}
      </div>
      <div>
        <h4 className={`text-lg font-bold mb-2 ${isCorrect ? "text-[#22C55E]" : "text-[#EF4444]"}`}>
          {isCorrect ? "Correct Answer" : "Incorrect Answer"}
        </h4>
        <p className="text-[#E2E8F0] leading-relaxed text-sm">
          {explanation}
        </p>
      </div>
    </div>
  );
}
