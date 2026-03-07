export default function CTA() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Background glow effect */}
      <div className="absolute bottom-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-purple/50 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 text-center z-10 relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Start Building on Bitcoin <br /> Today
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl mb-10">
          Join the next generation of Web3 developers
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
          <button className="bg-brand-orange hover:bg-orange-500 text-white font-medium px-8 py-3 rounded-md transition-colors w-full sm:w-auto shadow-[0_0_15px_rgba(245,131,32,0.3)]">
            Get Started
          </button>
          <button className="border border-gray-600 hover:border-brand-orange hover:text-brand-orange text-white font-medium px-8 py-3 rounded-md transition-colors w-full sm:w-auto">
            Join Community
          </button>
        </div>
      </div>
    </section>
  );
}
