function Footer() {
  return (
    <footer className="flex justify-center mt-20 border-t border-slate-800 px-6 py-12">

<div className="mx-auto flex w-full max-w-5xl gap-6 flex-col items-center justify-center text-center">        <h2 className="text-3xl font-bold text-purple-400">
          NOVAS OS
        </h2>

        <p className="mt-3 text-slate-400">
          Build. Learn. Organize.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-8 text-slate-400">
          <a href="#" className="hover:text-purple-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-purple-400 transition">
            Notes
          </a>

          <a href="#" className="hover:text-purple-400 transition">
            Tasks
          </a>

          <a href="#" className="hover:text-purple-400 transition">
            Dashboard
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          © 2026 NOVAS OS. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;