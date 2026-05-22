import Navbar from '../components/Navbar';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-extrabold mb-8">My Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Stats Cards */}
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-slate-400 text-sm font-medium mb-2">Books Read</h3>
            <p className="text-4xl font-bold text-indigo-400">12</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-slate-400 text-sm font-medium mb-2">Saved Resources</h3>
            <p className="text-4xl font-bold text-cyan-400">5</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-slate-400 text-sm font-medium mb-2">Reading Streak</h3>
            <p className="text-4xl font-bold text-emerald-400">3 Days</p>
          </div>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 border-b border-slate-800 pb-4">Continue Reading</h2>
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-800/30 rounded-xl">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <div className="w-12 h-16 bg-indigo-500/20 rounded flex items-center justify-center text-xl">📖</div>
              <div>
                <h4 className="font-bold">Advanced React Patterns</h4>
                <p className="text-sm text-slate-400">Page 45 of 320</p>
              </div>
            </div>
            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition-colors">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}