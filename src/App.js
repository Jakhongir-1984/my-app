import React, { useState } from "react";
import TableHeader from "./components/TableHeader";
import TableItem from "./components/TableItem";
import "./style/styles.css"


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", stack: "MERN Stack"},
    {id: 2, title: "Python", stack: "Full-Stack"},
    {id: 3, title: "C#", stack: "Game"},
    {id: 4, title: "PHP", stack: "Back End"},
  ])

  return (
    <div className="app w-50 mx-auto">
      <table className="table table-striped"> 
        <TableHeader />
        <tbody>
        {posts.map(post => (
          <TableItem post={post} />
        ))} 
        </tbody>
      </table>
    </div>    
  );
}

export default App;
