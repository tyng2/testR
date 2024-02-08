import { Button } from "react-bootstrap";
import { useState } from "react";

export default function FilterButton(props) {

    const [order, setOrder] = useState({});

    const updateOrder = (prev) => {
        setOrder(()=>{
            return { ...prev }
        });
    };

    let clickFn = (e) =>{
        let clsList = e.target.classList;
        let orderT  = e.target.dataset.order;
        let obj = order;
        let flag = 'up';
        if (clsList.contains('up') && !clsList.contains('down')) {
            flag = 'down';
        } else {
            flag = 'up';
        }
        // new Promise((resolve, reject)=>{
            obj[orderT] = flag;
            updateOrder(obj);
            // setOrder(obj);
            // resolve();
        // }).then(()=>{
            props.callBackFn(orderT, flag);
        // });
    };

    return (
        <div className="button-group filter">
            <Button variant="outline-secondary" className={`${(order.i == 'up') ? 'up' : (order.i == 'down') ? 'down' : ''}`} data-order="i" onClick={clickFn}>Id</Button>
            <Button variant="outline-secondary" className={`${(order.u == 'up') ? 'up' : (order.u == 'down') ? 'down' : ''}`} data-order="u" onClick={clickFn}>user Id</Button>
        </div>
    );
}
