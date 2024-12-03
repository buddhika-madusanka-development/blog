import { connectDB } from "@/libs/db.config";
import User from "@/libs/models/User.model";
import { NextResponse } from "next/server";

export async function GET(req) {

    try{

        // access the url and filter the user id fro the url object
        const url = new URL(req.url);
        const url_user_id = url.pathname.split("users/")[1];

        // check url has any valid user id..
        if(!url_user_id) {
            throw new Error("There is no valid user id...");
        }

        //create connectoin between database and web application
        await connectDB();

        // get the details from the database...
        const user = await User.findOne({user_id : url_user_id });

        if(!user){
            throw new Error("There is no any valid user....");
        }
    
        return NextResponse.json(user , {status : 200})
        
    }
    catch(err){
        return NextResponse.json({"message" : err}, {status : 500})
    }
}