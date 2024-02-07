import { useInputValue } from "../hooks/useInputValue";

export default function InputVal(){
    const defVal = useInputValue('default!');
    const defVal2 = useInputValue('defau22!');

    return (
        <>
            <div>
                <label htmlFor="inp">{defVal.value}</label><br />
                <input type="text" id="inp" {...defVal} />
            </div>
            <div>
                <label htmlFor="inp2">{defVal2.value}</label><br />
                <input type="text" id="inp2" {...defVal2} />
            </div>
        </>
    );
}
