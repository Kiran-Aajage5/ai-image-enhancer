import React from "react";

export default function Home() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Tailwind is working!
      </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </button>
    </div>
  );
}
