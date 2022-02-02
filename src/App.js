import React, { useState } from "react";
import "./style/styles.css"
import TableList from "./components/TableList";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", stack: "MERN Stack"},
    {id: 2, title: "Python", stack: "Full-Stack"},
    {id: 3, title: "C#", stack: "Game"},
    {id: 4, title: "PHP", stack: "Back End"},
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: "HTML", stack: "Template"},
    {id: 2, title: "CSS", stack: "Animation"},
    {id: 3, title: "Bootstrap", stack: "Theme"},
    {id: 4, title: "SASS", stack: "Styles"},
  ])

  return (
    <>
      <div className="app w-50 mx-auto">
        <TableList posts={posts} title="Programming Language" />
      </div>
      <div className="app w-50 mx-auto">
        <TableList posts={posts2} title="Free Courses" />
      </div>
    </>    
  );
}

export default App;
