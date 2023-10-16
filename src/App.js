import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'

function App() {
  const[mode,setMode] = useState('light');
  const[textColor,changeTextColor] = useState('dark');

  const toggleMode = () =>{
    if(mode === 'light')
    {setMode('dark');
      changeTextColor('light');
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
    }

    else
    {setMode('light');
      changeTextColor('dark');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  return (
    <>
  <Navbar title="TextUtils" mode={mode} toggle={toggleMode} textColor={textColor}/>
  <div className="container">
  <TextForm heading="Enter your text to analyze: " mode={mode} textColor={textColor}/>
  </div>
    </>
  );
}

export default App;
