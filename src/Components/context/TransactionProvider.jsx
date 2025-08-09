import { useState } from "react";
import { TransactionContext } from "./TransactionContext";

export default function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [
      ...prev,
      { id: Date.now(), ...transaction }
    ]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
