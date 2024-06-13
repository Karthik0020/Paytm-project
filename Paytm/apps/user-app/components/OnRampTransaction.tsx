import { Card } from "@repo/ui/card";

export const OnRampTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        status: string,
        provider: string
    }[]
}) => {
    if (!transactions) {
        return <Card title="Recent Transactions">
            <div>
                No Recent transaction
            </div>
        </Card>
    }
    return <Card title="Recent Transactions">
        <div>
            {transactions.map(t => <div className="flex justify-between">
            <div>
                <div>
                    Received INR
                </div>
                <div>
                    {t.time.toDateString()}
                </div>    
            </div>    
             <div>
                + Rs {t.amount / 100}
            </div>   
            </div>)}
        </div>
    </Card>
}