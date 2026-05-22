import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './FirebaseConfig';

// Pages ko import kar rahe hain
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import Explore from './pages/Explore';
import Dashboard from './pages/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#020617] font-sans">
        <Routes>
          {/* Public Route */}
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />} 
          />

          {/* All Protected Routes (Fully Active) */}
          <Route 
            path="/home" 
            element={isAuthenticated ? <LandingPage /> : <Navigate to="/" replace />} 
          />
          
          <Route 
            path="/explore" 
            element={isAuthenticated ? <Explore /> : <Navigate to="/" replace />} 
          />
          
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />} 
          />

          {/* Catch-all Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;