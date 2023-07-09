import { useState } from "react";
import axios from "axios";

const FetchComments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allComments, setAllComments] = useState([]);
  const [comment, setComment] = useState(null);
  const getComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setAllComments(data);
    setIsLoading(false);
  };
  const submitComment = async () => {
    const response = axios.post(
      "/api/comments",
      { comment },
      {
        headers: {
          "Content-Type": "application/json",
        },
      } 
    );
    // const response = await fetch('/api/comments', {
    //     method: "POST",
    //     body: JSON.stringify({comment}),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    // });
  };
  const loading = isLoading ? (
    <h4>Comments Loading ...</h4>
  ) : (
    <h4>Comments Loaded ...</h4>
  );

  return (
    <>
      {loading} 
      <div> 
        <input type="text" onChange={(e) => setComment(e.target.value)} />
        <button onClick={submitComment}>submit comment</button>
      </div>
      <button onClick={getComments}>fetch comments</button>
      {allComments.map((comment) => {
        return (
          <div key={comment.id}>
            <span style={{ fontWeight: "bold" }}>{comment.id}</span>
            <p>{comment.comments}</p>
          </div>
        );
      })}
    </>
  );
};
export default FetchComments;
