import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-5xl font-extrabold text-slate-900">Admin Dashboard</h1>

      <p className="mt-4 text-lg opacity-80">Manage users, visits, reports & more.</p>

      <div className="grid grid-cols-3 gap-6 mt-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-xl">Users</h2>
          <p className="text-sm opacity-70 mt-2">View & manage client accounts.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-xl">Visits</h2>
          <p className="text-sm opacity-70 mt-2">Schedule & log home checks.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-xl">Reports</h2>
          <p className="text-sm opacity-70 mt-2">Upload & manage inspection reports.</p>
        </div>
      </div>
    </div>
  );
}
