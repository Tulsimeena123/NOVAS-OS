import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import { CheckCircle2 } from "lucide-react";

import {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} from "../../appwrite/tasks";

import { getCurrentUser } from "../../appwrite/auth";

function Tasks() {
  const [user, setUser] = useState(null);

const [tasks, setTasks] = useState([]);

const [title, setTitle] = useState("");

const [loading, setLoading] = useState(false);
async function handleCreateTask() {

  if (!title) {
    alert("Please enter task title");
    return;
  }

  try {

    setLoading(true);

    await createTask(
      title,
      user.$id
    );

    setTitle("");

    await loadTasks(user.$id);

  } catch (error) {

    alert(error.message);

  } finally {

    setLoading(false);

  }

}

async function loadTasks(userId) {
  try {
    const response = await getTasks(userId);
    setTasks(response.rows);
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  async function fetchUser() {
    const currentUser = await getCurrentUser();
    console.log("Current User:", currentUser);

    if (currentUser) {
      setUser(currentUser);
      await loadTasks(currentUser.$id);
    }
  }

  fetchUser();
}, []);
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 px-8 py-10">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10 flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold text-white">
                My Tasks
              </h1>

              <p className="mt-2 text-slate-400">
                Stay productive by managing your daily work.
              </p>
            </div>

            <button
              onClick={handleCreateTask}
              disabled={loading}
              className="rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700 disabled:opacity-50"
            >
              {loading ? "Adding..." : "+ Add Task"}
            </button>
          </div>
          <div className="mb-8">
            <input
              type="text"
              placeholder="Enter Task..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-purple-500"
            />
          </div>

          <div className="space-y-5">
            {tasks.map((task) => (
              <div
                key={task.$id}
                className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-purple-500"
              >
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="text-purple-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {task.title}
                    </h3>

                    <p className="text-slate-400">
                      {task.completed === 1 ? "Completed ✅" : "Pending ⏳"}
                    </p>
                  </div>
                </div>

               <div className="flex gap-3">

                <button
                  onClick={async () => {

                    await updateTask(
                      task.$id,
                      task.completed === 1 ? 0 : 1
                    );

                    await loadTasks(user.$id);

                    }}
                    className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                  >
                    {task.completed === 1 ? "Undo" : "Complete"}
                  </button>

                  <button
                    onClick={async () => {

                    await deleteTask(task.$id);

                    await loadTasks(user.$id);

                  }}
                  className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Delete
                </button>

              </div> 
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default Tasks;