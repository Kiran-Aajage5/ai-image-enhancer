import React from 'react'

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
      <p className="text-sm text-gray-500">Enhancing image...</p>
    </div>
  );
};

export default Loading;
