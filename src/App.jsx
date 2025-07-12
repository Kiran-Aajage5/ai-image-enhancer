
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-pink-100 to-blue-200 flex flex-col items-center justify-center px-4 py-10">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-2 drop-shadow-md">
          AI Image Enhancer
        </h1>
        <p className="text-md sm:text-lg text-gray-600">
          Upload your image and let AI work its magic ✨
        </p>
      </div>

      {/* Main Image Upload + Preview */}
      <Home />

      {/* Footer */}
      <div className="mt-10 text-sm text-gray-600 text-center">
        Crafted with 💡 by <span className="font-semibold text-gray-900">KiranAI</span>
      </div>
    </div>
  );
};

export default App;
