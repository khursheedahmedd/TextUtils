import './App.css';
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
// import About from './components/About';
// import { Switch } from 'react-router-dom';

// import {
//   BrowserRouter as Router,
//   Route,
//   // Routes,
//   Switch,
//   // Link
// } from "react-router-dom";

function App() {


  // const [activeTab, setActiveTab] = useState('home');

  // Callback function to change the active tab
  // const changeActiveTab = (tab) => {
  //   setActiveTab(tab);
  // };

  const [mode, setMode] = useState('light');//whether dark mode is enable or not

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#333538';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;