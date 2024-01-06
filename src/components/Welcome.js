import { Link } from "react-router-dom";
import { Button } from "@mui/joy";

function Welcome() {

    return (
        <div>
            <h1>Welcome to Loop</h1>
            <Link to={ "/name" }><Button size="lg">Get Started</Button></Link>
        </div>
    );
}

export default Welcome;