import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Nav2 from './components/Nav2';

import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";

function App() {
  const [mode,setMode]= useState('white') 
  const toggleMode=()=>{
    if(mode ==='white'){
      setMode('dark');
      document.body.style.backgroundColor='#1a3856';

    }
    else{
      setMode('white');
      document.body.style.backgroundColor='white';
  }
}
   
  return (
  <>
  <Router>
  <Nav2 title="TextEdore" mode={mode} toggleMode={toggleMode}/>
   <Alert alert="how can we help you :"/>
    <div className="container my-3">

    <Switch>
  <Route exact path="/about">
    <About mode={mode} />
  </Route>
  <Route exact path="/">
    <TextForm heading="Enter your Text" mode={mode}/> 
  </Route>
</Switch>
</div>
 </Router>
    </>
    
    );
}

export default App;
