import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  NotebookPen,
  CheckSquare,
  User,
} from "lucide-react";
function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r border-slate-800 bg-slate-950 p-6">

      <h1 className="mb-10 text-3xl font-bold text-purple-500">
        ⬢ NOVAS
      </h1>

      <nav className="flex flex-col gap-4">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
          `rounded-lg px-4 py-3 transition ${
           isActive
           ? "bg-purple-600 text-white"
           : "hover:bg-purple-600 hover:text-white"
            }`
            }
        >
          <div className="flex items-center gap-3">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
          </div>
        </NavLink>
        
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
          `rounded-lg px-4 py-3 transition ${
           isActive
           ? "bg-purple-600 text-white"
           : "hover:bg-purple-600 hover:text-white"
            }`
            }
        >
          <div className="flex items-center gap-3">
          <NotebookPen size={20} />
          <span>Notes</span>
          </div>
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
          `rounded-lg px-4 py-3 transition ${
           isActive
           ? "bg-purple-600 text-white"
           : "hover:bg-purple-600 hover:text-white"
            }`
            }
        >
          <div className="flex items-center gap-3">
          <CheckSquare size={20} />
          <span>Tasks</span>
          </div>
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
          `rounded-lg px-4 py-3 transition ${
           isActive
           ? "bg-purple-600 text-white"
           : "hover:bg-purple-600 hover:text-white"
            }`
            }
        >
          <div className="flex items-center gap-3">
          <User size={20} />
          <span>Profile</span>
          </div>
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;