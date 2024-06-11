"use client"

import {usePathname , useRouter } from "next/navigation"
import React from "react"

export const SidebarItem = ({ href, title, icon}: {href: string; title: string; icon: React.ReactNode}) =>{
    const router = useRouter()
    const pathname = usePathname()
    const selected = pathname === href

    return <div onClick={()=>{
        router.push(href)
    }}>
        <div>
             { icon } 
        </div>
        <div>
            {title}
        </div>
    </div>
}