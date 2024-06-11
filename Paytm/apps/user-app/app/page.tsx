import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOtions } from "./lib/auth";

export default async function Page() {
    const session = await getServerSession(authOtions)
    if(session?.user){
      redirect('/dashboard')
    } else {
      redirect('api/auth/signin')
    }
}