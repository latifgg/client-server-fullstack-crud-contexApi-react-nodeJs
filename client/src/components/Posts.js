import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { PostContext } from "../contexts/PostContext";

const Posts = () => {
  const { posts,handleClickDelete,handleClickEdit } = useContext(PostContext);
  const postEl = posts.map((post) => (
    <Card className="m-5">
      <Card.Header>Post  {post.id}</Card.Header>
      <Card.Body>
        <Card.Title>{post.id}</Card.Title>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
      </Card.Body>
      <div className="d-flex m-2">
        <button className="btn btn-danger me-2" onClick={()=>handleClickDelete(post.id)}>Delete</button>
        <button className="btn btn-warning" onClick={()=>handleClickEdit( post.title, post.content)}>Edit</button>
      </div>
    </Card>
  ));

  return <div>{postEl}</div>;
};

export default Posts;
