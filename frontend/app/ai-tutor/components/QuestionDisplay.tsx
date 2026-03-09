import React from "react";

interface QuestionDisplayProps {
  question: string;
  codeSnippet?: string;
}

export default function QuestionDisplay({
  question,
  codeSnippet,
}: QuestionDisplayProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
        {question}
      </h2>
      
      {codeSnippet && (
        <div className="mt-4 bg-[#14152C] rounded-lg p-4 border border-[#2A2B4A] overflow-x-auto">
          <pre className="text-sm font-mono text-[#E2E8F0]">
            <code>{codeSnippet}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
