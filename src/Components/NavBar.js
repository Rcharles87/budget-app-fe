import { Stack } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import "../index.css"
function NavBar() {
    return (
        <div className="d-flex my-3 pt-3 color-nav p-3">
            <h1>
                <Link className="text-decoration-none text-color-nav" to="/transactions">Budget App</Link>
            </h1>
            <Button 
                style={{
                    border: "1px solid #504F2A",
                    color: "#504F2A"
                }}
                className="ms-auto "  
                variant="outlined" 
                component={Link} 
                to={"/transactions/new"} 
                >NEW TRANSACTION
            </Button>            
        </div> 
    )
}

export default NavBar
