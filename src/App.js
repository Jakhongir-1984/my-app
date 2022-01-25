import React, {useState} from "react";
import "./style/style.css"

function App() {
  const [count, setCount] = useState(0)
  const [toggleBtn, setToggleBtn] = useState(false)

  function inc() {
    setCount(prev => prev + 1)
  }
  function dec() {
    setCount(prev => prev - 1)
  }

  return (
    <>
      <div className="app w-50 mx-auto">
        <h3>Count: {count}</h3>
        <button 
            onClick={inc}
            className="btn btn-success">Incr</button>
        <button 
          onClick={dec}
          className="btn btn-danger">Decr</button> 
        <button
          onClick={() => setToggleBtn(!toggleBtn)} 
          className="btn btn-secondary">Toggle btn</button>
        {toggleBtn 
          ? <p className="lead">
              YouTube Content
            </p>
          : null
        }
       
      </div>  
    </>    
  );
}

export default App;
