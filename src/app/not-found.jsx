import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <section className="flex flex-col items-center h-screen ">
      <h1 className="text-9xl font-bold text-white mt-28  text-opacity-50">
        404
      </h1>
      <h1 className="text-3xl font-bold text-white mt-8">Page not found</h1>

      <Link
        href="/"
        className="text-3xl font-bold text-gray-400 border mt-10 border-gray-400  rounded-3xl p-1  hover:border-gray-300 hover:text-gray-300 hover:p-2 transition-all"
      >
        Go to Home
      </Link>
    </section>
  );
}

export default NotFound;
