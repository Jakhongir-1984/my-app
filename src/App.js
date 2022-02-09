import React, {useState} from "react";
import "./style/styles.css"
import TableList from "./components/TableList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "JavaScript", stack: "MERN Stack"},
    {id: 2, title: "Python", stack: "Full-Stack"},
    {id: 3, title: "C#", stack: "Game"},
    {id: 4, title: "PHP", stack: "Back End"},
  ])

  const [select, setSelect] = useState("")
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])  
  }

  const removePost = (post) => {
    setPosts(posts.filter(s => s.id !== post.id))
  }

  const sortPost = (sort) => {
    setSelect(sort)
    setPosts([...posts].sort())
  } 

  return (
    <div className="app w-50 mx-auto">
      <PostForm createPost={createPost} />
      <div className="d-flex flex-row-reverse my-2">
        <MySelect 
          value={select}
          onChane={sortPost}
          defaultValue="Sorted by"
          option={[
            {value: "programming", name: "Programming"},
            {value: "jobs", name: "Jobs"}
          ]}
        />  
      </div>
      {posts.length
      ? <TableList remove={removePost} posts={posts} title="Programming Language" />
      : <h6 className="my-3 text-center">You should add some Post</h6>
      }  
    </div> 
  );
}

export default App;
