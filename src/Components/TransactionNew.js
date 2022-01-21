import { useState } from "react"
import { useNavigate } from "react-router-dom"
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
                id="itemName"
                value={transaction.itemName}
                onChange={handleTextChange}
                placeholder="Name"
                type="text" 
                />
                <label htmlFor="amount">Amount:</label>
                <input 
                id="amount"
                value={transaction.amount}
                onChange={handleTextChange}
                placeholder="Amount"
                type="number" 
                />
                <label htmlFor="date">Date:</label>
                <input 
                id="date"
                value={transaction.date}
                onChange={handleTextChange}
                placeholder="Date"
                type="date"
                />
                <label htmlFor="from">From:</label>
                <input 
                id="from"
                value={transaction.from}
                onChange={handleTextChange}
                placeholder="From"
                type="text" 
                />
                <label htmlFor="category">Category:</label>
                <input 
                id="category"
                value={transaction.category}
                onChange={handleTextChange}
                placeholder="Category"
                type="text" 
                />
                <input type="submit" />

            </form>
            
        </div>
    )
}

export default TransactionNew
