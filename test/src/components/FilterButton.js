import { Button } from "react-bootstrap";
import { useState } from "react";

export default function FilterButton(props) {

    const [order, setOrder] = useState('up');
    const [stan, setStan] = useState('id');

    // const updateOrder = (prev) => {
    //     setOrder(()=>{
    //         return { ...prev }
    //     });
    // };

    let clickFn = (e) =>{
        let clsList = e.target.classList;
        let orderT  = e.target.dataset.order;
        // let obj = order;
        let flag = 'up';
        if (clsList.contains('up') && !clsList.contains('down')) {
            flag = 'down';
        } else {
            flag = 'up';
        }
        setOrder(flag);
        setStan(orderT);
        // updateOrder(obj);
        // resolve();
        props.callBackFn(orderT, flag);
    };

    return (
        <div className="button-group filter">
            <Button variant="outline-secondary" className={`${(stan == 'id') ? ((order == 'up') ? 'up' : ((order == 'down') ? 'down' : '')) : ''}`} data-order="id" onClick={clickFn}>Id</Button>
            <Button variant="outline-secondary" className={`${(stan == 'userId') ? ((order == 'up') ? 'up' : ((order == 'down') ? 'down' : '')) : ''}`} data-order="userId" onClick={clickFn}>userId</Button>
        </div>
    );
}
