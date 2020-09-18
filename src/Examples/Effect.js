import React,{useState, useEffect} from 'react';
import './App.css';



function App() {
  const [type, setType] = useState('Users')
  const [data, setData] = useState()
  const [pos, SetPos] = useState({
    x: 0,
    y: 0
  })

  useEffect( ()=> {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  useEffect(()=>{
    window.addEventListener('mousemove', event => {
      SetPos({
        x: event.clientX,
        y: event.clientY
      })
    } )
  }, [])



  return ( 
    <div className="App">
      <h2> Resources: {type}</h2>
      <button className = 'btn' onClick = {()=>setType('users')}>Users</button>
      <button className = 'btn' onClick = {()=>setType('todos')}>ToDo</button>
      <button className = 'btn' onClick = {()=>setType('posts')}>Posts</button>
      {/* <pre>{JSON.stringify(data, null, 1)}</pre> */}
      <pre>{JSON.stringify(pos, null, 1)}</pre>
    </div>
  );
}

export default App;
