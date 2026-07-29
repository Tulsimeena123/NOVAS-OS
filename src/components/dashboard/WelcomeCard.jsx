function WelcomeCard() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold text-white">
        👋 Welcome Back, Tulsi
      </h2>

      <p className="mt-3 text-slate-400">
        Stay focused today. Keep your notes organized and complete your tasks.
      </p>

      <button className="mt-6 rounded-lg bg-purple-600 px-5 py-2 transition hover:bg-purple-700">
        + Create New Note
      </button>
    </div>
  );
}

export default WelcomeCard;