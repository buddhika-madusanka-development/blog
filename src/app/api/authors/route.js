import { connectDB } from "@/libs/db.config";
import Author from "@/libs/models/Author.model";
import { NextResponse } from "next/server";

export async function GET() {

    try{

        // create connection with the database
        await connectDB();

        // access the database and return data
        const authors = await Author.find();

        if(!authors) {
            throw new Error("There is no valid authorss....")
        }

        return NextResponse.json(authors, {status : 200});
        
    }
    catch(err) {
        return NextResponse.json("Somthing wente wrong.... " + err)
    }

}