import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-slate-200 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* COLUMN 1 — BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Safety Nest Home Check
          </h2>
          <p className="mt-4 text-slate-600 text-sm leading-relaxed">
            Reliable home watch services for absentee homeowners, snowbirds, 
            and Airbnb hosts across Tampa Bay.
          </p>
        </div>

        {/* COLUMN 2 — QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Navigation</h3>
          <ul className="space-y-3 text-slate-600 text-sm">
            <li><a href="#pricing" className="hover:text-blue-600 transition">Pricing</a></li>
            <li><a href="#checklist" className="hover:text-blue-600 transition">Checklist</a></li>
            <li><a href="#3phase" className="hover:text-blue-600 transition">3-Phase Inspection</a></li>
            <li><a href="#highrise" className="hover:text-blue-600 transition">High-Rise Homes</a></li>
            <li><a href="#faq" className="hover:text-blue-600 transition">FAQ</a></li>
          </ul>
        </div>

        {/* COLUMN 3 — SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Services</h3>
          <ul className="space-y-3 text-slate-600 text-sm">
            <li>Weekly Home Watch</li>
            <li>Bi-Weekly Home Watch</li>
            <li>Custom Visits</li>
            <li>Storm Checks</li>
            <li>Seasonal Property Monitoring</li>
          </ul>
        </div>

        {/* COLUMN 4 — CONTACT */}
        <div id="footer-contact">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Us</h3>

          {/* Standard Contact Info */}
          <ul className="space-y-4 text-slate-600 text-sm mb-6">
            <li className="flex items-start gap-3">
              <PhoneIcon className="w-5 h-5 text-slate-500" />
              <a href="tel:+16195096448" className="hover:text-blue-600 transition">
                (619) 509-6448
              </a>
            </li>

            <li className="flex items-start gap-3">
              <EnvelopeIcon className="w-5 h-5 text-slate-500" />
              <a 
                href="mailto:safetynesthomecheck@gmail.com?subject=Safety%20Nest%20Inquiry"
                className="hover:text-blue-600 transition"
              >
                safetynesthomecheck@gmail.com
              </a>
            </li>

            <li className="flex items-start gap-3">
              <MapPinIcon className="w-5 h-5 text-slate-500" />
              <span>Pinellas County, Florida</span>
            </li>
          </ul>

          {/* ACTION CHIPS */}
          <div className="flex flex-wrap gap-3">

            <a
              href="tel:+16195096448"
              className="px-4 py-2 bg-brand-orange text-white rounded-full text-xs font-semibold hover:bg-brand-brownLight transition shadow-sm"
            >
              📞 Call Now
            </a>

            <a
              href="sms:+16195096448"
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-semibold hover:bg-blue-700 transition shadow-sm"
            >
              💬 Text Us
            </a>

            <a
              href="mailto:safetynesthomecheck@gmail.com?subject=Safety%20Nest%20Inquiry"
              className="px-4 py-2 bg-green-600 text-white rounded-full text-xs font-semibold hover:bg-green-700 transition shadow-sm"
            >
              ✉️ Email
            </a>

            <a
              href="https://wa.me/16195096448"
              target="_blank"
              className="px-4 py-2 bg-emerald-600 text-white rounded-full text-xs font-semibold hover:bg-emerald-700 transition shadow-sm"
            >
              🟢 WhatsApp
            </a>

            <a
              href="/safetynest.vcf"
              download
              className="px-4 py-2 bg-slate-800 text-white rounded-full text-xs font-semibold hover:bg-slate-900 transition shadow-sm"
            >
              📇 Save Contact
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}
