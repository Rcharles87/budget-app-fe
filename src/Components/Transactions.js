import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Transaction from "./Transaction";
import { currencyFormatter, colorChange } from "../utils";
import { Button } from "@mui/material";
import axios from "axios";


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
    console.log()
    
    const handleTotal = (transactionsArr) => {
        let amounts = transactionsArr.map(price => price.amount).reduce((a,b) => a+ Number(b),0)
            setTotal(amounts)
    };

     

    return (
       
       <div>
            <h2 className="text-total">Bank Account Total: <span style={{color:colorChange(total)}}>{currencyFormatter.format(total)}</span> </h2>
            <Button   
            style={{
                border: "1px solid #DD614A",
                color: "#DD614A"
                }} 
            variant="outlined" 
            component={Link} 
            to={"/"}
            >graph
            </Button>


            <div className="color-card">
            {transactions.map((transaction, index, )=>{
                return <Transaction key={index} transaction={transaction} index={index} setTranasctions={setTransactions}/>
            })}
            </div>
          
      
      
        </div>
    )
}

export default Transactions
