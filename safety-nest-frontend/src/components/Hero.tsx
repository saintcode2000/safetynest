import React from 'react';
import housePic from '../images/housepic.jpg';

export default function Hero() {
  return (
    <section
      className="relative min-h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${housePic})` }}
    >
      {/* Center spotlight */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-white text-6xl md:text-7xl font-extrabold drop-shadow-2xl">
          We Check Your Home Like It’s Our Own
        </h1>

        <p className="mt-6 text-xl text-white/90 drop-shadow">
          Tampa Bay’s premium home watch service for traveling homeowners,
          seasonal residents, and Airbnb hosts.
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <a
            href="#pricing"
            className="px-10 py-4 bg-brand-orange text-white rounded-full text-xl shadow-xl hover:bg-brand-brownLight transition"
          >
            View Pricing
          </a>

          <a
            href="#footer-contact"
            className="px-10 py-4 bg-white/90 text-brand-brown rounded-full text-xl shadow hover:bg-white transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
