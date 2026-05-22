import Navbar from '../components/Navbar';

export default function Explore() {
  // Yeh temporary data hai. Baad mein hum isay Firebase se fetch karenge.
  const books = [
    { id: 1, title: "Advanced React Patterns", author: "Nadia Makarevich", category: "Frontend" },
    { id: 2, title: "Clean Code", author: "Robert C. Martin", category: "Architecture" },
    { id: 3, title: "JavaScript: The Good Parts", author: "Douglas Crockford", category: "Languages" },
    { id: 4, title: "Refactoring UI", author: "Adam Wathan", category: "Design" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Navbar hona zaroori hai taake wapas ja sakein */}
      <Navbar /> 
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
            Library Catalog
          </h1>
          <p className="text-slate-400 text-lg">Browse our premium collection of developer resources.</p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div key={book.id} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(99,102,241,0.5)] transition-all duration-300">
              <div className="h-48 bg-slate-800 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-5xl">📘</span>
              </div>
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">{book.category}</span>
              <h3 className="text-lg font-bold mt-2 mb-1">{book.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{book.author}</p>
              <button className="w-full py-2 bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white rounded-lg transition-colors font-medium">
                Read PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}