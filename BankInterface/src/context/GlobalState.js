import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
// Inital State
const initialState = {

    transactions: [
        // { id: 1, text: 'flower1', amount: -20 },
        // { id: 2, text: 'flower2', amount: +300 },
        // { id: 3, text: 'flower3', amount: -10 },
        // { id: 4, text: 'flower4', amount: 150 },
    ]

}

// Create Context

export const GlobalContext = createContext(initialState);

// Provider component 

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction(id) {

        dispatch({
            type: 'DELET_TRANSACTION',
            payload: id
        })

    }

    function AddTransaction(transaction) {

        dispatch({
            type: 'ADD_TRANSCATION',    
            payload: transaction
        })

    }


    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                deleteTransaction,
                AddTransaction

            }}>
            {children}
        </GlobalContext.Provider>
    )

}