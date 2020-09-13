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
  let updateTitle = () => {
    setState( prev => {
      return {
        ...prev,
      title: 'Updated title'
      }
    })
  }

  return (
    <div className="App">
      <h1>Test Task with hooks</h1>
      <h2>Counter: {counter}</h2>
      <div className="buttonGroup">
        <button onClick={increment} className="btn btn-success">+</button>
        <button onClick={decrement} className="btn btn-danger">-</button>
        <button onClick={updateTitle} className="btn">Update</button>
      </div>
      <h3>{JSON.stringify(state, null, 2)}</h3>
    </div>
  );
}

export default App;
