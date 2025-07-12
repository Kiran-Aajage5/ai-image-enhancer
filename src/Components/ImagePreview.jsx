import React from 'react'

// 
import Loading from "./Loading";

export const ImagePreview = (props) => {
  const showOriginal = props.uploaded;
  const showEnhanced = props.enhanced && !props.loading;

  const boxHeight = "h-[450px]"; // You can change to 500px if you want slightly taller boxes

  return (
    <div className="mt-8 flex flex-col sm:flex-row justify-center items-start gap-6 w-full max-w-6xl mx-auto px-4">
      
      {/* Original Image Box */}
      <div className={`flex-1 bg-white shadow-xl rounded-xl max-w-md w-full ${boxHeight} overflow-hidden`}>
        <h2 className="text-xl font-semibold text-center bg-blue-900 text-white py-2">Original</h2>
        {showOriginal ? (
          <img
            src={props.uploaded}
            alt="Original"
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image Selected
          </div>
        )}
      </div>

      {/* Enhanced Image Box */}
      <div className={`flex-1 bg-white shadow-xl rounded-xl max-w-md w-full ${boxHeight} overflow-hidden`}>
        <h2 className="text-xl font-semibold text-center bg-blue-700 text-white py-2">Enhanced</h2>
        {props.loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loading />
          </div>
        ) : showEnhanced ? (
          <img
            src={props.enhanced}
            alt="Enhanced"
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
