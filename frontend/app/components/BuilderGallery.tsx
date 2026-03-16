"use client";

import { useEffect, useState } from "react";
import { Heart, ExternalLink, Github, Loader2 } from "lucide-react";
import { galleryApi, GalleryProject } from "@/lib/api/gallery";

const GRADIENTS = [
  "from-blue-600 to-cyan-400",
  "from-purple-600 to-pink-500",
  "from-orange-500 to-yellow-400",
  "from-green-500 to-emerald-300",
  "from-indigo-600 to-blue-400",
  "from-rose-500 to-orange-400",
];

function getInitials(title: string) {
  return title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function BuilderGallery() {
  const [projects, setProjects] = useState<GalleryProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [votedIds, setVotedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    galleryApi
      .getAll(1, 6)
      .then((res) => {
        const list = Array.isArray(res) ? res : ((res as { data: GalleryProject[] })?.data ?? []);
        setProjects(list);
      })
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  const handleVote = async (id: string) => {
    try {
      await galleryApi.vote(id);
      setVotedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
      // Optimistic update of upvote count
      setProjects((prev) =>
        prev.map((p) =>
          p.id === id
            ? { ...p, upvotes: votedIds.has(id) ? p.upvotes - 1 : p.upvotes + 1 }
            : p
        )
      );
    } catch {
      // Silent fail — user may not be authenticated
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Builder Gallery</h2>
      <p className="text-gray-400 mb-12 max-w-xl mx-auto text-sm">
        Community projects built by Stacks Academy graduates — real dApps deployed on Bitcoin.
      </p>

      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="w-10 h-10 text-brand-orange animate-spin" />
        </div>
      ) : projects.length === 0 ? (
        <p className="text-gray-500 py-12">
          No projects yet — be the first to submit yours!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((project, index) => {
            const gradient = GRADIENTS[index % GRADIENTS.length];
            const initials = getInitials(project.title);
            const isVoted = votedIds.has(project.id);

            return (
              <div
                key={project.id}
                className="bg-card-bg border border-card-border rounded-xl overflow-hidden hover:border-[#383A5D] transition-colors flex flex-col group text-left"
              >
                {/* Thumbnail */}
                <div
                  className={`w-full h-48 bg-gradient-to-br ${gradient} relative overflow-hidden flex items-center justify-center`}
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-black/20 rounded-lg border border-white/20 shadow-xl backdrop-blur-md flex items-center justify-center">
                    <span className="text-4xl font-black text-white/60 select-none">
                      {initials}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-semibold mb-2 text-lg">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Links */}
                    <div className="flex items-center gap-3 mb-4">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-white transition-colors"
                          aria-label="GitHub repo"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-brand-orange transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-800 border-dashed">
                    <span className="text-xs font-medium text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
                      {project.category}
                    </span>

                    <button
                      onClick={() => handleVote(project.id)}
                      className={`flex items-center gap-1.5 transition-colors ${
                        isVoted ? "text-red-400" : "text-gray-400 hover:text-red-400"
                      }`}
                      aria-label="Upvote project"
                    >
                      <Heart
                        fill={isVoted ? "currentColor" : "none"}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-medium">
                        {project.upvotes + (isVoted ? 1 : 0)}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
