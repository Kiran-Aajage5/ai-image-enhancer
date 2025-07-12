import React from 'react'

export const ImageUpload = (props) => {
  const ShowImageHandler = (e) => {
    const file = e.target.files [0];
    // console.log(e.target.files[0]);
    // condition to check if file is empty 
    if (file){
      props.UploadImageHandler(file);
    }
    
  }
  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl mx-auto px-4'>
       
        <label htmlFor="fileInput" className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6
        text-center hover:border-blue-500 transition-all">
         <input type="file" id="fileInput" className="hidden" onChange={ShowImageHandler}/>   
        <span className="tex-lg font-medium text-gray-600">Click and Drag to Upload Your Image</span>
        </label>
    </div>
  );
};

export default ImageUpload;
