
// get single blog details from the database

import { connectDB } from "../db.config"

export const findSingleBlog = async (blog_id) => {

    try{

        // make connection with the database
        await connectDB();

        // find blog post in the database
        const blogResponse = await fetch('http://localhost:3000/api/blogs/7c3af41b-bef8-4b06-ac4e-0ec2b9844e35');

        if(!blogResponse.ok) {
            throw new Error("Something went wrong in post data fetching...");
        }

        const blogPost = await blogResponse.json()
        
        return blogPost;
        
    }
    catch(err){
        console.log("something went wrong in data fetching....  " + err)
    }    
}