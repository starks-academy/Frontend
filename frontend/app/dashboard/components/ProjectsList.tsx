"use client";

import { useEffect, useState } from "react";
import { FolderGit2, Plus, ExternalLink, Github, Loader2, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { galleryApi, GalleryProject, CreateProjectDto } from "@/lib/api/gallery";

function getStatusLabel(status: string) {
  if (status === "approved") return { label: "Approved", classes: "bg-green-500/10 text-green-400 border-green-500/20" };
  if (status === "pending") return { label: "Pending Review", classes: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" };
  return { label: "Rejected", classes: "bg-red-500/10 text-red-400 border-red-500/20" };
}

const EMPTY_FORM: CreateProjectDto = {
  title: "",
  description: "",
  repoUrl: "",
  liveUrl: "",
  category: "DeFi",
  tags: [],
};

export default function ProjectsList() {
  const { isAuthenticated } = useAuth();
  const [projects, setProjects] = useState<GalleryProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<CreateProjectDto>(EMPTY_FORM);

  useEffect(() => {
    if (!isAuthenticated) {
      setLoading(false);
      return;
    }
    // Fetch this user's gallery projects using the query API
    galleryApi
      .getAll(1, 10)
      .then((res) => {
        // The gallery response wraps in { data, meta } which the client unwraps
        const list = Array.isArray(res) ? res : ((res as { data: GalleryProject[] })?.data ?? []);
        setProjects(list);
      })
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, [isAuthenticated]);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const created = await galleryApi.create(form);
      setProjects((prev) => [created, ...prev]);
      setShowForm(false);
      setForm(EMPTY_FORM);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission failed.";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Remove this project?")) return;
    await galleryApi.delete(id).catch(() => null);
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="bg-[#1A1A24]/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <FolderGit2 className="text-brand-orange w-5 h-5" />
          My Projects
        </h2>
        {isAuthenticated && (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-brand-orange/10 hover:bg-brand-orange/20 text-brand-orange border border-brand-orange/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <Plus className="w-4 h-4" />
            Submit Project
          </button>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="w-8 h-8 text-brand-orange animate-spin" />
        </div>
      ) : !isAuthenticated ? (
        <p className="text-gray-500 text-sm text-center py-6">
          Connect your wallet to view and submit projects.
        </p>
      ) : projects.length === 0 ? (
        <p className="text-gray-500 text-sm text-center py-6">
          No projects yet. Submit your first project to appear in the gallery!
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {projects.map((project) => {
            const { label, classes } = getStatusLabel(project.moderationStatus);
            return (
              <div
                key={project.id}
                className="relative group bg-black/40 border border-gray-800 rounded-lg p-5 hover:border-gray-600 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full border ${classes}`}>
                      {label}
                    </span>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="text-gray-700 hover:text-red-400 transition-colors"
                      aria-label="Delete project"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-4">{project.description}</p>

                {project.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-4 pt-4 border-t border-gray-800 border-dashed">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Repository
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-brand-orange hover:text-orange-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Submit Project Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1A1A24] border border-gray-800 rounded-xl w-full max-w-md shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Submit Project to Gallery</h3>
                <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreate} className="space-y-4">
                {error && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                    {error}
                  </p>
                )}
                {[
                  { label: "Project Name", key: "title", placeholder: "e.g. My DeFi Protocol" },
                  { label: "Repo URL", key: "repoUrl", placeholder: "https://github.com/..." },
                  { label: "Live URL (optional)", key: "liveUrl", placeholder: "https://..." },
                ].map(({ label, key, placeholder }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
                    <input
                      type="text"
                      placeholder={placeholder}
                      required={key !== "liveUrl"}
                      value={(form[key as keyof CreateProjectDto] as string) || ""}
                      onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-600"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="What did you build and what problem does it solve?"
                    value={form.description}
                    onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-orange transition-colors resize-none placeholder:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                  <input
                    type="text"
                    placeholder="e.g. DeFi, NFT, DAO, Tooling"
                    value={form.category}
                    onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-600"
                  />
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-brand-orange hover:bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_rgba(245,131,32,0.3)] disabled:opacity-50 flex items-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      "Submit Project"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
