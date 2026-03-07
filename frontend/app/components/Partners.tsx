import { Shield, Settings, FileText, Box } from "lucide-react";

export default function Partners() {
  const partners = [
    { name: "Hiro", icon: Shield },
    { name: "Xverse", icon: Settings },
    { name: "Leather", icon: FileText },
    { name: "Stacks", icon: Box },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8 border-y border-white/5 mb-16">
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">
          Built by and for Stacks Developers
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.name}
                className="flex flex-col items-center gap-2 group cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
              >
                <Icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
