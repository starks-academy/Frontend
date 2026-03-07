import {
  BookOpen,
  Sparkles,
  Code,
  CheckCircle,
  Award,
  LayoutGrid,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Structured Learning Paths",
      description:
        "Step-by-step curriculum covering Bitcoin architecture, Clarity smart contracts, and full-stack dApp development.",
      icon: BookOpen,
      iconColor: "text-brand-orange",
    },
    {
      title: "AI Tutor",
      description:
        "Get immediate help, code explanations, and debugging assistance 24/7 from our specialized Web3 AI.",
      icon: Sparkles,
      iconColor: "text-brand-orange",
    },
    {
      title: "Clarity Playground",
      description:
        "Write, test, and deploy smart contracts directly in your browser.",
      icon: Code,
      iconColor: "text-brand-orange",
    },
    {
      title: "AI-Graded Assessments",
      description:
        "Test your knowledge with automated feedback to ensure mastery of concepts.",
      icon: CheckCircle,
      iconColor: "text-brand-orange",
    },
    {
      title: "NFT Certificates",
      description:
        "Earn verifiable, soul-bound certificates on the Stacks blockchain upon completion.",
      icon: Award,
      iconColor: "text-brand-orange",
    },
    {
      title: "Builder Gallery",
      description:
        "Showcase your projects to top Web3 employers and the Stacks community.",
      icon: LayoutGrid,
      iconColor: "text-brand-orange",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-[#111221] border border-[#21233B] hover:border-[#383A5D] transition-colors rounded-xl p-6 flex flex-col h-full"
            >
              <div className="w-10 h-10 rounded-lg bg-[#25201A] flex items-center justify-center mb-5">
                <Icon className={`w-5 h-5 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
