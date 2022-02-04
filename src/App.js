import React, { useState } from "react";
import "./style/styles.css"
import TableList from "./components/TableList";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", stack: "MERN Stack"},
    {id: 2, title: "Python", stack: "Full-Stack"},
    {id: 3, title: "C#", stack: "Game"},
    {id: 4, title: "PHP", stack: "Back End"},
  ])

  return (
    <div className="app w-50 mx-auto">
      <form>
        <h5 className="text-center">Create your first post</h5>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Programming Language" 
        />
        <input 
          type="text" 
          className="form-control my-3" 
          placeholder="Enter your favourite stack" 
        />
        <MyButton />
      </form>
      <TableList posts={posts} title="Programming Language" />
    </div> 
  );
}

export default App;
