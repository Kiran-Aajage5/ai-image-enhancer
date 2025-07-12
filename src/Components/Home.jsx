import React from 'react'
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from 'react';
import { enhancedImageAPI } from '../utils/enhancedImageApi';

export const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading,setloading] = useState(false);
  // uploadimg
  const UploadImageHandler = async (file) => {
      setUploadImage(URL.createObjectURL(file));
      console.log(URL.createObjectURL(file));
      setloading(true);
      try{
        // call API to enhace img
         // Code which may produce Error
        const enhancedURL = await enhancedImageAPI(file)
        setEnhancedImage(enhancedURL.image);
        setloading(false);
       

      } catch (error){
        // code to handel the error and show message
        console.log(error);
        alert("Error while enhancing the image. Please Try Again Later. ");

      }
      
      
  }

      // console.log(enhancedImage.image);
  return (

      <div className="w-full max-w-6xl mx-auto p-4">
      <ImageUpload UploadImageHandler={UploadImageHandler}/>
      <ImagePreview 
      loading={loading} 
      uploaded={uploadImage} 
     enhanced={enhancedImage}
      />
    </div>
    
   
  );
};
export default Home;