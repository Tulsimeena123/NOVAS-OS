import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  getCurrentUser,
  logoutAccount,
} from "../../appwrite/auth";

function Navbar() {
  const navigate = useNavigate();

const [user, setUser] = useState(null);

useEffect(() => {
  async function checkUser() {
    const currentUser = await getCurrentUser();
    setUser(currentUser);
  }

  checkUser();
}, []);

async function handleLogout() {
  try {
    await logoutAccount();

    alert("Logged Out Successfully ✅");

    navigate("/login");

  } catch (error) {
    console.log(error);
  }
}
  return (
    <nav className="flex items-center justify-between px-10 py-5 border-b border-slate-700">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-purple-500">
        ⬢ NOVAS
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <Link to="/" className="hover:text-purple-400 transition">
          Home
        </Link>

        <Link to="/notes" className="hover:text-purple-400 transition">
          Notes
        </Link>

        <Link to="/tasks" className="hover:text-purple-400 transition">
          Tasks
        </Link>

        <Link to="/dashboard" className="hover:text-purple-400 transition">
          Dashboard
        </Link>
      </div>

      {/* Login Button */}
      {user ? (
  <button
    onClick={handleLogout}
    className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
  >
    Logout
  </button>
) : (
  <Link
    to="/login"
    className="rounded-lg bg-purple-600 px-5 py-2 font-medium transition hover:bg-purple-700"
  >
    Login
  </Link>
)}
<Link
  to="/profile"
  className="hover:text-purple-400 transition"
>
  Profile
</Link>
    </nav>
  );
}

export default Navbar;