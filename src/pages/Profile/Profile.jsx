import { useEffect, useState } from "react";

import Navbar from "../../components/layout/Navbar";

import { getCurrentUser, logoutAccount } from "../../appwrite/auth";

import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();

const [user, setUser] = useState(null);

useEffect(() => {

  async function loadUser() {

    const currentUser = await getCurrentUser();

    setUser(currentUser);

  }

  loadUser();

}, []);

async function handleLogout() {

  await logoutAccount();

  navigate("/login");

}
 return (
  <>
    <Navbar />

    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">

      <div className="w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700 p-8">

        <h1 className="text-4xl font-bold text-white mb-8">
          My Profile 👤
        </h1>

        <div className="space-y-5">

          <div>
            <p className="text-slate-400">Name</p>
            <h2 className="text-2xl text-white font-semibold">
              {user?.name}
            </h2>
          </div>

          <div>
            <p className="text-slate-400">Email</p>
            <h2 className="text-xl text-white">
              {user?.email}
            </h2>
          </div>

          <div>
            <p className="text-slate-400">User ID</p>
            <h2 className="text-sm text-white break-all">
              {user?.$id}
            </h2>
          </div>

          <div>
            <p className="text-slate-400">Joined</p>
            <h2 className="text-white">
              {user
                ? new Date(user.$createdAt).toLocaleDateString()
                : ""}
            </h2>
          </div>

          <button
            onClick={handleLogout}
            className="mt-8 w-full rounded-xl bg-red-600 py-4 font-semibold text-white hover:bg-red-700 transition"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  </>
);
}

export default Profile;