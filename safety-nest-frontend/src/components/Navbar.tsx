import React from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handlePortalClick = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      navigate("/portal");
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-brown/20 shadow-soft">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Safety Nest Home Check Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <h1 className="text-xl font-extrabold tracking-tight text-brand-brown">
            Safety Nest Home Check
          </h1>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-brand-brown/90">
          <a href="#pricing" className="hover:text-brand-brownLight transition">
            Home Watch
          </a>
          <a href="#pricing" className="hover:text-brand-brownLight transition">
            Pricing
          </a>
          <a href="#faq" className="hover:text-brand-brownLight transition">
            About
          </a>

          {/* CONTACT SCROLLER WITH FLASH */}
          <a
            href="#footer-contact"
            onClick={(e) => {
              e.preventDefault();
              const footer = document.getElementById("footer");
              const contactBox = document.getElementById("footer-contact");

              if (footer) {
                footer.scrollIntoView({ behavior: "smooth" });
              }
              if (contactBox) {
                contactBox.classList.add("flash-orange");
                setTimeout(
                  () => contactBox.classList.remove("flash-orange"),
                  2000
                );
              }
            }}
            className="hover:text-brand-brownLight transition"
          >
            Contact
          </a>
        </nav>

        {/* CLIENT PORTAL BUTTON */}
        <button
          onClick={handlePortalClick}
          className="btn-primary text-sm"
        >
          Client Portal
        </button>

      </div>
    </header>
  );
}
