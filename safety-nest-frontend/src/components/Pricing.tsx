import React from "react";
import { Link } from "react-router-dom";

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({ to, children, className }) => (
  <Link
    to={to}
    className={`w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium 
                hover:bg-blue-700 transition block text-center ${className || ""}`}
  >
    {children}
  </Link>
);

export default function Pricing() {
  return (
    <section className="py-28 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Straightforward plans designed for absentee homeowners and Airbnb hosts.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Custom Visit */}
          <div className="border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition bg-white">
            <h3 className="text-xl font-semibold text-slate-900">Custom Visit</h3>
            <p className="mt-2 text-slate-600">One-time visual check</p>

            <p className="mt-6 text-4xl font-bold text-slate-900">$70</p>
            <p className="text-sm text-slate-500">per visit</p>

            <ul className="mt-8 space-y-3 text-sm text-slate-700">
              <li>✔ Interior + Exterior Check</li>
              <li>✔ Photos + Same-Day Report</li>
              <li>✔ AC + Leak Check</li>
              <li>✔ Pool/Lanai Check</li>
            </ul>

            <ButtonLink 
              to="/contact?plan=custom"
              className="mt-10"
            >
              Book a Visit
            </ButtonLink>
          </div>

          {/* Bi-Weekly */}
          <div className="border border-blue-300 rounded-xl p-8 shadow-lg hover:shadow-xl transition bg-blue-50">
            <h3 className="text-xl font-semibold text-slate-900">Bi-Weekly</h3>
            <p className="mt-2 text-slate-700">2 visits per month</p>

            <p className="mt-6 text-4xl font-bold text-slate-900">$90</p>
            <p className="text-sm text-slate-600">per month</p>

            <ul className="mt-8 space-y-3 text-sm text-slate-700">
              <li>✔ Full Home Watch Checklist</li>
              <li>✔ Customer Portal</li>
              <li>✔ Moisture + HVAC Checks</li>
              <li>✔ Same-Day Response</li>
            </ul>

            <ButtonLink 
              to="/contact?plan=biweekly"
              className="mt-10"
            >
              Get Started
            </ButtonLink>
          </div>

          {/* Weekly */}
          <div className="border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition bg-white">
            <h3 className="text-xl font-semibold text-slate-900">Weekly</h3>
            <p className="mt-2 text-slate-600">4 visits per month</p>

            <p className="mt-6 text-4xl font-bold text-slate-900">$140</p>
            <p className="text-sm text-slate-500">per month</p>

            <ul className="mt-8 space-y-3 text-sm text-slate-700">
              <li>✔ Full Home Watch Checklist</li>
              <li>✔ Detailed Photo Reports</li>
              <li>✔ HVAC + Moisture Check</li>
              <li>✔ Concierge Add-ons</li>
            </ul>

            <ButtonLink 
              to="/contact?plan=weekly"
              className="mt-10"
            >
              Get Started
            </ButtonLink>
          </div>
        </div>

        {/* Emergency */}
        <div className="mt-24 flex justify-center">
          <div className="max-w-xl w-full bg-red-50 border-l-4 border-red-500 rounded-xl p-10 shadow-lg text-center">
            <h3 className="text-3xl font-extrabold text-red-700">
              Storm / Emergency Check
            </h3>

            <p className="mt-3 text-lg text-red-700 font-medium">
              Priority inspection during storms or urgent situations
            </p>

            <p className="mt-5 text-5xl font-extrabold text-red-800">$100</p>

            <p className="mt-4 text-red-700/80 text-sm">
              Immediate exterior + interior walkthrough and alerts.
            </p>

            <ButtonLink 
              to="/contact?plan=emergency"
              className="mt-8 bg-red-600 hover:bg-red-700"
            >
              Request Emergency Check
            </ButtonLink>
          </div>
        </div>

      </div>
    </section>
  );
}
