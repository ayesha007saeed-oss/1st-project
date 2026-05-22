import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import app from '../FirebaseConfig'; // Firebase config ka path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Asli Sign Out Function
  const handleSignOut = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth); // Firebase se user ko logout karega
      navigate('/'); // Wapas login page par bhej dega
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <nav className="fixed w-full z-50 top-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/home" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <span className="text-xl font-bold text-white tracking-wide">
            Lib<span className="text-indigo-400">rary</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/home" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</Link>
          <Link to="/explore" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Explore Books</Link>
          <Link to="/dashboard" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Dashboard</Link>
        </div>

        {/* Sign Out Button & Mobile Toggle Button */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleSignOut}
            className="hidden md:block px-5 py-2 text-sm font-semibold text-white bg-indigo-600/20 border border-indigo-500/50 rounded-lg hover:bg-indigo-600 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300 cursor-pointer"
          >
            Sign Out
          </button>
          
          {/* Hamburger Icon for Mobile */}
          <button 
            className="md:hidden text-slate-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <Link to="/home" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white">Home</Link>
            <Link to="/explore" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white">Explore Books</Link>
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white">Dashboard</Link>
            <button 
              onClick={() => { setIsOpen(false); handleSignOut(); }} 
              className="text-left text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}