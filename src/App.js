import React, {useState, useMemo} from "react";
import "./style/styles.css"
import TableList from "./components/TableList";
import PostForm from "./components/PostForm";
import FilterAndSearch from "./components/FilterAndSearch";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', stack: "Front-End"},
    {id: 2, title: 'Python', stack: "Full-Stack"},
    {id: 3, title: 'C#', stack: "Game"},
    {id: 4, title: 'PHP', stack: "Back-End"},
  ])

  const [filter, setFilter] = useState({sort: "", query: ""})
 
  const SortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchPosts = useMemo(() => {
    return SortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, SortedPosts])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])  
  }

  const removePost = (post) => {
    setPosts(posts.filter(s => s.id !== post.id))
  }

  return (
    <div className="app w-50 mx-auto">
      <PostForm createPost={createPost} />
        <FilterAndSearch filter={filter} setFilter={setFilter} />
        <TableList remove={removePost} posts={sortedAndSearchPosts} title="Programming Language" />
    </div> 
  );
}

export default App;
