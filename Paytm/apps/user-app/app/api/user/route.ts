import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient()

export const POST = async () =>{
    
    return NextResponse.json({
        message: "done"
    })
}