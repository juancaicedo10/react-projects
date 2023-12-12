import './App.css';
import Logo from './images/pngegg.png';
import Button from './components/buttons.jsx'
import Screen from './components/screen.jsx';
import ClearButton  from './components/clearButton.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs'



function App() {

  const [input , setInput] = useState('');

  function addInput(e) {
    setInput(input + e);
  };

  const calculateResult = () => {
    try {
      
      const sanitizedInput = input.replace(/[^-()\d/*+.]/g, '');
      setInput(String(evaluate(sanitizedInput)));
    } catch (error) {
      setInput('Error');
    }
  };



  return ( 
    <div className='App'>
      <div className='logo-container'>
        <img 
        src={Logo}
        className='logo'
        alt='Logo'
        />
      </div>

      <div className='calculadora-container'>
        
       <Screen 
       input={input}
       className='input'></Screen>

        <div className='fila'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='fila'>
          <ClearButton handleClick={() => setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  )
}

export default App;
