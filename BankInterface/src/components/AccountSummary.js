import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AccountSummary = ({ transaction }) => {

    const sign = transaction.amount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(GlobalContext)

    return (
        <div>

            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
            </li>
        </div>
    )
}
