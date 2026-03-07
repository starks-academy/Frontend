"use client";

import { useState } from "react";
import { FolderGit2, Plus, ExternalLink, Github } from "lucide-react";

export default function ProjectsList() {
  const [isAttaching, setIsAttaching] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Stacks Academy DAO",
      description:
        "A decentralized autonomous organization contract for community governance. Built with Clarity 2.0.",
      repoUrl: "#",
      liveUrl: "#",
      status: "Deployed",
      tags: ["Clarity", "DAO", "Governance"],
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description:
        "A secondary marketplace for trading SIP-009 NFTs utilizing escrow holding.",
      repoUrl: "#",
      liveUrl: null,
      status: "In Progress",
      tags: ["SIP-009", "Marketplace"],
    },
  ];

  return (
    <div className="bg-[#1A1A24]/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <FolderGit2 className="text-brand-orange w-5 h-5" />
          Attached Projects
        </h2>
        <button
          onClick={() => setIsAttaching(true)}
          className="flex items-center gap-2 bg-brand-orange/10 hover:bg-brand-orange/20 text-brand-orange border border-brand-orange/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          Attach Project
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group bg-black/40 border border-gray-800 rounded-lg p-5 hover:border-gray-600 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                {project.title}
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-full border ${
                  project.status === "Deployed"
                    ? "bg-green-500/10 text-green-400 border-green-500/20"
                    : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-sm text-gray-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-4 border-t border-gray-800 border-dashed">
              <a
                href={project.repoUrl}
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                Repository
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-1.5 text-sm text-brand-orange hover:text-orange-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {isAttaching && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1A1A24] border border-gray-800 rounded-xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Attach New Project</h3>
              <p className="text-sm text-gray-400 mb-6">
                Link a project you've built to your Stacks Academy profile to
                earn XP and show up on the Builders gallery.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Project Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-orange"
                    placeholder="e.g. My Amazing DAO"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    GitHub Repository URL
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-orange"
                    placeholder="https://github.com/..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Live URL (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-orange"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-8">
                <button
                  onClick={() => setIsAttaching(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsAttaching(false)}
                  className="bg-brand-orange hover:bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_rgba(245,131,32,0.3)]"
                >
                  Link Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
