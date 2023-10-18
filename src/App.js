
import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const previousCountRef = useRef(null);
  const previousCount = previousCountRef.current;

  useEffect(()=>{
    previousCountRef.current = count;
  })

  return (
    <div className="App">
      <p>Current state: {count}</p>
      <p>Previous count: {previousCount} </p>
      <button onClick={() => setCount(count + 1)}> Click Here</button>
    </div>
  );
}

export default App;
