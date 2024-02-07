import Spinner from "react-bootstrap/Spinner";
// import { useEffect, useState } from "react";
import { useEffect } from "react";

function CustomSpinner() {

    // const [isLoading, setIsLoading] = useState(true);
//     useEffect(()=>{
//         setTimeout(()=>{
// console.log('customspinner');
//             setIsLoading(false);
//         },2000);
//     },[]);

    useEffect(()=>{
        console.log('spinner');
    });

    return (
        <>
        {/* { isLoading &&  */}
        <div id="spinner">
            <div id="inner_spinner">
                <Spinner animation="border" variant="primary" />
            </div>
        </div>
        {/* } */}
        </>
    );
}

export default CustomSpinner;