import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
    const [transaction, setTransaction] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/transactions/${index}`)
        .then((res)=>{
            setTransaction(res.data)
        })
        .catch((err)=>{
            throw err
        })
    },[]);

    const handleDelete = () => {
        axios.delete(`${API}/transactions/${index}`)
        .then(()=>{
            navigate('/transactions')
        }).catch((err)=>{
            throw err
        })
    }



    return (
        <div>
            <div>
                <h2>Item Name: {transaction.itemName}</h2>
                <h2>Amount: {transaction.amount}</h2>
                <h2>Date: {transaction.date}</h2>
                <h2>From: {transaction.from}</h2>
                <h2>Category: {transaction.category}</h2>
            </div>

            <div>

            <Link to={"/transactions"}>
                <button>Back</button>
            </Link>

            <Link to={`/transactions/${index}/edit`}>
                <button>Edit</button>
            </Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
     
            
        </div>
    )
}

export default TransactionDetails
