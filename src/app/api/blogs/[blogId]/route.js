import Post from "@/libs/models/Post.model";
import { NextResponse } from "next/server";

export async function GET(req) {


    try{

        // access the url and filter the blog id
        const url = new URL(req.url);
        const blog_id = url.pathname.split("blogs/")[1];

        // check url has any valid blog id ...
        if(!blog_id) {
            throw new Error("There is no any valid blog id....");
        }
    
        // create connection with the database and web applicaiton
        const blog_post = await Post.findOne({post_id : blog_id})

        if(!blog_post){
            throw new Error("There is no valid post....");
        }

        const authorResponse = await fetch(`http://localhost:3000/api/authors/4ee2b4f2-bdbd-46f6-95d4-6be5f27835d6`);

        if(!authorResponse.ok) {
            throw new Error("Something went wrong in authors data fetching....")
        }

        const author = await authorResponse.json();

        const post = {
            ...blog_post.toObject(),
            author : author
        }
        
        return NextResponse.json(post, {status : 200})
        
    }
    catch(err){
        return NextResponse.json({"message" : err}, {status : 500})
    }
    
}