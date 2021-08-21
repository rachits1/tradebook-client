import React,{useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LeftSection from './components/LeftSection';
import FeedsSection from './components/FeedsSection';
import RightSection from './components/RightSection';
import {useDispatch} from 'react-redux';
import {getPosts} from './Redux/actions/posts'; 

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])
  
  return (
    <div>
      <Navbar />
      <div className="main__section container flex">
         <LeftSection />
         <FeedsSection />
         <RightSection />
      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
