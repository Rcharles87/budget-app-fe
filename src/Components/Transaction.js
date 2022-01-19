import { Link } from "react-router-dom";

function Transaction({transaction, index}) {
    return (
        <div>
            <tr>
                <Link to={`/transactions/${index}`}>
                <td>{transaction.date}</td>
                <td>{transaction.itemName}</td>
                <td>{transaction.amount}</td>
                </Link>
            </tr>
        </div>
    )
}

export default Transaction
