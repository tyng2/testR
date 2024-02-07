import Button from 'react-bootstrap/Button';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

function TestSus({cont}){

    const [data, setState] = useState({});
    const [modalShow, setModalShow] = useState(false);

    useEffect(()=>{
        console.log(Object.keys(data).length);
        if (data && data.constructor === Object && Object.keys(data).length > 0) {
            console.log('useEffect');
            setModalShow(true);
        }
    },[data]);

    let PostModal = (props) => {
        return (
            <Modal size='lg' aria-labelledby='post-modal' 
                show={props.show} onHide={props.onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title id='post-modal'>{data.title} | {data.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>userId : {data.userId}</h5>
                    <p>{data.body}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    };

    let getServerData = async (n) => {
        console.log(n);
        const data = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${n}`
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.status + ' error');
            }
            return response.json();
        })
        .catch((e)=>{
            console.log(e);
            return false;
        });
        setState(data);
        document.querySelector('#submitBtn').disabled = false;
        // return data;
    };

    let callPost = () => {
        document.querySelector('#submitBtn').disabled = true;
        let cnt = document.querySelector('#inp').value;
        console.log(cnt);
        cnt = (cnt && !isNaN(cnt)) ? cnt : cont;
        getServerData(cnt);
    };

    return (
        <>
            <FloatingLabel controlId="inp" label="id" className="mb-3">
                <Form.Control type="text" className='mb-2'/>
                <Button variant='success' onClick={callPost} id='submitBtn'>SUBMIT</Button>
            </FloatingLabel>
            {/* <h2>{data}</h2> */}
            <PostModal show={modalShow} onHide={()=>setModalShow(false)} />
        </>
    );
}

export default TestSus;
