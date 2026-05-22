// src/components/Hero.jsx
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            v2.0 is now live
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Your Premium <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
            Developer Resource Hub
          </span>
        </h1>
        
        <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Access high-quality programming books, roadmaps, and UI/UX assets. Read PDFs directly in your browser with our state-of-the-art viewer.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link 
            to="/explore" 
            className="px-8 py-4 w-full sm:w-auto text-lg font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)] transition-all duration-300"
          >
            Explore Library
          </Link>
          <a 
            href="#features" 
            className="px-8 py-4 w-full sm:w-auto text-lg font-bold text-slate-300 bg-slate-900 border border-slate-700 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-300"
          >
            View Features
          </a>
        </div>
      </div>
    </div>
  );
}