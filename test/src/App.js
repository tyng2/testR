import './css/App.css';
import './css/custom.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Main from './pages/Main';
import OtherPage from './pages/other/OtherPage';
import NotFound from './pages/error/NotFound'
import TestCode from './pages/TestCode';
// import CustomSpinner from './components/CustomSpinner';
// import { Suspense } from 'react';
import TestSus from './pages/TestSus';
import PostList from './pages/PostList';
import NavbarHeader from './pages/NavbarHeader';

function App() {

  return (
    <>
      {/* <CustomSpinner /> */}
      {/* <Suspense fallback={<CustomSpinner />}> */}
      <div className='App'>
        <BrowserRouter>
          {/* <Header props={"a"} /> */}
          <NavbarHeader props={"a"} />
          <div className='content'>
          <Routes>
            <Route path='/' element={<Main cont={"2"} />}></Route>
            <Route path='/other/:id' element={<OtherPage />}></Route>
            <Route path='/test' element={<TestCode />}></Route>
            <Route path='/sus' element={<TestSus cont={"3"} />}></Route>
            <Route path='/list' element={<PostList />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
          </div>
        </BrowserRouter>
      </div>
      {/* </Suspense> */}
    </>
  );
}

export default App;
