import useList from "../hooks/useList";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function ListHookTest(){

    const [cnt, list, getCntPlus, getCntMinus, getCntReset] = useList();
    
    return (
        <>
        <div style={{"width":"100%"}}>
            <div className="mb-2">
                NEXT : {cnt}
            </div>
            <div className="mb-2">
                <Button variant="outline-success mr-1" onClick={()=>{getCntPlus();}}>ADD</Button>
                <Button variant="outline-secondary mr-1" onClick={()=>{getCntMinus();}}>SUB</Button>
                <Button variant="outline-danger" onClick={()=>{getCntReset();}}>RESET</Button>
            </div>
            <ListGroup as="ol" >
                {list.map((v, i) => (
                    <ListGroup.Item as="li" key={i} variant={i}>{v}</ListGroup.Item>
                ))}
            </ListGroup>
        </div>
        </>
    );
}
