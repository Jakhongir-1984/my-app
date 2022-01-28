import React, {useState} from "react";
import "./style/style.css"
import Counter from "./components/Counter";

function App() {
  
  const [toggleBtn, setToggleBtn] = useState(false)
  const [value, setValue] = useState("sam")

  

  return (
    <>
      <div className="app w-50 mx-auto">
        <Counter />
        <hr/>
        <p>Value: {value}</p>
        <input 
          className="form-control" 
          type="text" 
          value={value}
          onChange={event => setValue(event.target.value)}
        />
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
