import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';


const API = process.env.REACT_APP_API_URL;


function TransactionEditForm() {
    let {index } = useParams()
    let navigate = useNavigate()

    const [transaction, setTransaction ] = useState({
        itemName: "",
        amount: 0,
        date: "",
        from: "",
        category: "",
    })

    useEffect(() => {
        axios.get(`${API}/transactions/${index}`)
        .then((res)=>{
            setTransaction(res.data)
        }).catch(()=>{
            navigate("/not-found")
        })

    },[]);

    const handleTextChange = (event) => {
        setTransaction({...transaction, [event.target.id]: event.target.value })
    };

    // const handleDateChange = (event) => {

    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`${API}/transactions/${index}`, transaction)
        .then(()=>{
            navigate(`/transactions/${index}`)
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="itemName">Item Name: </label>
                    <input 
                    id="itemName"
                    value={transaction.itemName}
                    onChange={handleTextChange}
                    placeholder="Item Name"
                    type="text"
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount: </label>
                    <input 
                    id="amount"
                    value={transaction.amount}
                    onChange={handleTextChange}
                    placeholder=""
                    type="number"
                    />
                </div>
                <div>
                    <label htmlFor="date">Date: </label>
                    <input 
                    id="date"
                    value={transaction.date}
                    onChange={handleTextChange}
                    // placeholder="Date"
                    type="date"
                    />
                </div>
                <div>
                    <label htmlFor="from">From: </label>
                    <input 
                    id="from"
                    value={transaction.from}
                    onChange={handleTextChange}
                    placeholder="From"
                    type="text"
                    />
                </div>
                <div>
                    <label htmlFor="category">Category: </label>
                    <input 
                    id="category"
                    value={transaction.category}
                    onChange={handleTextChange}
                    placeholder="Category"
                    type="text"
                    />
                </div>
                <input type="submit" />
            </form>
            <Link to={`/transactions/${index}`}>
            <button>Back</button>
            </Link>
            
        </div>
    )
}

export default TransactionEditForm
