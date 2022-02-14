import React, {useState} from "react";
import "./style/styles.css"
import TableList from "./components/TableList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', stack: "MERN Stack"},
    {id: 2, title: 'Python', stack: "Full-Stack"},
    {id: 3, title: 'C#', stack: "Game"},
    {id: 4, title: 'PHP', stack: "Back End"},
  ])

  const [select, setSelect] = useState("")
  const [search, setSearch] = useState("")
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])  
  }

  const removePost = (post) => {
    setPosts(posts.filter(s => s.id !== post.id))
  }

  const sortPost = (sort) => {
    setSelect(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  } 

  return (
    <div className="app w-50 mx-auto">
      <PostForm createPost={createPost} />
      <div className="d-flex justify-content-between my-2">
        <MyInput
          placeholder="Search..."
          className="form-control"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />  
        <MySelect 
          value={select}
          onChange={sortPost}
          defaultValue="Sorted by"
          option={[
            {value: "title", name: "Programming"},
            {value: "stack", name: "Jobs"}
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
