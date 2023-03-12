import { createContext, useEffect, useState } from "react";
import short from "short-uuid";
import { faker } from "@faker-js/faker";
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

  const handleSubmit = (e) => {
    let id = short.generate();
    e.preventDefault();
    const newPost = { title, content, id };
    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
  };
  const handleClickDelete = (pId) => {
    const restPost = posts.filter((post) => post.id !== pId);
    setPosts(restPost);
  };
  const generateFakePost = () => {
    const randomName = faker.name.fullName();
    const randomEmail = faker.internet.email();
    const newFakeData = {
      id: short.generate(),
      title: randomName,
      content: randomEmail,
    };
    setPosts([...posts, newFakeData]);
  };

  const handleClickEdit=( pTitle, pContent)=>{
setTitle(pTitle)
setContent(pContent)

  }
  return (
    <div>
      <PostContext.Provider
        value={{
          posts,
          setPosts,
          title,
          setTitle,
          content,
          setContent,
          handleSubmit,
          handleClickDelete,
          generateFakePost,handleClickEdit
        }}
      >
        {children}
      </PostContext.Provider>
    </div>
  );
};
export default PostContextProvider;
