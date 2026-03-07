import ProfileHeader from "./components/ProfileHeader";
import NFTShowcase from "./components/NFTShowcase";
import ProjectsList from "./components/ProjectsList";
import ActivityFeed from "./components/ActivityFeed";

export default function DashboardPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-6">
        {/* Top Section - Profile Card */}
        <ProfileHeader />

        {/* Content Section - 2 Columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Area (Left/Top) */}
          <div className="lg:col-span-2 space-y-6">
            <NFTShowcase />
            <ProjectsList />
          </div>

          {/* Sidebar Area (Right/Bottom) */}
          <div className="lg:col-span-1">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </main>
  );
}
