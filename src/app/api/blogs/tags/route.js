import { connectDB } from "@/libs/db.config";
import Post from "@/libs/models/Post.model";
import { NextResponse } from "next/server";

export async function GET(req) {

    try{

        // make connection with the database
        await connectDB();
    
        // get data from the database
        const blogs = await Post.find();

        if(!blogs) {
            throw new Error("Something went wrong in fetching blogss...")
        }

        try{

            let tag_store = [];
    
            blogs.forEach(blog => {
                const temp_tags = blog.tags;
                temp_tags.forEach(tags => {
                    tag_store.push(tags)
                })
            });
    
            const tags = [...new Set(tag_store)]
            
            return NextResponse.json(tags, {status : 200})
        }
        catch(err){
            return NextResponse.json({"message" : err}, {status:500})
        }
    }
    catch(err) {
        return NextResponse.json({"message" : err}, {status:500})
    }

    
}