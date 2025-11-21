// Fix 1: Change the imported variable name from 'high-rise' to 'highRise'
import highRise from '../images/high-rise.jpg';

export default function HighRise() {
    return (
      <section className="py-28 bg-white" id="highrise">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
  
          {/* IMAGE SIDE */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-xl">
            {/* Fix 2: Use the corrected variable name in the src attribute */}
            <img src={highRise} alt="Image of a high-rise building" />
            </div>
          </div>
  
          {/* TEXT SIDE */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              High-Rise Home Watch
            </h2>
  
            <p className="mt-6 text-lg text-slate-600">
              Safety Nest specializes in high-rise home watch for condos and towers in the Tampa Bay area.  
              We understand the unique access points, elevators, garage systems, and building requirements 
              that come with high-rise living.
            </p>
  
            <p className="mt-6 text-lg text-slate-600">
              Whether you live on the 3rd floor or the 33rd, we ensure your property stays secure, climate-stable, 
              and visually inspected from top to bottom during every visit.
            </p>
  
            <ul className="mt-8 text-slate-700 space-y-3 text-sm">
              <li>✔ Familiarity with building access & entry protocols</li>
              <li>✔ AC, humidity, and leak checks for high-rise environments</li>
              <li>✔ Visual inspection of balcony, sliders, and windows</li>
              <li>✔ Vehicle checks (optional upon request)</li>
              <li>✔ Secure lock-up after every visit</li>
            </ul>
          </div>
  
        </div>
      </section>
    );
  }