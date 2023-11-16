import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "./contexts/PostsContext";

export default function PostDetails({ title, body }) {
  const posts = useContext(postsContext);
  const { postId } = useParams();
  const post = posts.find((p) => {
    return p.id == postId;
  });
  console.log(postId)
  return (
    <>
      <h2>Post Details page</h2>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  );
}


