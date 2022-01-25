import { Link, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { currencyFormatter, dateFormatter  } from "../utils";
import { Button } from "@mui/material";
import axios from "axios";

function Transaction({transaction, index}) {


    const API = process.env.REACT_APP_API_URL;
    // const navigate= useNavigate()

    const handleDelete = (event) => {
        console.log(event)
        axios.delete(`${API}/transactions/${index}`)
        .then(
            window.location.reload(false)
            // navigate("/transactions")
        )
    }



    console.log()
    return (


            <Card  className="my-3">
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                        <div >{transaction.itemName}</div>
                        <div>{currencyFormatter.format(transaction.amount)}</div>
                        <div className="text-muted fs-6 ms-1">{dateFormatter(transaction.date)}</div>
                    </Card.Title>

                        <Button 
                            style={{
                                border: "1px solid #DD614A",
                                color: "#DD614A"
                            }}
                            variant="outlined" 
                            component={Link} 
                            to={`/transactions/${index}`}
                            >View Transaction
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
                </Card.Body>
            </Card>
    )
}

export default Transaction
