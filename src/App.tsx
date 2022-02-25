import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {

  const [counter, setCounter] = useState(0);
  const [adder, setAdder] = useState(true);

  const onClick = () => {if (adder){
      setCounter(counter+2);
    }
    else{
      setCounter(counter-1);
    }
    setAdder(!adder);
  };

  return (
    <div className='App'>
      <button onClick={onClick}>Increment Me</button>
      <div>{counter}</div>
    </div>
  );
};

export default App;