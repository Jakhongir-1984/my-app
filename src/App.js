import React, {useState, useRef} from "react";
import "./style/styles.css"
import TableList from "./components/TableList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", stack: "MERN Stack"},
    {id: 2, title: "Python", stack: "Full-Stack"},
    {id: 3, title: "C#", stack: "Game"},
    {id: 4, title: "PHP", stack: "Back End"},
  ])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])  
  }

  const removePost = (post) => {
    setPosts(posts.filter(s => s.id !== post.id))
  }

  return (
    <div className="app w-50 mx-auto">
      <PostForm createPost={createPost}/>
      <TableList remove={removePost} posts={posts} title="Programming Language" />
    </div> 
  );
}

export default App;
