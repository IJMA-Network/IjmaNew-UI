import React from 'react';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomExpenses } from './components/IncomExpenses';
import { TransactionHistory } from './components/TransactionHistory';
import {GlobalProvider} from './context/GlobalState'
import './App.css';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomExpenses />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
