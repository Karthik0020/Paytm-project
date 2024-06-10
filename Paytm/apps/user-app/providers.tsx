"use client"

import React from "react"
import { RecoilRoot }  from "recoil"
//@ts-ignore
export const Providers = ({children} : {childern: React.ReactNode}) =>{
    return <RecoilRoot>
        {children}
    </RecoilRoot>
}
