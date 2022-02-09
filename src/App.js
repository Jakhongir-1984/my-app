import React, {useState} from "react";
import "./style/styles.css"
import TableList from "./components/TableList";
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
      <div className="d-flex flex-row-reverse my-2">
        <select className="form-select w-50">
          <option value="val">Sorted by Title</option>
          <option value="val">Sorted by Job</option>
        </select>  
      </div>
      {posts.length
      ? <TableList remove={removePost} posts={posts} title="Programming Language" />
      : <h6 className="my-3 text-center">You should add some Post</h6>
      }  
    </div> 
  );
}

export default App;
