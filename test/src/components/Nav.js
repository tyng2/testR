// import Button from "./Button";
import { Button } from "react-bootstrap";

function Nav({text, children}){
    return (
        <nav id="ddd" className="mt-2 mb-2">
            <Button variant="primary mr-1" >{text}</Button>
            {children}
        </nav>
    );
}

export default Nav;