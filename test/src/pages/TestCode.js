import { useState, useEffect, useRef } from 'react';
import style from "../css/Button.module.css";
import Nav from '../components/Nav';
import ListHookTest from '../components/ListHookTest';
import Button from 'react-bootstrap/Button';
import InputForm from '../components/InputForm';
// import ListTest from '../components/ListTest';
// import InputVal from '../components/InputVal';

export default function TestCode() {
  const [cnt, setCnt] = useState(0);
  const mounted = useRef(false);

  let countFn = () => setCnt(cnt => cnt + 1);

  // 렌더링 완료마다 실행
  useEffect(() => {
    if (mounted.current) {
      console.log('userEffect');
      // document.title = 'TITLE ' + cnt;
    } else {
      mounted.current = true;
    }
    return () => {
      console.log('clean-up');
    }
  },[cnt]);

  return (
    <>
      <div style={{"width":"275px", "margin":"0 auto"}}>
        <h4>{cnt}</h4>
        <button type='button' className={`${style.btn} btn`} onClick={countFn}>Click</button>
        <Nav text={"bb"}>
          <Button variant='success mr-1'>CHILDREN1</Button>
          <Button variant='secondary'>CHILDREN2</Button>
        </Nav>
        <InputForm />
        {/* <InputVal /> */}
        {/* <ListTest /> */}
        <ListHookTest />
      </div>
    </>
  );
}
