//import logo from './logo.svg';
import './App.css';
import About from './components/About'; 
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

 const showAlert = (message, type)=> {
   setAlert({
     msg: message,
     type: type
   })
   setTimeout(() => {
     setAlert(null);
   }, 1500);
 }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343434';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
        <Router>
        <Navbar title = "TextUtils" mode={mode} toggleMode = {toggleMode} />
        <Alert alert = {alert}/>
        <div className="container my-3">    
 
            <Switch>
              <Route exact path="/about">
                <About mode = {mode} />
               
              </Route>
              
              <Route exact path="/">
              <Textform heading = "Enter your text to analyze in the box below" showAlert = {showAlert} mode={mode}/>
              
              </Route>
            </Switch>

         </div>
        </Router>
    </>
  );
}

export default App;
