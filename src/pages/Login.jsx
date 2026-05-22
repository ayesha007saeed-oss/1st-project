import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../FirebaseConfig'; // Aapki Firebase config file ka link

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  
  // Naye States for User Data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Puranay errors clear karein

    try {
      if (isLogin) {
        // Real Firebase Login
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // Real Firebase Sign Up
        await createUserWithEmailAndPassword(auth, email, password);
      }
      
      // Login/Signup kamyab hone ke baad Home par le jaye
      navigate('/home', { replace: true });
    } catch (err) {
      // Agar ghalat password ya email ho toh error dikhaye
      setError(err.message.replace("Firebase: ", ""));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-slate-900/60 backdrop-blur-xl p-8 rounded-2xl shadow-[0_0_40px_-10px_rgba(99,102,241,0.2)] border border-slate-800 transition-all duration-500">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Premium E-Library
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            {isLogin ? 'Sign in to access your developer resources' : 'Create your pro reader account'}
          </p>
        </div>

        {/* Agar koi error aata hai (e.g. wrong password), toh yahan laal box mein dikhega */}
        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg text-center">
            {error}
          </div>
        )}

        <div className="flex bg-slate-800/50 p-1 rounded-lg mb-8">
          <button
            onClick={() => { setIsLogin(true); setError(''); }}
            type="button"
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
              isLogin ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => { setIsLogin(false); setError(''); }}
            type="button"
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
              !isLogin ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
              <input 
                type="text" 
                required 
                className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-slate-700 text-white focus:outline-none focus:border-indigo-500" 
                placeholder="John Doe" 
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)} // State connect ki
              className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-slate-700 text-white focus:outline-none focus:border-indigo-500" 
              placeholder="developer@example.com" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)} // State connect ki
              className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-slate-700 text-white focus:outline-none focus:border-indigo-500" 
              placeholder="••••••••" 
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3 px-4 mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all duration-300"
          >
            {isLogin ? 'Access Library' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
}