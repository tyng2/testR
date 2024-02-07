import Button from "./Button";
import { useState } from "react";
import { useEffect } from "react";

let list = [0];

function ListTest(){
    const [cnt, setCnt] = useState(1);

    useEffect(()=>{
        console.log(list);
        return () => {
            console.log('clean-up');
        }
    });

    let cntPlus = () => {
        setCnt(cnt => cnt + 1);
        list.push(cnt);
    };

    let cntMinus = () => {
        if (list.length > 1) {
            setCnt(cnt => cnt - 1);
            list.pop();
        }
    };

    let cntReset = () => {
        list = [0];
        setCnt(1);
    };

    let ListUl = (props) => {
        return <ul>{props.children}</ul>
    };
    
    return (
        <ListUl>
            <Button text={"ADD"} onclickFn={cntPlus} />
            <Button text={"SUB"} onclickFn={cntMinus} />
            <Button text={"RESET"} onclickFn={cntReset} />
            {list.map((v, i) => (
                <li key={i} className={i}>{v}</li>
            ))}
        </ListUl>
    );
}

export default ListTest;