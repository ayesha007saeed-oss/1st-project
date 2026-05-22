// src/pages/LandingPage.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen smooth-scroll">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}