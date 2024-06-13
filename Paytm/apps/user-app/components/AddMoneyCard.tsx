"use client"

import { Select } from "@repo/ui/Select"
import { TextInput } from "@repo/ui/TextInput"
import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import { useState } from "react"
import { createOnRampTransaction } from "../app/lib/actions/createOnreampTransaction"

const SUPPORTED_BANKS = [ {
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}]

export const AddMoney = () => {
    const [redirectUrl , setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl)
    const [provider , setProvider] = useState(SUPPORTED_BANKS[0]?.name || "")
    const [value , setValue] = useState("")
    return <Card title="Add Monry" >
        <div className="w-full">
            <TextInput label={"amount"} placeholder={"amount"} onChange={(value)=>{
                setValue(value)
            }} />
            <div className="py-4 text-left">
                Bank
            </div>
            <Select onselect={(value) => {
                setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
                setProvider(SUPPORTED_BANKS.find(x => x.name === value)?.name || "")
            }} options={SUPPORTED_BANKS.map(x => ({
                key: x.name,
                value: x.name
            }))} />
            <div className="flex justify-center pt-4">
            <Button onclick={async () => {
                await createOnRampTransaction(provider, Number(value))
                window.location.href = redirectUrl || "";
            }}>
            Add Money
            </Button>
        </div>
        </div>
    </Card>
}