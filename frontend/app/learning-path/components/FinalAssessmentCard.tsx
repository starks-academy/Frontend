import React from "react";
import { Trophy, Lock } from "lucide-react";

export default function FinalAssessmentCard() {
  return (
    <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto my-16">
      
      {/* Number Icon inside the path (Above the card) */}
      <div className="hidden md:flex flex-col items-center justify-center mb-8 relative z-10">
        <div className="w-12 h-12 rounded-full border-4 bg-[#14152C] border-[#2A2B4A] flex items-center justify-center shadow-lg">
           <Lock className="w-5 h-5 text-[#8E90B0]" />
        </div>
      </div>

      <div className="w-full md:w-[60%] lg:w-[50%] p-1 rounded-2xl bg-linear-to-br from-[#F58320] via-purple-700 to-transparent shadow-[0_0_30px_rgba(245,131,32,0.3)] opacity-90 hover:opacity-100 transition-opacity">
        <div className="bg-[#14152C] p-8 rounded-xl h-full border border-black flex flex-col items-center text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,131,32,0.1)_0,transparent_70%)] pointer-events-none"></div>
            
            <div className="w-16 h-16 rounded-full bg-linear-to-tr from-[#F58320] to-[#FF4500] shadow-[0_0_20px_rgba(245,131,32,0.5)] flex items-center justify-center mb-6 relative z-10">
                <Trophy className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 relative z-10">
                Certification & Final<br/>Assessment
            </h2>

            <p className="text-[#8E90B0] text-sm mb-6 max-w-sm relative z-10">
                Complete all preceding modules to unlock certification and final assessment to earn your official Stacks Developer Certificate.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8 relative z-10">
                <span className="bg-[#0A0B1A] border border-[#2A2B4A] text-[#8E90B0] text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#8E90B0]"></span> 30 Questions
                </span>
                <span className="bg-[#0A0B1A] border border-[#2A2B4A] text-[#8E90B0] text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#8E90B0]"></span> 1 Assessment
                </span>
                <span className="bg-[#0A0B1A] border border-[#2A2B4A] text-[#8E90B0] text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#8E90B0]"></span> Certificate
                </span>
            </div>

            <button className="w-full py-4 bg-linear-to-r from-[#593CAE] to-[#2B1B54] text-[#B0A3EB] rounded-lg font-semibold flex items-center justify-center gap-2 relative z-10 cursor-not-allowed border border-[#3E2A76]" disabled>
                Complete all modules to unlock <Trophy className="w-4 h-4 ml-1" />
            </button>
        </div>
      </div>
    </div>
  );
}
