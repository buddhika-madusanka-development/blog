import { connectDB } from "@/libs/db.config";
import Post from "@/libs/models/Post.model";
import { NextResponse } from "next/server";

export async function GET () {

    try{

        // create connection between app and database
        await connectDB();
    
        // access datanase amd access the blog data
        const blogs = await Post.find();

        if(!blogs){
            console.log("There is no blog data...")
        }

        // access the post and get author details from the author dataset
        // there use promise all function because of there send set of async requests
        const posts = await Promise.all(
            blogs.map( async (blog) => {

                const response = await fetch(`http://localhost:3000/api/authors/${blog.auth_id}`)

                if(!response.ok){
                    throw new Error("Something went wrong in author details fetching process....");
                }
                
                const author_details = await response.json();

                return {
                    ...blog.toObject(),
                    author : author_details
                }
                
            })
        )
        return NextResponse.json(posts, {status : 200})
        
    }
    catch(err){
        return NextResponse.json("Something went wrong...."+ err);
    }
    
}