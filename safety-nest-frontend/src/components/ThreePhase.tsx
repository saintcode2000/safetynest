import { CheckCircleIcon } from "@heroicons/react/24/solid";
import ThreePhaseImage from '../images/3phase.jpg'; 

export default function ThreePhase() {
  return (
    <section className="py-28 bg-slate-100" id="3phase">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* TEXT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8">
            3-Phase Home Watch Inspection
          </h2>

          <div className="space-y-8">

            {/* PHASE 1 */}
            <div className="flex items-start gap-4">
              <CheckCircleIcon className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Phase 1: Full Inspection</h3>
                <p className="mt-2 text-slate-600">
                  A complete walk-through using our standardized Safety Nest inspection checklist. 
                  We check the most common Florida home issues — leaks, moisture, pests, AC, and security.
                </p>
              </div>
            </div>

            {/* PHASE 2 */}
            <div className="flex items-start gap-4">
              <CheckCircleIcon className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Phase 2: Photo Documentation</h3>
                <p className="mt-2 text-slate-600">
                  High-resolution photos of key areas: AC, water heater, breaker panel, windows, 
                  pool, lawn, and any areas of concern — all delivered directly to your portal.
                </p>
              </div>
            </div>

            {/* PHASE 3 */}
            <div className="flex items-start gap-4">
              <CheckCircleIcon className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Phase 3: Final Secure Check</h3>
                <p className="mt-2 text-slate-600">
                  After inspection, we secure all doors, set the alarm, turn off lights, and shut off
                  the water main as needed. Your property is left safely locked and documented.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-xl">
          {/* FIX: Changed src to use the new import variable name */}
          <img src={ThreePhaseImage} alt="Image of a 3-phase home watch inspection process"/>
          </div>
        </div>

      </div>
    </section>
  );
}