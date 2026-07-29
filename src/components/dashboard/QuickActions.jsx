function QuickActions() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-2xl font-bold text-white">
        ⚡ Quick Actions
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <button className="rounded-xl bg-purple-600 px-4 py-3 hover:bg-purple-700 transition">
          + New Note
        </button>

        <button className="rounded-xl bg-green-600 px-4 py-3 hover:bg-green-700 transition">
          + Add Task
        </button>

        <button className="rounded-xl bg-blue-600 px-4 py-3 hover:bg-blue-700 transition">
          View Notes
        </button>

        <button className="rounded-xl bg-pink-600 px-4 py-3 hover:bg-pink-700 transition">
          Open Profile
        </button>
      </div>
    </div>
  );
}

export default QuickActions;