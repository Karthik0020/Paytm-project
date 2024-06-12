"use client"

import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null
    },
    onSignin: any,
    onSignout: any
}

export const Appbar = ({user, onSignin, onSignout}: AppbarProps) =>{
    return <div className="flex justify-between boarder-b px-4 border-slate-300">
        <div className="text-lg flex flex-col justify-center">
            PayTM
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onclick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"} </Button>
        </div>
    </div>
}