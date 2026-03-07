export default function ProfileHeader() {
  return (
    <div className="relative rounded-2xl overflow-hidden mb-8 border border-gray-800 bg-[#1A1A24]/50 backdrop-blur-sm">
      {/* Cover Image */}
      <div className="h-32 md:h-48 w-full bg-gradient-to-r from-brand-orange/40 via-purple-500/30 to-blue-500/20"></div>

      <div className="px-6 sm:px-10 pb-8">
        <div className="relative flex justify-between items-end -mt-12 sm:-mt-16 mb-4">
          <div className="flex items-end gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-[#0A0B1A] border-4 border-[#1A1A24] flex items-center justify-center p-2 shadow-xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-brand-orange to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  SP
                </span>
              </div>
            </div>

            <div className="pb-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Student Profile
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-400 font-mono text-sm bg-black/40 px-2 py-1 rounded">
                  SP31...8GZ4
                </span>
                <button className="text-gray-500 hover:text-white transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex gap-3 pb-2">
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-white/10">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-800/50">
          <div>
            <div className="text-gray-400 text-sm mb-1">Total XP</div>
            <div className="text-2xl font-bold text-white">4,250</div>
          </div>
          <div>
            <div className="text-gray-400 text-sm mb-1">Courses Completed</div>
            <div className="text-2xl font-bold text-white">3</div>
          </div>
          <div>
            <div className="text-gray-400 text-sm mb-1">Projects Built</div>
            <div className="text-2xl font-bold text-white">2</div>
          </div>
          <div>
            <div className="text-gray-400 text-sm mb-1">Global Rank</div>
            <div className="text-2xl font-bold text-brand-orange">#142</div>
          </div>
        </div>
      </div>
    </div>
  );
}
