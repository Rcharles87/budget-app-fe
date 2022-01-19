import { Link } from "react-router-dom"
function NavBar() {
    return (
        <div>
            <h1>
                <Link to="/transactions">Budget App</Link>
            </h1>
            <button>
                <Link to="/transactions/new">NEW TRANSACTION</Link>
            </button>
            
        </div>
    )
}

export default NavBar
