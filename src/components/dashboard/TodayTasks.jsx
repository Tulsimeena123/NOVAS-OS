import { useEffect, useState } from "react";

import { getTasks } from "../../appwrite/tasks";

import { getCurrentUser } from "../../appwrite/auth";
function TodayTasks() {
  const [tasks, setTasks] = useState([]);

useEffect(() => {

  async function loadTasks() {

    const user = await getCurrentUser();

    if (!user) return;

    const response = await getTasks(user.$id);

    setTasks(response.rows.slice(0, 3));

  }

  loadTasks();

}, []);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-2xl font-bold text-white">
        ✅ Today's Tasks
      </h2>

      <div className="space-y-3">
        {tasks.length === 0 ? (

  <div className="rounded-lg bg-slate-800 p-4 text-slate-400">
    No Tasks Yet
  </div>

) : (

  tasks.map((task) => (

    <div
      key={task.$id}
      className="flex items-center gap-3 rounded-lg bg-slate-800 p-4 transition hover:bg-slate-700"
    >

      <input
        type="checkbox"
        checked={task.completed === 1}
        readOnly
      />

      <span
        className={
          task.completed === 1
            ? "line-through text-slate-500"
            : "text-white"
        }
      >
        {task.title}
      </span>

    </div>

  ))

)}
      </div>
    </div>
  );
}

export default TodayTasks;