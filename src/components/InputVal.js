import {useState} from "react"

export default function InputVal() {
  const [value, setValue] = useState("sam")

  return  (
    <>
      <p>Value: {value}</p>
          <input 
            className="form-control" 
            type="text" 
            value={value}
            onChange={event => setValue(event.target.value)}
          />
    </>    
  )
}