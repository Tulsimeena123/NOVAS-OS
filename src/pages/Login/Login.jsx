import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import { loginAccount } from "../../appwrite/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      await loginAccount(email, password);

      setEmail("");
      setPassword("");

      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <>
      <Navbar />

      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
        <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">

          <h1 className="mb-2 text-center text-4xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="mb-8 text-center text-slate-400">
            Login to continue using NOVAS OS
          </p>

          <div className="space-y-5">

            {/* Email */}
            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 py-4 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none focus:border-purple-500"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 py-4 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none focus:border-purple-500"
              />
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full rounded-xl bg-purple-600 py-4 font-semibold text-white transition hover:bg-purple-700"
            >
              Login
            </button>

            {/* Google Button (UI Only) */}
            <button
              className="w-full rounded-xl border border-slate-700 py-4 text-white transition hover:border-purple-500"
            >
              Continue with Google
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
