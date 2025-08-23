import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MuthootIcon } from "../../icons/muthoot";
import { loginUser } from "../../api"; // Import the loginUser function

export default function UserAuth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Use the loginUser function from your api.js file
      const data = await loginUser({ username, password });

      console.log("Login success:", data);

      localStorage.setItem("token", data.access || data.token);
      setUsername("");
      setPassword("");
      navigate("/user/home");
    } catch (err) {
      // Axios errors are handled differently.
      // You can access the error message from err.response.data.detail
      setError(err.response.data.detail || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <MuthootIcon className="w-32 h-32 mb-8" />
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl mb-5 font-semibold text-center">User Authentication</h1>
        {error && <p className="text-red-600 mb-3 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border px-3 py-2 rounded"
            required
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-3 py-2 rounded"
            required
            autoComplete="off"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-red-500 text-white py-2 rounded hover:bg-gray-600 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}