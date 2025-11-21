import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

export default function PortalNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // back home
  };

  return (
    <header className="w-full bg-white shadow-soft px-8 py-4 flex justify-between items-center border-b border-brand-brown/10">
      
      {/* Left: Logo → Home */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="Safety Nest Logo"
          className="w-12 h-12 rounded-full object-cover"
        />
        <h1 className="text-xl font-extrabold text-brand-brown">
          Safety Nest Portal
        </h1>
      </div>

      {/* Right: Buttons */}
      <div className="flex gap-3">

        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 text-brand-brown font-medium rounded-soft hover:bg-brand-brown/10 transition"
        >
          Home
        </button>

        <button
          onClick={logout}
          className="px-4 py-2 bg-brand-orange text-white rounded-soft hover:bg-brand-brownLight transition"
        >
          Logout
        </button>
      </div>

    </header>
  );
}
