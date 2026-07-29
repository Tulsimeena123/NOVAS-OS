import { useNavigate } from "react-router-dom";
import { logoutAccount } from "../../appwrite/auth";

function Topbar() {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logoutAccount();

      alert("Logged Out Successfully 👋");

      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <header className="flex items-center justify-between border-b border-slate-800 pb-6">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Welcome back! Let's make today productive. 🚀
        </p>
      </div>

      <div className="flex items-center gap-4">

        <button className="rounded-full bg-slate-800 p-3 transition hover:bg-slate-700">
          🔔
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 font-bold">
            T
          </div>

          <div>
            <h3 className="font-semibold text-white">Tulsi</h3>
            <p className="text-sm text-slate-400">Developer</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700"
        >
          Logout
        </button>

      </div>
    </header>
  );
}

export default Topbar;