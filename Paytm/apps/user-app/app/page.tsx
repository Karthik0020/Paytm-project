"use server"

import { Button } from "@repo/ui/button";
import { Appbar } from "@repo/ui/Appbar";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export default async function Home() {
  return <div>
    <Appbar onSignin={signIn} onSignout={signOut}></Appbar>
  </div>
}

