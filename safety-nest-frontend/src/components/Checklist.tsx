export default function Checklist() {
  return (
    <section className="py-28 bg-white" id="checklist">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Home Watch Checklist
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Every Safety Nest Home Check follows this standardized inspection list to ensure nothing is missed.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* 1. EXTERIOR */}
          <div className="p-8 border border-slate-200 rounded-xl bg-slate-50 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Exterior</h3>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li>✔ Front door locked & secure</li>
              <li>✔ All exterior doors locked</li>
              <li>✔ Windows visually secure</li>
              <li>✔ No cracked or broken windows</li>
              <li>✔ Roofline & gutters look normal</li>
              <li>✔ No debris buildup or sagging</li>
              <li>✔ Yard clear of debris</li>
              <li>✔ No fallen branches</li>
              <li>✔ Perimeter visually normal</li>
              <li>✔ Pool/Lanai area visually normal</li>
            </ul>
          </div>

          {/* 2. INTERIOR – GENERAL */}
          <div className="p-8 border border-slate-200 rounded-xl bg-slate-50 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Interior – General</h3>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li>✔ No odors, mildew, or abnormal humidity</li>
              <li>✔ Floors dry</li>
              <li>✔ Walls & ceilings show no leaks/stains</li>
              <li>✔ Lights working</li>
              <li>✔ Interior doors & windows secure</li>
              <li>✔ No pests or insects present</li>
              <li>✔ Overall furniture condition normal</li>
            </ul>
          </div>

          {/* 3. KITCHEN */}
          <div className="p-8 border border-slate-200 rounded-xl bg-slate-50 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Kitchen</h3>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li>✔ Under-sink plumbing dry</li>
              <li>✔ Faucets run leak-free</li>
              <li>✔ Appliances in working order</li>
              <li>✔ No water on floors</li>
            </ul>
          </div>

          {/* 4. BATHROOMS */}
          <div className="p-8 border border-slate-200 rounded-xl bg-slate-50 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Bathrooms</h3>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li>✔ Faucets run properly</li>
              <li>✔ Toilets flushed</li>
              <li>✔ Pipes & drains leak-free</li>
              <li>✔ No mold signs</li>
            </ul>
          </div>

          {/* 5. HVAC */}
          <div className="p-8 border border-slate-200 rounded-xl bg-slate-50 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">HVAC</h3>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li>✔ AC running normally</li>
              <li>✔ No unusual odors</li>
              <li>✔ AC filter condition normal</li>
              <li>✔ Vents free of dust</li>
              <li>✔ Temperature reading logged</li>
            </ul>
          </div>

          {/* 6. STORM CHECK */}
          <div className="p-8 border border-slate-200 rounded-xl bg-slate-50 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Storm Check</h3>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li>✔ Roof impact visible from ground</li>
              <li>✔ Screens / lanai damage</li>
              <li>✔ Fence damage</li>
              <li>✔ Window leaks</li>
              <li>✔ Pooling water / flooding</li>
              <li>✔ Debris in yard</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
