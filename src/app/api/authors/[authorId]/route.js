import { connectDB } from "@/libs/db.config";
import Author from "@/libs/models/Author.model";
import { NextResponse } from "next/server";

export async function GET(req) {

    try{

        // access the url and filter the author id
        const url = new URL(req.url);
        const author_id = url.pathname.split("authors/")[1];

        // check url has any valid autohr id
        if(!author_id) {
            throw new Error("There is no any valid user id...");
        }

        // create database connection between the application
        await connectDB();

        // access the database and access filter data
        const author = await Author.findOne({auth_id : author_id});

        if(!author){
            throw new Error("Authors not founded...")
        }

        return NextResponse.json(author, {status : 200})

    }
    catch(err){
        return NextResponse.json({"message" : err}, {status : 500})
    }
    
    
}