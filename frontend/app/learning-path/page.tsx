import React from "react";
import HeroProgressWidget from "./components/HeroProgressWidget";
import ModuleCard, { Step, ModuleState } from "./components/ModuleCard";
import FinalAssessmentCard from "./components/FinalAssessmentCard";
import { Compass, BookOpen, FileCode2, Blocks, Cpu, Rocket } from "lucide-react";

// Mock Data
const MODULES = [
  {
    id: 1,
    title: "Bitcoin Fundamentals",
    description: "Understand the core principles of Bitcoin, from transaction mechanics to its overarching economic model.",
    state: "completed" as ModuleState,
    icon: <Compass className="w-5 h-5" />,
    steps: [
      { title: "Bitcoin 101", state: "completed" },
      { title: "The Bitcoin Network", state: "completed" },
      { title: "Proof of Work", state: "completed" },
      { title: "Wallets & Nodes", state: "completed" },
    ] as Step[],
  },
  {
    id: 2,
    title: "Introduction to Stacks",
    description: "Explore the Stacks layer 2 ecosystem, understand POX, and discover how it extends Bitcoin's capabilities.",
    state: "completed" as ModuleState,
    icon: <BookOpen className="w-5 h-5" />,
    steps: [
      { title: "Basics of Stacks", state: "completed" },
      { title: "Proof of Transfer (PoX)", state: "completed" },
      { title: "sBTC Overview", state: "completed" },
      { title: "Stacks Architecture", state: "completed" },
    ] as Step[],
  },
  {
    id: 3,
    title: "Clarity Smart Contracts",
    description: "Write flexible, predictable smart contracts using the Clarity programming language.",
    state: "in-progress" as ModuleState,
    icon: <FileCode2 className="w-5 h-5" />,
    progressPercentage: 50,
    steps: [
      { title: "Clarity Syntax", state: "completed" },
      { title: "Built-in Functions", state: "in-progress" },
      { title: "Deploying Contracts", state: "pending" },
    ] as Step[],
  },
  {
    id: 4,
    title: "Build dApps",
    description: "Integrate Clarity contracts with front-end applications to create complete Stacks dApps.",
    state: "locked" as ModuleState,
    icon: <Blocks className="w-5 h-5" />,
    steps: [
      { title: "Stacks JS Basics", state: "locked" },
      { title: "Wallet Authentication", state: "locked" },
      { title: "Connecting Contracts", state: "locked" },
      { title: "Real-world Project", state: "locked" },
    ] as Step[],
  },
  {
    id: 5,
    title: "Advanced Smart Contract Patterns",
    description: "Master advanced Clarity concepts, DeFi patterns, and performance optimizations.",
    state: "locked" as ModuleState,
    icon: <Cpu className="w-5 h-5" />,
    steps: [
      { title: "Advanced Methods", state: "locked" },
      { title: "Security Best Practices", state: "locked" },
      { title: "DeFi Implementations", state: "locked" },
      { title: "Performance Profiling", state: "locked" },
    ] as Step[],
  },
  {
    id: 6,
    title: "Build Real Projects",
    description: "Apply your knowledge by building and deploying full-scale ecosystem projects.",
    state: "locked" as ModuleState,
    icon: <Rocket className="w-5 h-5" />,
    steps: [
      { title: "Project Proposal", state: "locked" },
      { title: "DApp Architecture", state: "locked" },
      { title: "Final Polish", state: "locked" },
      { title: "Mainnet Deployment", state: "locked" },
    ] as Step[],
  },
];

export default function LearningPathPage() {
  return (
    <div className="min-h-screen bg-[#0A0B1A] pt-28 pb-20 px-4 md:px-8 font-sans">
      <HeroProgressWidget />
      
      {/* Learning Path Container */}
      <div className="relative max-w-4xl mx-auto pt-10">
        
        {/* Background Vertical Connected Line */}
        {/* Hides on mobile to make layout simpler, or can be adjusted */}
        <div className="absolute top-0 bottom-0 left-[50%] -translate-x-1/2 w-1 bg-linear-to-b from-[#2A2B4A]/50 via-[#2A2B4A]/80 to-[#2A2B4A]/10 hidden md:block"></div>
        {/* Mobile Connector */}
        <div className="absolute top-0 bottom-0 left-6 w-[2px] bg-linear-to-b from-[#2A2B4A]/50 to-[#2A2B4A]/10 md:hidden"></div>
        
        <div className="flex flex-col gap-12 relative z-10">
          {MODULES.map((module, index) => {
            const isLeft = index % 2 === 0;
            return (
              <ModuleCard
                key={module.id}
                id={module.id}
                title={module.title}
                description={module.description}
                state={module.state}
                icon={module.icon}
                steps={module.steps}
                progressPercentage={module.progressPercentage}
                alignment={isLeft ? "left" : "right"}
              />
            );
          })}
        </div>
        
        <FinalAssessmentCard />
      </div>
    </div>
  );
}
