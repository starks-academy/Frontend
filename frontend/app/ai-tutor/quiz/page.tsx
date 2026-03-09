"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import QuizHeader from "../components/QuizHeader";
import QuestionDisplay from "../components/QuestionDisplay";
import OptionItem, { OptionState } from "../components/OptionItem";
import FeedbackAlert from "../components/FeedbackAlert";
import QuizActions from "../components/QuizActions";

// Mock Data
const MOCK_QUESTIONS = [
  {
    id: 1,
    question: "What is the primary function of the `define-data-var` in Clarity?",
    codeSnippet: `(define-data-var my-var uint u10)`,
    options: [
      { id: "a", text: "To create a constant variable that cannot be changed." },
      { id: "b", text: "To define a global state variable that can be updated." },
      { id: "c", text: "To define a private function within the contract." },
      { id: "d", text: "To define a new custom token type." },
    ],
    correctOptionId: "b",
    explanation: "`define-data-var` is used to declare a data variable in a Clarity smart contract. This variable is persisted in the blockchain state and can be mutated using `var-set` and read using `var-get`.",
  },
  {
    id: 2,
    question: "How does Stacks inherit security from the Bitcoin network?",
    options: [
      { id: "a", text: "By using a completely separate Proof-of-Work algorithm." },
      { id: "b", text: "Through the Proof-of-Transfer (PoX) consensus mechanism." },
      { id: "c", text: "By physically hosting full nodes in Bitcoin data centers." },
      { id: "d", text: "Stacks does not inherit security from Bitcoin." },
    ],
    correctOptionId: "b",
    explanation: "Stacks uses Proof-of-Transfer (PoX), a novel consensus mechanism that anchors its state to the Bitcoin blockchain. Stacks miners spend BTC to mine STX, effectively settling Stacks network transactions on the Bitcoin chain.",
  },
  {
    id: 3,
    question: "What will this basic Clarity code return if you call it?",
    codeSnippet: `(define-read-only (get-magic-number)
  (+ u10 u5))`,
    options: [
      { id: "a", text: "An error, because uints cannot be added." },
      { id: "b", text: "15" },
      { id: "c", text: "(ok u15)" },
      { id: "d", text: "u15" },
    ],
    correctOptionId: "d",
    explanation: "The `+` function adds the two unsigned integers (`u10` and `u5`) resulting in `u15`. Because it is a `define-read-only` and not a public function, it does not implicitly wrap the response in an `(ok ...)` or `(err ...)` tuple type; it returns the raw `uint` directly.",
  },
];

export default function ActiveQuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestionData = MOCK_QUESTIONS[currentIndex];
  const totalQuestions = MOCK_QUESTIONS.length;

  const handleOptionClick = (optionId: string) => {
    if (!isSubmitted) {
      setSelectedOptionId(optionId);
    }
  };

  const handleSubmit = () => {
    if (selectedOptionId) {
      setIsSubmitted(true);
    }
  };

  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < MOCK_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOptionId(null);
      setIsSubmitted(false);
    } else {
      router.push("/ai-tutor/quiz/results");
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  // Determine Option State Logic
  const getOptionState = (optionId: string): OptionState => {
    if (!isSubmitted) {
      return selectedOptionId === optionId ? "selected" : "default";
    }

    if (optionId === currentQuestionData.correctOptionId) {
      return "correct";
    }

    if (optionId === selectedOptionId && selectedOptionId !== currentQuestionData.correctOptionId) {
      return "incorrect";
    }

    return "default";
  };

  const isCurrentSelectionCorrect = selectedOptionId === currentQuestionData.correctOptionId;

  return (
    <div className="min-h-screen bg-[#0A0B1A] pt-32 pb-20 px-4 md:px-8 font-sans flex justify-center">
      <div className="w-full max-w-3xl flex flex-col items-center">
        
        {/* Main Quiz Box */}
        <div className="w-full bg-[#0F1023] rounded-3xl p-8 md:p-12 border border-[#2A2B4A]/50 shadow-2xl relative">
          
          <QuizHeader 
            currentQuestion={currentIndex + 1}
            totalQuestions={totalQuestions}
            canGoBack={currentIndex > 0}
            canGoForward={true}
            onPrevious={() => {
              if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
                setSelectedOptionId(null);
                setIsSubmitted(false);
              }
            }}
            onNext={handleNext}
          />

          <div className="bg-[#14152C] rounded-2xl p-6 md:p-10 border border-[#2A2B4A] shadow-inner mb-8">
            <QuestionDisplay 
              question={currentQuestionData.question}
              codeSnippet={currentQuestionData.codeSnippet}
            />

            <div className="space-y-4">
              {currentQuestionData.options.map((opt) => (
                <OptionItem 
                  key={opt.id}
                  text={opt.text}
                  state={getOptionState(opt.id)}
                  onClick={() => handleOptionClick(opt.id)}
                  disabled={isSubmitted}
                />
              ))}
            </div>

            {isSubmitted && (
              <FeedbackAlert 
                isCorrect={isCurrentSelectionCorrect}
                explanation={currentQuestionData.explanation}
              />
            )}
          </div>

          <QuizActions 
            isAnswerSubmitted={isSubmitted}
            isLastQuestion={currentIndex === totalQuestions - 1}
            hasSelectedOption={selectedOptionId !== null}
            onSkipClick={handleSkip}
            onSubmitClick={handleSubmit}
            onNextClick={handleNext}
          />
        </div>
        
        <p className="text-[#8E90B0]/50 text-xs mt-8">
          AI can make mistakes, make sure to verify important information
        </p>

      </div>
    </div>
  );
}
