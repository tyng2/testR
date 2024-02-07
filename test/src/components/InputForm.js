import { useInputValue } from "../hooks/useInputValue";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export default function InputForm(){
    const defVal = useInputValue('default!');
    const defVal2 = useInputValue('defau22!');

    return (
        <>
            <div style={{"width":"100%"}}>
                <FloatingLabel controlId="inp" label={defVal.value} className="mb-3">
                    <Form.Control type="text" {...defVal} />
                </FloatingLabel>
                <FloatingLabel controlId="inp2" label={defVal2.value} className="mb-3">
                    <Form.Control type="text" {...defVal2} />
                </FloatingLabel>
            </div>
        </>
    );
}
