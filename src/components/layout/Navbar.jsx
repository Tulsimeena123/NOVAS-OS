import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentUser, logoutAccount } from "../../appwrite/auth";

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
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0F172A]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-8 lg:px-12">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide text-purple-500"
        >
          ⬢ NOVAS
        </Link>

        {/* Center Links */}
        <div className="flex items-center gap-10 font-medium text-slate-200">
          <Link to="/" className="transition hover:text-purple-400">
            Home
          </Link>

          <Link to="/notes" className="transition hover:text-purple-400">
            Notes
          </Link>

          <Link to="/tasks" className="transition hover:text-purple-400">
            Tasks
          </Link>

          <Link to="/dashboard" className="transition hover:text-purple-400">
            Dashboard
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <Link
            to="/profile"
            className="font-medium text-slate-200 transition hover:text-purple-400"
          >
            Profile
          </Link>

          {user ? (
            <button
              onClick={handleLogout}
              className="rounded-xl bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="rounded-xl bg-purple-600 px-5 py-2 font-semibold text-white transition hover:bg-purple-700"
            >
              Login
            </Link>
          )}

        </div>

      </nav>
    </header>
  );
}

export default Navbar;