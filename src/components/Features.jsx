// src/components/Features.jsx
export default function Features() {
  const features = [
    {
      title: "In-Browser PDF Reader",
      desc: "No need to download. Read your favorite developer books directly with our custom dark-mode PDF viewer.",
      icon: "📖",
      color: "group-hover:border-indigo-500"
    },
    {
      title: "Save Your Progress",
      desc: "Our smart bookmarking system remembers exactly where you left off in your reading journey.",
      icon: "🔖",
      color: "group-hover:border-cyan-500"
    },
    {
      title: "Curated Collections",
      desc: "Hand-picked resources sorted by tech stacks. Find exactly what you need for frontend, backend, or UI/UX.",
      icon: "🎯",
      color: "group-hover:border-emerald-500"
    }
  ];

  return (
    <div id="features" className="py-24 bg-[#020617] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Crafted for Developers</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-slate-800/50 ${feature.color}`}
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}