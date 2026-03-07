export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-32 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand-purple/40 to-transparent pointer-events-none"></div>

      {/* Left content */}
      <div className="flex flex-col items-start text-left max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          Learn to Build <br /> on Bitcoin
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl">
          Stacks Academy is the best way to go from beginner to confident
          builder of smart contracts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-brand-orange hover:bg-orange-500 text-white font-medium px-8 py-3 rounded-md transition-colors w-full sm:w-auto shadow-[0_0_15px_rgba(245,131,32,0.3)]">
            Start Learning
          </button>
          <button className="border border-gray-600 hover:border-brand-orange hover:text-brand-orange text-white font-medium px-8 py-3 rounded-md transition-colors w-full sm:w-auto">
            Explore Curriculum
          </button>
        </div>
      </div>

      {/* Right Content - Visual Elements */}
      <div className="relative w-full max-w-md hidden md:block">
        {/* Code Block Illustration */}
        <div className="bg-[#1A1A24] rounded-xl border border-card-border p-5 shadow-2xl relative translate-x-4 -translate-y-8 z-10 w-full max-w-sm">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="space-y-2 font-mono text-sm">
            <div className="text-brand-orange">;; Define a valid token URI</div>
            <div>
              <span className="text-purple-400">let</span> token-uri{" "}
              <span className="text-gray-400">=</span>
            </div>
            <div className="pl-4">
              <span className="text-blue-400">(ok (some</span>{" "}
              <span className="text-green-400">&quot;https://...&quot;</span>
              <span className="text-blue-400">))</span>
            </div>
          </div>
        </div>

        {/* Small floating elements */}
        <div className="absolute top-1/2 -right-8 bg-card-bg border border-brand-orange/40 p-4 rounded-xl shadow-lg z-20 flex items-center gap-3 backdrop-blur-sm">
          <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center">
            <div className="w-4 h-4 bg-brand-orange rounded-sm rotate-45"></div>
          </div>
          <div className="text-sm font-medium">Earn STX</div>
        </div>

        {/* NFT / Badge Image simulation */}
        <div className="absolute -bottom-16 right-16 w-32 h-32 rounded-2xl bg-gradient-to-br from-brand-orange/20 to-purple-500/10 border border-brand-orange/30 p-2 shadow-[0_0_30px_rgba(245,131,32,0.15)] z-0 flex items-center justify-center">
          <div className="w-16 h-16 text-brand-orange">
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
