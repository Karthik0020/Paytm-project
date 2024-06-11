import { NextResponse } from "next/server";
import { authOtions } from "../../lib/auth";
import { getServerSession } from "next-auth";


export const GET = async () =>{
    const session = await getServerSession(authOtions)
    if(session.user) {
        return NextResponse.json({
            user: session.user
        })
    }
    return NextResponse.json({
        message: "done"
    })
}
