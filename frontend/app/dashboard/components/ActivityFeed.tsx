import { Activity } from "lucide-react";

export default function ActivityFeed() {
  const activities = [
    {
      id: 1,
      type: "course",
      title: "Completed 'Advanced Clarity Patterns'",
      time: "2 days ago",
      icon: "🎓",
      points: "+150 XP",
    },
    {
      id: 2,
      type: "project",
      title: "Attached project 'NFT Marketplace'",
      time: "1 week ago",
      icon: "🚀",
      points: "+300 XP",
    },
    {
      id: 3,
      type: "nft",
      title: "Earned badge: 'DeFi Builder'",
      time: "2 weeks ago",
      icon: "🏅",
      points: "+500 XP",
    },
    {
      id: 4,
      type: "login",
      title: "Joined Stacks Academy",
      time: "1 month ago",
      icon: "👋",
      points: "+50 XP",
    },
  ];

  return (
    <div className="bg-[#1A1A24]/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm h-full">
      <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
        <Activity className="text-brand-orange w-5 h-5" />
        Activity Feed
      </h2>

      <div className="relative border-l border-gray-800 ml-3 space-y-8 pb-4">
        {activities.map((activity) => (
          <div key={activity.id} className="relative pl-6">
            {/* Timeline Dot */}
            <div className="absolute -left-3.5 top-0.5 w-7 h-7 bg-[#1A1A24] border border-gray-700 rounded-full flex items-center justify-center text-xs">
              {activity.icon}
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
              <div>
                <p className="text-white text-sm font-medium">
                  {activity.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
              </div>
              <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded self-start">
                {activity.points}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-sm text-gray-400 hover:text-white border border-transparent hover:border-gray-800 rounded-lg transition-colors">
        Load More Activity
      </button>
    </div>
  );
}
