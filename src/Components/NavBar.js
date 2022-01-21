import { Button, Container, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"
function NavBar() {
    return (
            <Stack direction="horizontal" gap="2" className="mb-4">

            <h1 className="me-auto">
                <Link to="/transactions">Budget App</Link>
            </h1>
            <Button variant="outline-primary">
                <Link to="/transactions/new">NEW TRANSACTION</Link>
            </Button>
            
            </Stack>
    )
}

export default NavBar
