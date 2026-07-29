import { useEffect, useState } from "react";

import { getCurrentUser } from "../../appwrite/auth";
import { getNotes } from "../../appwrite/notes";
import { getTasks } from "../../appwrite/tasks";
import QuickActions from "../../components/dashboard/QuickActions";
import TodayTasks from "../../components/dashboard/TodayTasks";
import RecentNotes from "../../components/dashboard/RecentNotes";
import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatsCard from "../../components/dashboard/StatsCard";
import Topbar from "../../components/dashboard/Topbar";
import Sidebar from "../../components/dashboard/Sidebar";

function Dashboard() {
  const [notesCount, setNotesCount] = useState(0);

  const [tasksCount, setTasksCount] = useState(0);

  const [completedCount, setCompletedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  useEffect(() => {

  async function loadDashboard() {

    try {

      const user = await getCurrentUser();

      if (!user) return;

      const notes = await getNotes(user.$id);

      const tasks = await getTasks(user.$id);

      setNotesCount(notes.rows.length);

      setTasksCount(tasks.rows.length);

      setCompletedCount(
        tasks.rows.filter(
          (task) => task.completed === 1
        ).length
      );
        setPendingCount(
         tasks.rows.filter((task) => task.completed === 0).length
      );

    } catch (error) {
      console.log(error);
    }

  }

  loadDashboard();

}, []);
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-10">
       <Topbar /> 
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          title="Notes"
          value={notesCount}
          color="text-purple-400"
        />

        <StatsCard
          title="Tasks"
          value={tasksCount}
          color="text-green-400"
        />

        <StatsCard
          title="Completed"
          value={completedCount}
          color="text-blue-400"
        />

        <StatsCard
          title="Pending"
          value={pendingCount}
          color="text-yellow-400"
        />

       </div>
       <WelcomeCard />
       <QuickActions />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <RecentNotes />
        <TodayTasks />
      </div>
      </main>
      </div>
  );
}

export default Dashboard;