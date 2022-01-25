import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Card } from "react-bootstrap"
import { currencyFormatter, dateFormatter } from "../utils";

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
    const [transaction, setTransaction] = useState({});
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
        <Card>
            <Card.Body className="detail-card">

            <Card.Title className="justify-content-between align-items-baseline fw-normal mb-3">
                <div>Item Name: {transaction.itemName}</div>
                <div>Amount: {currencyFormatter.format(transaction.amount)}</div>
                <div>Date: {dateFormatter(transaction.date)}</div>
                <div>From: {transaction.from}</div>
                <div>Category: {transaction.category}</div>
            </Card.Title>

            <div>
                <Button 
                    style={{
                        border: "1px solid #DD614A",
                        color: "#DD614A"
                    }}
                    variant="outlined" 
                    component={Link} 
                    to={"/transactions"}
                    >Back
                </Button>
                <Button 
                    style={{
                        border: "1px solid #DD614A",
                        color: "#DD614A"
                    }}
                    variant="outlined" 
                    component={Link} 
                    to={`/transactions/${index}/edit`}
                    >Edit
                </Button>

                <Button 
                    style={{
                        border: "1px solid #DD614A",
                        color: "#DD614A"
                    }}
                    variant="outlined" 
                    onClick={handleDelete}
                    >Delete
                </Button>
            </div>
     
            </Card.Body>
            
        </Card>
    )
}

export default TransactionDetails
