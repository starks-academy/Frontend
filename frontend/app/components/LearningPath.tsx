import { Plane, TrendingUp, Rocket, Trophy } from "lucide-react";

export default function LearningPath() {
  const steps = [
    { name: "Beginner", label: "Bitcoin Fundamentals", icon: Plane },
    {
      name: "Intermediate",
      label: "Clarity Smart Contracts",
      icon: TrendingUp,
    },
    { name: "Advanced", label: "Full-Stack dApps", icon: Rocket },
    { name: "Capstone Project", label: "Build & Deploy", icon: Trophy },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
      <h2 className="text-3xl font-bold text-white mb-16">Learning Path</h2>

      <div className="relative flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-brand-orange/10 via-brand-orange/50 to-brand-orange/10 z-0"></div>
        {/* Connecting line for mobile */}
        <div className="block md:hidden absolute left-1/2 top-[5%] bottom-[5%] w-[1px] bg-gradient-to-b from-brand-orange/10 via-brand-orange/50 to-brand-orange/10 z-0 -translate-x-1/2"></div>

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center mb-12 md:mb-0 w-40"
            >
              <div className="w-20 h-20 rounded-full bg-[#1A1108] border border-brand-orange shadow-[0_0_20px_rgba(245,131,32,0.2)] flex items-center justify-center mb-4 text-brand-orange outline outline-4 outline-[#0A0B1A]">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-white font-medium text-lg mb-1">
                {step.name}
              </h3>
              <div className="bg-[#1A1108] border border-brand-orange/40 text-brand-orange text-xs font-semibold px-3 py-1 rounded-full">
                {step.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
