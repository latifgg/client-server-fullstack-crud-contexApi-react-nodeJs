import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const getPostsData = async () => {
    const response = await fetch("http://localhost:8888/posts");
    const data = await response.json();
    setPosts(data);
  };
  useEffect(() => {
    getPostsData();
  }, []);

  const handleSubmit=(e)=>{
    e.preventDefault()
    let newPost = {title,content} 
        setTitle(title)
        setContent(content)
         posts.push(newPost)
        setPosts(posts)
  }
  return (
    <div>
      <PostContext.Provider
        value={{ posts, setPosts, title, setTitle, content, setContent,handleSubmit }}
      >
        {children}
      </PostContext.Provider>
    </div>
  );
};
export default PostContextProvider;
