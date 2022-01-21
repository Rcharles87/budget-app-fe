import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";
import { TableBody, Table, TableRow, TableHead, TableCell } from "@mui/material";
import { Card } from "react-bootstrap";
import { currencyFormatter } from "../utils";

const API = process.env.REACT_APP_API_URL;


function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [total, setTotal] = useState(0)


    useEffect(()=>{
        axios.get(`${API}/transactions`)
        .then((res)=>{
            setTransactions(res.data);
            handleTotal(res.data)
        }).catch((err)=>{
            throw err;
        })
    },[])
    
    const handleTotal = (transactionsArr) => {
        // console.log(transactionsArr)
        let amounts = transactionsArr.map(price => price.amount).reduce((a,b) => a+ Number(b),0)
            setTotal(amounts)
    };
     
    

    return (
        // <div>
        //     <h2>Bank Account Total: ${total} </h2>
        //     <section>
        //         <Table>
        //             <TableRow>
        //                 <TableHead>
        //                     <TableCell>Date</TableCell>
        //                     <TableCell>Item Name</TableCell>
        //                     <TableCell>Amount</TableCell>
        //                 </TableHead>
        //             </TableRow>
        //             <TableBody>
        //                 {transactions.map((transaction, index)=>{
        //                     return <Transaction key={index} transaction={transaction} index={index} />
        //                 })}
        //             </TableBody>
        //         </Table>
        //     </section>
            
        // </div>
       
       
<div>

            {transactions.map((transaction, index)=>{
                return <Transaction key={index} transaction={transaction} index={index} />
            })}
            </div>
    )
}

export default Transactions
