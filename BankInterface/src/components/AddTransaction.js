import React, { useContext } from 'react'
import { useState } from "react";
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { AddTransaction } = useContext(GlobalContext)

    const submit = e => {
        e.preventDefault()

        const NewTransaction = {
            id: Math.floor(Math.random() * 100000000),
                text,
                amount: +amount
        }
        AddTransaction(NewTransaction)
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="text">Description</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text.." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Transaction Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount.." />
                </div>
                <button className="btn">Add Trasaction</button>
            </form>
        </div>
    )
}
