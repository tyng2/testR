import { useEffect, useRef, useState } from 'react';
import Posts from '../components/Posts';
import FilterButton from '../components/FilterButton';
import axios from 'axios';

export default function PostList(){

    const [list, setState] = useState([]);
    const [pageNum, setPage] = useState(1);
    const [isFetching, setFetching] = useState(false);
    const mounted = useRef(false);
    const postList = useRef([]);
    const pageSize = 10;

    useEffect(()=>{
        const scrollHandle = () => {
            const { scrollTop, offsetHeight } = document.documentElement;
            if (window.innerHeight + scrollTop >= offsetHeight) {
                console.log(window.innerHeight + ' | ' + scrollTop + ' | ' + offsetHeight);
                setFetching(true);
            }
        }
        window.addEventListener('scroll', scrollHandle);
        return () => window.removeEventListener('scroll', scrollHandle);
    },[]);

    useEffect(()=>{
        if (isFetching) {
            console.log(postList.current.length + ' > ' + pageNum + ' * ' + pageSize);
            if (postList.current.length > pageNum * pageSize) {
                setPage(pageNum => pageNum + 1);
            } else {
                console.log('end');
            }
            setFetching(false);
        }
    },[isFetching]);

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
                // postList.current = await fetch(
                //     `https://jsonplaceholder.typicode.com/posts`
                // ).then((response) => response.json());
                postList.current = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts`
                ).then((response) => response.data);
            }
            data = postList.current.slice(0, pageNum * pageSize);
            setState(data);
        }
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
        </div>
    );
}
