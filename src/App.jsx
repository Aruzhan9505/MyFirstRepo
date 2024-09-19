import { useState } from 'react'
import './App.css'
import Counter from './components/Counter';
import Navbar from './components/Navbar';
// import InfoBlock from './components/infoBlock';
import InfoBlockone from "./components/Infoblockone";
import Title from './components/Title';
import Footer from './components/Footer';
// import Gptpage from './components/GptPage';


function App() {

  return (
    <div className='flex flex-col justify-between min-h-[100vh]'>
    
      <Navbar/>
      {/* <Counter /> */}
      {/* <InfoBlock/> */}
      <InfoBlockone/>
      {/* <Title/> */}
      {/* <Gptpage/> */}
      <Footer/>
    </div>
  )
}
 
export default App
