import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function OtherPage(){
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        console.log('useEffect');
        return () => {
            console.log('cleanup');
        }
    });

    return (
        <>
            <h2>{id} - OtherPage</h2>
            <div>Hash : {location.hash}</div>
            <div>Pathname : {location.pathname}</div>
            <div>Search : {location.search}</div>
            <div>State : {location.state}</div>
            <div>Key : {location.key}</div>
            <Button variant='secondary' className='p-2 mr-2' onClick={()=>navigate(-1)}>navigate(-1)</Button>
            <Button variant='secondary' className='p-2 mr-2' onClick={()=>navigate(-2)}>navigate(-2)</Button>
            <Button variant='warning' className='p-2' onClick={()=>navigate('/other/aba1', {replace:true})}>aba1</Button>
        </>
    );
}
