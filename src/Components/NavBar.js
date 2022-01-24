import { Stack } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import "../index.css"
function NavBar() {
    return (
        <div className="d-flex my-3 pt-3 color-nav p-3">
            <h1 className="text-black">
                <Link className="text-decoration-none text-black" to="/transactions">Budget App</Link>
            </h1>
            <Button 
                style={{
                    border: "1px solid #C5C392",
                    color: "#C5C392"
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
