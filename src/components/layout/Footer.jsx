function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold text-purple-400">
            NOVAS OS
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Build. Learn. Organize.
          </p>
        </div>

        <div className="flex gap-6 text-slate-400">
          <a href="#">Home</a>
          <a href="#">Notes</a>
          <a href="#">Tasks</a>
          <a href="#">Dashboard</a>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 NOVAS OS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;