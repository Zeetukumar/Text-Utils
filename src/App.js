
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import{
  BrowserRouter,
  Routes,
  Route,
  // Link
}from "react-router-dom";

function App() {
  // whether dark mode is enabled or not 
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#403838';
    document.body.style.color='white';
    showAlert("Dark mode has been enabled","success");
    document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Light Mode';
    }
  }

  return (
    <>
      
{/* <Navbar title="TextUtils" aboutText="About"/> */}
<BrowserRouter>
<Navbar title ="textUtils" mode ={mode} toggleMode ={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
{/* <Route path="/" element={<Layout />}> */}
  <Route exact path="/about" element={<About/>}>
    
  </Route>
  <Route exact path="/" element ={<TextForm showAlert={showAlert} heading ="Enter the text"mode={mode}/>}>
  {/* <TextForm showAlert={showAlert} heading ="Enter the text"mode={mode}/> */}
  </Route>
</Routes>
{/* <About/> */}
</div>
</BrowserRouter>
    </>
  );
}

export default App;
