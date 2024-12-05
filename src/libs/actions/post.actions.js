
// get single blog details from the database

import { connectDB } from "../db.config"

export const findSingleBlog = async (blog_id) => {

    try{

        // make connection with the database
        await connectDB();

        // find blog post in the database
        const blogResponse = await fetch(`http://localhost:3000/api/blogs/${blog_id}`);

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