import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">

      <h1 className="text-8xl font-bold">

        404

      </h1>

      <p className="mt-4 text-slate-400">

        The page you're looking for doesn't exist.

      </p>

      <Link
        to="/"
        className="mt-8 px-6 py-3 rounded-full bg-blue-600"
      >
        Back Home
      </Link>

    </div>
  );
}

export default NotFound;