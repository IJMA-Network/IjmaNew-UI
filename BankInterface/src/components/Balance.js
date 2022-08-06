import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


export const Balance = () => {

const {transactions} =useContext(GlobalContext)
const amounts = transactions.map(transaction=>transaction.amount)
// console.log(amounts,"amount Balnce");
const total = amounts.reduce((acc,item)=>(acc += item),0).toFixed(2)
// console.log(total,"toatl Balnce");

    return (
        <div>
            <h4>CURRENT BALANCE</h4>
            <h1 id="balance">${total}</h1>
        </div>
    )
}
