import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-center px-6">
      <h1 className="text-8xl font-bold text-purple-500">404</h1>

      <h2 className="mt-4 text-3xl font-semibold text-white">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-slate-400">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;