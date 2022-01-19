import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;


function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(()=>{
        axios.get(`${API}/transactions`)
        .then((res)=>{
            setTransactions(res.data)
        }).catch((err)=>{
            throw err
        })
    })

    return (
        <div>
            <table>
                <tbody>
                    {transactions.map((transaction, index)=>{
                        return <Transaction key={index} transaction={transaction} index={index} />
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default Transactions
