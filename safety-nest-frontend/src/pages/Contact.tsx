import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [params] = useSearchParams();
  const selectedPlan = params.get("plan") || "custom";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    plan: selectedPlan,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/api/contact", form);
      alert("Message sent! We'll contact you ASAP.");

      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
        plan: selectedPlan,
      });
    } catch (err) {
      alert("Error sending message.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream p-10 flex justify-center">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-2xl border border-brand-brown/10">
        
        <h1 className="text-4xl font-extrabold text-brand-brown mb-6 text-center">
          Book Your Visit
        </h1>

        <p className="text-brand-brown/80 text-center mb-8">
          Fill out the form below and we’ll reach out shortly.
        </p>

        {/* SELECTED PLAN BADGE */}
        <div className="w-full text-center mb-6">
          <span className="px-4 py-2 bg-brand-orange text-white rounded-full text-sm font-semibold">
            Selected Plan: {selectedPlan}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name */}
          <div>
            <label className="font-semibold text-brand-brown">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-brand-brown/20 rounded-lg focus:ring-brand-orange focus:border-brand-orange"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold text-brand-brown">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-brand-brown/20 rounded-lg focus:ring-brand-orange focus:border-brand-orange"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="font-semibold text-brand-brown">Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-brand-brown/20 rounded-lg focus:ring-brand-orange focus:border-brand-orange"
            />
          </div>

          {/* Address */}
          <div>
            <label className="font-semibold text-brand-brown">Property Address</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-brand-brown/20 rounded-lg focus:ring-brand-orange focus:border-brand-orange"
            />
          </div>

          {/* Message */}
          <div>
            <label className="font-semibold text-brand-brown">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full mt-1 px-4 py-3 border border-brand-brown/20 rounded-lg focus:ring-brand-orange focus:border-brand-orange"
            />
          </div>

          {/* --- SUBMIT BUTTON --- */}
          <button
            type="submit"
            className="w-full py-3 bg-brand-orange text-white text-lg font-semibold rounded-lg hover:bg-brand-brownLight transition"
          >
            Send Request
          </button>

          {/* --- BACK HOME BUTTON (MATCHING STYLE) --- */}
          <a
            href="/"
            className="w-full block text-center mt-4 py-3 bg-brand-brown text-white text-lg 
                       font-semibold rounded-lg hover:bg-brand-brownLight transition flex items-center justify-center gap-2"
          >
            ← Back to Home
          </a>

        </form>
      </div>
    </div>
  );
}
