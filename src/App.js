import React,{useState} from 'react';
import './App.css';


function App() {

  const [counter, setCounter] = useState(0)

  let increment = () => setCounter(counter+1)
  let decrement = () => setCounter(counter-1)

  return (
    <div className="App">
      <h1>Test Task with hooks</h1>
      <h2>Counter: {counter}</h2>
      <div className="buttonGroup">
        <button onClick={increment} className="btn btn-success">+</button>
        <button onClick={decrement} className="btn btn-danger">-</button>
      </div>
    </div>
  );
}

export default App;
