import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import { createAccount } from "../../appwrite/auth";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    try {
      await createAccount(email, password, name);

      alert("Account Created Successfully 🎉");

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <Navbar />

      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
        <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">

          <h1 className="mb-2 text-center text-4xl font-bold text-white">
            Create Account 🚀
          </h1>

          <p className="mb-8 text-center text-slate-400">
            Join NOVAS OS and start your productivity journey.
          </p>

          <div className="space-y-5">

            {/* Name */}
            <div className="relative">
              <User
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 py-4 pl-12 pr-4 text-white placeholder:text-slate-500 outline-none focus:border-purple-500"
              />
            </div>

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

            <button
              onClick={handleSignup}
              className="w-full rounded-xl bg-purple-600 py-4 font-semibold text-white transition hover:bg-purple-700"
            >
              Create Account
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;