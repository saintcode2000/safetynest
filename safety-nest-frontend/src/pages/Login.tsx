import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Save token
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to portal
      window.location.href = "/portal";

    } 

    catch {
  setError("Server error. Try again.");
}



    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-cream px-6">
      <div className="bg-white shadow-medium border border-brand-brown/10 rounded-soft p-10 w-full max-w-md">
        
        <h2 className="text-3xl font-extrabold text-brand-brown text-center mb-8">
          Client Login
        </h2>

        {error && (
          <p className="bg-red-100 text-red-700 text-sm px-4 py-2 rounded mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block text-brand-brown font-medium mb-1 text-sm">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-brand-brown/30 rounded-soft px-4 py-2 focus:ring-2 focus:ring-brand-orange outline-none"
              placeholder="your@email.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-brand-brown font-medium mb-1 text-sm">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-brand-brown/30 rounded-soft px-4 py-2 focus:ring-2 focus:ring-brand-orange outline-none"
              placeholder="•••••••••"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-brand-orange text-white font-semibold rounded-soft hover:bg-brand-brownLight transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>
    </div>
  );
}
