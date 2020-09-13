import React,{useState} from 'react';
import './App.css';


function App() {

  const [counter, setCounter] = useState(0)

  const [state, setState] = useState({
    title: 'Some testing title',
    date: Date.now()
  })

  let increment = () => setCounter(counter+1)
  let decrement = () => setCounter(counter-1)

  return (
    <div className="App">
      <h1>Test Task with hooks</h1>
      <h2>Counter: {counter}</h2>
      <div className="buttonGroup">
        <button onClick={increment} className="btn btn-success">+</button>
        <button onClick={decrement} className="btn btn-danger">-</button>
        <button onClick={decrement} className="btn">Update</button>
      </div>
    </div>
  );
}

export default App;
