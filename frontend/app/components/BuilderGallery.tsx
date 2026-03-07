import { Heart } from "lucide-react";

export default function BuilderGallery() {
  const projects = [
    {
      title: "DeFi Lending Protocol",
      likes: 242,
      tag: "DeFi",
      gradient: "from-blue-600 to-cyan-400",
    },
    {
      title: "NFT Marketplace",
      likes: 184,
      tag: "NFT",
      gradient: "from-purple-600 to-pink-500",
    },
    {
      title: "DAO Governance Tool",
      likes: 156,
      tag: "DAO",
      gradient: "from-orange-500 to-yellow-400",
    },
    {
      title: "Token Swap dApp",
      likes: 142,
      tag: "DeFi",
      gradient: "from-green-500 to-emerald-300",
    },
    {
      title: "Staking Rewards Tracker",
      likes: 128,
      tag: "Staking",
      gradient: "from-indigo-600 to-blue-400",
    },
    {
      title: "Community Badge System",
      likes: 115,
      tag: "Social",
      gradient: "from-rose-500 to-orange-400",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
      <h2 className="text-3xl font-bold text-white mb-12">Builder Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card-bg border border-card-border rounded-xl overflow-hidden hover:border-[#383A5D] transition-colors flex flex-col group text-left"
          >
            {/* Image Placeholder */}
            <div
              className={`w-full h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
            >
              {/* Optional minimal styling for the thumbnail */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] w-full h-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-black/20 rounded-lg border border-white/20 shadow-xl backdrop-blur-md"></div>
            </div>

            <div className="p-5 flex-grow flex flex-col justify-between hidden-border">
              <h3 className="text-white font-semibold mb-4 text-lg">
                {project.title}
              </h3>

              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-xs font-medium text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
                  {project.tag}
                </span>

                <div className="flex items-center gap-1.5 text-gray-400 group-hover:text-red-400 transition-colors">
                  <Heart fill="currentColor" className="w-4 h-4" />
                  <span className="text-sm font-medium">{project.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
