import { Link, useNavigate } from "react-router-dom";
import { Card, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utils";
import { Button } from "@mui/material";

function Transaction({transaction, index}) {

    // function ViewButton(){
    //     let view = useNavigate()
        
    //     function handleClick(){
    //         view.push(`/transactions/${index}`)
    //     }
    // }


    return (
        <Card>
            <Card.Body>

            <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                {/* <Link to={`/transactions/${index}`}> */}
                <div>{transaction.itemName}</div>
                <div>{currencyFormatter.format(transaction.amount)}</div>
                <div className="text-muted fs-6 ms-1">{transaction.date}</div>
                {/* </Link> */}
            </Card.Title>
                <Button variant="outlined" href={`/transactions/${index}`}>View Transaction</Button>
            </Card.Body>
        </Card>
    )
}

export default Transaction
