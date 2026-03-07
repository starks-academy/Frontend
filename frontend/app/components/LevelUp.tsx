export default function LevelUp() {
  const levels = [
    { number: "1", title: "Discover Stacks", price: "Free" },
    { number: "2", title: "Clarity Crash Course", price: "Free" },
    { number: "3", title: "Bitcoin Builder", price: "Premium" },
    { number: "4", title: "A.I. Smart Contracts", price: "Premium" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h2 className="text-3xl font-bold text-white mb-10">
        Level Up Your Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {levels.map((level, index) => (
          <div
            key={index}
            className="bg-card-bg border border-card-border hover:border-brand-orange/50 transition-colors rounded-xl p-5 flex items-center gap-4 text-left shadow-lg"
          >
            <div className="w-12 h-12 shrink-0 rounded-full bg-brand-orange text-white font-bold text-xl flex items-center justify-center shadow-[0_0_15px_rgba(245,131,32,0.4)]">
              {level.number}
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm leading-tight">
                {level.title}
              </h3>
              <span className="text-gray-400 text-xs mt-1 block">
                {level.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
