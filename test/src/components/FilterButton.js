import { Button } from "react-bootstrap";

export default function FilterButton(props) {

    let clickFn = () =>{
        
    };

    return (
        <div className="button-group filter">
            <Button variant="outline-secondary" data-order="i">Id</Button>
            <Button variant="outline-secondary" data-order="u">user Id</Button>
        </div>
    );
}
