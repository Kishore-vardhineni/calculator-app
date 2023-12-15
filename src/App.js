import React, {useState} from 'react';
import './App.css';
import Keypad from './keypad';

function App() {
  
  let [input, setInput] = useState("")

  function handleClick(value) {
     setInput(input + value)
  }

  function calculate(value) {
    setInput(eval(input + value))
  }

  function handleClear() {
    setInput("");
  }

  return (
 
     <div className='container'>
        <h1>Calculator App using react</h1>
        <div className='calculator'>
            <input type='text'className='output' value={input}/>
            <Keypad handleClick={handleClick} calculate={calculate} handleClear={handleClear}/>
        </div>
     </div>
    
  );
}

export default App;
