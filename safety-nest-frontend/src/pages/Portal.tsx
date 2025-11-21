import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PortalNavbar from "../components/PortalNavbar";
import emptyImg from "../images/comingsoon.jpg"; // temporary illustration

type User = {
  id: string;
  email: string;
};

export default function Portal() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(userData));
  }, [navigate]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-brand-brown text-lg">
        Loading Portal...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream">
      <PortalNavbar />

      <div className="max-w-6xl mx-auto mt-10 px-6 pb-20">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-4xl font-extrabold text-brand-brown">
            Welcome back, {user.email.split("@")[0]}
          </h2>
          <p className="mt-2 text-brand-brown/70 text-lg">
            Your personalized home watch dashboard is below.
          </p>
        </div>

        {/* SHORTCUTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <button
            className="p-6 bg-white rounded-xl shadow-soft border border-brand-brown/10 text-left hover:shadow-md transition"
            onClick={() => navigate("/contact?plan=custom")}
          >
            <h3 className="text-lg font-semibold text-brand-brown">➕ Request a Visit</h3>
            <p className="mt-2 text-brand-brown/60 text-sm">Schedule a custom home check.</p>
          </button>

          <button
            className="p-6 bg-white rounded-xl shadow-soft border border-brand-brown/10 text-left hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-brand-brown">📁 View All Reports</h3>
            <p className="mt-2 text-brand-brown/60 text-sm">Your past visit logs & photos.</p>
          </button>

          <button
            className="p-6 bg-white rounded-xl shadow-soft border border-brand-brown/10 text-left hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-brand-brown">⚙️ Update Profile</h3>
            <p className="mt-2 text-brand-brown/60 text-sm">Manage your account settings.</p>
          </button>
        </div>

        {/* DASHBOARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* NEXT VISIT */}
          <div className="p-6 bg-white rounded-xl shadow-soft border border-brand-brown/10">
            <h3 className="text-xl font-semibold text-brand-brown">Next Visit</h3>
            <p className="mt-2 text-brand-brown/70 text-sm">No visits scheduled.</p>
          </div>

          {/* LATEST REPORT */}
          <div className="p-6 bg-white rounded-xl shadow-soft border border-brand-brown/10">
            <h3 className="text-xl font-semibold text-brand-brown">Latest Report</h3>
            <p className="mt-2 text-brand-brown/70 text-sm">No reports uploaded yet.</p>
          </div>

          {/* STATUS */}
          <div className="p-6 bg-white rounded-xl shadow-soft border border-brand-brown/10">
            <h3 className="text-xl font-semibold text-brand-brown">Account Status</h3>
            <p className="mt-2 text-brand-brown/70 text-sm">Active</p>
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-brand-brown mb-4">
            Recent Activity
          </h3>

          <div className="bg-white rounded-xl p-8 border border-brand-brown/10 shadow-soft">
            <img
              src={emptyImg}
              alt="No activity"
              className="w-64 opacity-50 mx-auto mb-6 rounded-lg"
            />

            <p className="text-center text-brand-brown/70">
              No activity yet — once your first inspection is completed,
              logs & photos will show up here.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
