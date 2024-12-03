import mongoose from "mongoose";

// access the mongo uri
const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {

    try{

        // check mongodb connetion string is available or not
        if(!MONGO_URI){
            throw new Error("There is no available database connection.....");
        }
        
        // make connection between database
        const conn = await mongoose.connect(MONGO_URI);
        if(!conn){
            throw new Error("Database connection failed...");
        }
        
    }
    catch(err){
        console.log(err)
    }
    
}

