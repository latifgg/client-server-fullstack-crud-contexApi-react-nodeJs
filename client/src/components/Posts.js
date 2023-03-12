import React, { useContext } from "react";
import Card from 'react-bootstrap/Card';
import { PostContext } from "../contexts/PostContext";

const Posts = () => {
  const { posts } = useContext(PostContext);
  const postEl = posts.map((post) => (
    <Card className="m-5">
      <Card.Header>Card Header</Card.Header>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
        {post.content}
        </Card.Text>
      </Card.Body>
    </Card>
  ));
  

  return <div>{postEl}</div>;
};

export default Posts;
