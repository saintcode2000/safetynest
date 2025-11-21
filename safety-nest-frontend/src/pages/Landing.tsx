import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import PortalShowcase from "../components/PortalShowcase";
import Checklist from "../components/Checklist";
import ThreePhase from "../components/ThreePhase";
import HighRise from "../components/HighRise";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <Hero />
      <Pricing />
      <PortalShowcase />
      <Checklist />
      <ThreePhase />
      <HighRise />
      <FAQ />
      <Footer />
      
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Safety Nest Home Check — All rights reserved.
      </footer>
    </div>
  );
}
