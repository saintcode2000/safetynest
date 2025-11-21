import comingSoon from '../images/comingsoon.jpg';

export default function PortalShowcase() {
  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 to-slate-200 relative overflow-hidden">

      {/* Floating glow */}
      <div className="absolute -top-20 right-1/3 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">

        {/* TEXT SIDE */}
        <div>
          <h2 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Your Home.<br />Your Portal.<br />Always Updated.
          </h2>

          <p className="mt-6 text-lg text-slate-700 max-w-md leading-relaxed">
            A personalized dashboard showing visit logs, photos, alerts, 
            and inspection history — right when you need it.
          </p>

          <button
            disabled
            className="inline-block mt-8 px-6 py-3 rounded-xl bg-slate-900 text-white text-lg font-semibold opacity-60 cursor-not-allowed"
          >
            Portal Coming Soon
          </button>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="bg-white/50 backdrop-blur-xl shadow-2xl border border-white/40 rounded-2xl p-4 overflow-hidden">
            <img 
              src={comingSoon} 
              alt="Portal Preview"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
