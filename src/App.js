import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0)
 
  function inc() {
    setCount(prev => prev + 1)
  }
  function dec() {
    setCount(prev => prev - 1)
  }

  return (
    <>
      <div className="app">
        <h3>Count: {count}</h3>
        <button 
        onClick={inc}
        className="btn btn-success">Incr</button>
        <button 
        onClick={dec}
        className="btn btn-danger">Decr</button> 
      </div>  
    </>    
  );
}

export default App;
