import Post from "@/libs/models/Post.model";
import { RSCPathnameNormalizer } from "next/dist/server/normalizers/request/rsc";
import { NextResponse } from "next/server";
import { FaLongArrowAltUp } from "react-icons/fa";

export async function GET(req) {

    try{

        let blogs;
        
        // access the url tag name
        const url = new URL(req.url);
        const tag = url.pathname.split("tags/")[1];

        // get available tags in the database
        const response = await fetch(`http://localhost:3000/api/blogs/tags`);

        if(!response.ok){
            throw new Error("Something went wrong in fetching tags...");
        }

        const tags = await response.json('http://localhost:3000/api/blogs');

        // check url tag name is include in the tags includes in the database
        
        if(!tags.includes(tag)){
            
            const blog_response = await fetch('http://localhost:3000/api/blogs')
            if(!blog_response.ok){
                throw new Error("Something bad happeing in blogs fetching....");
            }

            blogs = await blog_response.json()
            return NextResponse.json({message : "Didn't found blog related to tag.." , posts : blogs}, {status : 200})
        }

        blogs = await Post.find({tags : {$in : [tag]}})

        return NextResponse.json( blogs , {status : 200})
        
    }
    catch(err){
        return NextResponse.json({"message" : err} , {status : 500})
    }
    
}