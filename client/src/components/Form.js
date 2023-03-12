import React, { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

const Form = () => {
const {title,setTitle,content,setContent,handleSubmit,generateFakePost}= useContext(PostContext)

    
  return (
    <div className="m-5">
      <form onSubmit={handleSubmit}>
        <h1>Add new Post</h1>
        <div>
          <label>Title</label><br></br>
          <input value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content</label><br></br>
          <textarea value={content} onChange={(e)=>setContent(e.target.value)} />
        </div>

        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      <button className="btn btn-success mt-2" onClick={()=>generateFakePost()}>generate fake post</button>
    </div>
  );
};

export default Form;
