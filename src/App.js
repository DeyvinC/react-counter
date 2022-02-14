import { useState, useEffect } from 'react';
import Coffees from './Coffees';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] =useState(' ')
  useEffect(() => {
    setCounter(500)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>

        <div className='buttonContainer'>
        <button
         onClick={ () => setCounter(counter + 1)}
        > + </button>
        &nbsp;
        &nbsp;
        <button onClick={ () => setCounter(counter - 1)}>
          -
        </button>
        &nbsp;
        &nbsp;
        <button onClick={ () => setCounter( 0)}>
          reset
        </button>
        </div>
        <Coffees />
      </header>
    </div>
  );
}

export default App;
