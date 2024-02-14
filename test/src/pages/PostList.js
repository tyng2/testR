import Button from 'react-bootstrap/Button';
import { useEffect, useRef, useState } from 'react';
import Posts from '../components/Posts';
import FilterButton from '../components/FilterButton';

export default function PostList(){

    const [list, setState] = useState([]);
    const [pageNum, setPage] = useState(1);
    const pageSize = 10;
    const mounted = useRef(false);
    const postList = useRef([]);

    useEffect(()=>{
        const scrollHandle = () => {
            const { scrollTop, offsetHeight } = document.documentElement;
            if (window.innerHeight + scrollTop >= offsetHeight) {
                nextPage();
                console.log(window.innerHeight + ' | ' + scrollTop + ' | ' + offsetHeight);
            }
        }
        window.addEventListener('scroll', scrollHandle);
        return () => window.removeEventListener('scroll', scrollHandle);
    },[]);

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
        if (postList) {
            if (postList.current.length < 1) {
                console.log('call API');
                postList.current = await fetch(
                    `https://jsonplaceholder.typicode.com/posts`
                ).then((response) => response.json());
            }
            data = postList.current.slice(0, pageNum * pageSize);
            setState(data);
            // document.querySelector('.nextBtn').disabled = false;
            if (postList.current.length <= pageNum * pageSize) {
                // document.querySelector('.nextBtn').style.display = 'none';
            } else {
                // document.querySelector('.nextBtn').style.display = '';
            }
        }
    };

    let nextPage = () =>{
        if (postList.current.length > pageNum * pageSize) {
            // document.querySelector('.nextBtn').disabled = true;
            setPage(pageNum => pageNum + 1);
        }
    };

    let currPage = () =>{
        alert(pageNum);
    };

    let filterProc = (order, upDown) => {
        console.log(order + ' | ' + upDown);
        let data = [];

        if (upDown === 'down') {
            if (order === 'id') {
                postList.current.sort((a, b)=>b[order]-a[order]);
            } else {
                postList.current.sort((a, b)=>b[order].localeCompare(a[order]) || b[order]-a[order]);
            }
        } else {
            if (order === 'id') {
                postList.current.sort((a, b)=>a[order]-b[order]);
            } else {
                postList.current.sort((a, b)=>a[order].localeCompare(b[order]) || b[order]-a[order]);
            }
        }
        data = postList.current.slice(0, pageNum * pageSize);
        setState(data);
        setPage(1);
    };

    let rendering = () =>{
        let result = '';
        if (list && list.length > 0) {
            result = (<Posts list={list} />);
        }
        return result;
    };

    return (
        <div className='tl'>
            <div className='row'>
                <div className=''>
                    <FilterButton callBackFn={filterProc} />
                </div>

            </div>
            <div style={{"textAlign":"right"}}>CNT : {postList.current.length}</div>
            <div>
                { rendering() }
            </div>
            {/* <div className='tc'>
                <Button variant='primary' onClick={nextPage} className='nextBtn mr-2'>NEXT</Button>
                <Button variant='outline-primary' onClick={currPage} className='currBtn'>CURPAGE</Button>
            </div> */}
        </div>
    );
}
