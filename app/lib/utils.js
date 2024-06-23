import mongoose from "mongoose";

import { Cloudinary } from "@cloudinary/url-gen";


const connection = {};

export const connectToDB = async () => {
  try {
    // To check if the connection is already established
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};



export const uploadImageToCloudinary = async (img) => {
  const cld = new Cloudinary({
    cloud: {
      cloud_name: "ddo9vanle", 
      api_key: "235561869769683", 
      apiSecret: "-T4JiNuxSlBANv9SlLvzuWYT3dI", // Replace with your Cloudinary API secret
    },
  });

  try {
    const uploadResult = await cld.uploader.upload(img, {
      folder: "Project-images", // Optional: Specify a folder for your images
    });
    return uploadResult.secure_url; // Return the secure URL of the uploaded image
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error;
  }
}