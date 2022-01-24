import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Button } from "@mui/material";
import axios from "axios"

const API = process.env.REACT_APP_API_URL;

function TransactionNew() {

    const [ transaction, setTransaction ] = useState({
        itemName: "",
        amount: 0,
        date: "",
        from: "",
        category:"",
    });

    const navigate = useNavigate()

    const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`${API}/transactions`, transaction)
        .then((res)=>{
            navigate("/transactions")
        }).catch((err)=>{
            throw err
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="itemName">Item name:</label>
                <input 
                class="form-control"
                id="itemName"
                value={transaction.itemName}
                onChange={handleTextChange}
                placeholder="Name"
                type="text" 
                />
                <label htmlFor="amount">Amount:</label>
                <input 
                class="form-control"
                id="amount"
                value={transaction.amount}
                onChange={handleTextChange}
                placeholder="Amount"
                type="number" 
                />
                <label htmlFor="date">Date:</label>
                <input 
                class="form-control"
                id="date"
                value={transaction.date}
                onChange={handleTextChange}
                placeholder="Date"
                type="date"
                />
                <label htmlFor="from">From:</label>
                <input 
                class="form-control"
                id="from"
                value={transaction.from}
                onChange={handleTextChange}
                placeholder="From"
                type="text" 
                />
                <label htmlFor="category">Category:</label>
                <input 
                class="form-control"
                id="category"
                value={transaction.category}
                onChange={handleTextChange}
                placeholder="Category"
                type="text" 
                />
                   <Button 
                    style={{
                        border: "1px solid #DD614A",
                        color: "#DD614A"
                    }}
                    variant="outlined" 
                    type='submit'
                    >Submit
                </Button>
                <Button 
                    style={{
                        border: "1px solid #DD614A",
                        color: "#DD614A"
                    }}
                    variant="outlined" 
                    component={Link} 
                    to={`/transactions`}
                    >Back
                </Button>

            </form>
            
        </div>
    )
}

export default TransactionNew
