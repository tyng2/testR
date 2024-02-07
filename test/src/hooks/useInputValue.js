
import { useState } from "react";

export function useInputValue(initVal){
    const [val, setValue] = useState(initVal);

    function changeHandler(e) {
        console.log('changeHandler : ' + e.target.value);
        setValue(e.target.value);
    }

    const result = {
        value : val,
        onChange : changeHandler
    };

    return result;
}