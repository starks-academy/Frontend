import { Github, Twitter, DiscIcon as Discord } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full border-t border-white/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-16">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tight mb-2">
              Stacks Academy
            </h3>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
            >
              <Twitter className="w-4 h-4" /> Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
            >
              <Discord className="w-4 h-4" /> Discord
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms
            </a>
          </div>
          <p>
            © {new Date().getFullYear()} Stacks Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
