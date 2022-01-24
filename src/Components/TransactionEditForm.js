import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
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
                <div className='mb-3'>
                    <label for="inputName" class="form-label">Item Name: </label>
                    <input 
                    class="form-control"
                    id="inputName"
                    value={transaction.itemName}
                    onChange={handleTextChange}
                    placeholder="Item Name"
                    type="text"
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount: </label>
                    <input 
                    class="form-control"
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
                    class="form-control"
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
                    class="form-control"
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
                    class="form-control"
                    id="category"
                    value={transaction.category}
                    onChange={handleTextChange}
                    placeholder="Category"
                    type="text"
                    />
                </div>
                <br />
                <Button 
                    style={{
                        border: "1px solid #7A8B99",
                        color: "#7A8B99"
                    }}
                    variant="outlined" 
                    type='submit'
                    >Submit
                </Button>
                <Button 
                    style={{
                        border: "1px solid #7A8B99",
                        color: "#7A8B99"
                    }}
                    variant="outlined" 
                    component={Link} 
                    to={`/transactions/${index}`}
                    >Back
                </Button>
            </form>
            <br />
            
        </div>
    )
}

export default TransactionEditForm
