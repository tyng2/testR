import Button from 'react-bootstrap/Button';
import { useEffect, useRef, useState } from 'react';
import Posts from '../components/Posts';

export default function PostList({cont}){

    const [list, setState] = useState([]);
    const [pageNum, setPage] = useState(1);
    const pageSize = 10;
    const mounted = useRef(false);
    const postList = useRef([]);

    useEffect(()=>{
        console.log('useEffect');
        if (mounted.current){
            console.log('mounted');
            getPostData();
        } else {
            mounted.current = true;
        }
        return () => {
            console.log('clean-up');
        };
    }, [pageNum]);

    let getPostData = async () => {
        let data = [];
console.log(postList);
        if (postList) {
            if (postList.current.length < 1) {
    console.log('call API');            
                postList.current = await fetch(
                    `https://jsonplaceholder.typicode.com/posts`
                ).then((response) => response.json());
            }
            data = postList.current.slice(0, pageNum * pageSize);
            setState(data);
            document.querySelector('.nextBtn').disabled = false;
            if (postList.current.length <= pageNum * pageSize) {
                document.querySelector('.nextBtn').style.display = 'none';
            }
        }
    };

    let nextPage = () =>{
        if (postList.current.length > pageNum * pageSize) {
            document.querySelector('.nextBtn').disabled = true;
            setPage(pageNum => pageNum + 1);
        }
    };

    let currPage = () =>{
        console.log(pageNum);
    };

    let rendering = () =>{
        let result = '';
        if (list && list.length > 0) {
            result = (<Posts list={list} />);
        }
        return result;
    };
    return (
        <>
            <p>CNT : {postList.current.length}</p>
            <div>
                { rendering() }
            </div>
            <Button variant='primary' onClick={nextPage} className='nextBtn mr-2'>NEXT</Button>
            <Button variant='outline-primary' onClick={currPage} className='nextBtn'>CURPAGE</Button>
        </>
    );
}