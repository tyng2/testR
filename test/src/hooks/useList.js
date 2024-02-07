import { useState } from "react";

export default function useList(initVal = 1){
    let initList = [];
    for (let i = 0; i < initVal; i++){
        initList.push(i);
    }

    const [list, setList]   = useState(initList);
    const [cnt, setCnt]     = useState(initVal);

    let getCntPlus = (num = 1) => {
        setCnt(cnt => cnt + num);
        setList([...list, cnt]);
    };

    let getCntMinus = (num = 1) => {
        if (list.length > 1) {
            setCnt(cnt => cnt - num);
            list.splice(-1, 1);
            // setList([...list]);
        }
    };

    let getCntReset = () => {
        setList([0]);
        setCnt(1);
    };

    return [cnt, list, getCntPlus, getCntMinus, getCntReset];
}