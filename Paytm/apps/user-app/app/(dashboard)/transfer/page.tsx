import { getServerSession } from "next-auth"
import { AddMoney } from "../../../components/AddMoneyCard"
import { BalanceCard } from "../../../components/BalanceCard"
import { OnRampTransactions } from "../../../components/OnRampTransaction"
import { authOtions } from "../../lib/auth"
import prisma from "@repo/db/client"


async function getBalance() {
    const session = await getServerSession(authOtions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    })
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

async function getOnRampTransaction() {
    const session = await getServerSession(authOtions)
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    })
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}


export default async function() {
    const balance = await getBalance()
    const transactions = await getOnRampTransaction()

    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Transfer
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
            <div>
                <AddMoney></AddMoney>
            </div>
            <div>
                <BalanceCard amount={balance.amount} locked={balance.locked} />
                <div>
                    <OnRampTransactions transactions={transactions}/>                    
                </div>
            </div>
        </div>
    </div>
}

