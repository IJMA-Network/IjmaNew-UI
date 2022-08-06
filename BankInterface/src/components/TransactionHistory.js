import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { AccountSummary } from './AccountSummary'

export const TransactionHistory = () => {

const {transactions} = useContext(GlobalContext)
// console.log(context);

    return (
        <>
            <h3>Transaction History</h3>
            <ul  className="list">
                {transactions.map(transaction=>(
               <AccountSummary key={transaction.id} transaction={transaction} />

                ))}
            </ul>
        </>
    )
}
