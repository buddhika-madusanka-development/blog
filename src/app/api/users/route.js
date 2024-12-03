import { connectDB } from "@/libs/db.config";
import User from "@/libs/models/User.model";
import { NextResponse } from "next/server";

export async function GET() {

    try{

        // create connection between database and app
        await connectDB();

        // access data using the database connection and return it
        const users = await User.find();

        if(!users){
            throw new Error("There is no valid users.....");
        }

        return NextResponse.json(users, {status : 200});
        
    }
    catch(err){
        return NextResponse.json(err);
    }
    
}