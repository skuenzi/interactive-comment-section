import Comment from "./Comment";
import NewComment from "./NewComment";
import DeleteModal from "./DeleteModal";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import data from "../data.json";

function Comments({ currentUser }) {
  const allData = data;
  const [backendComments, setBackendComments] = useState(allData.comments);
  const [activeComment, setActiveComment] = useState(null)
  console.log(backendComments)

  const createComment = async (text) => {
    return {
      content: text,
      createdAt: "Just now",
      id: nanoid(),
      replies: [],
      score: 0,
      user: currentUser,
    };
  };

  const addComment = (text) => {
    createComment(text).then((comment) => {
      setBackendComments([...backendComments, comment]);
    });
  };

  const deleteComment = (commentId) => {
    const updatedBackendComments = backendComments.filter(
      (backendComment) => backendComment.id !== commentId
    );
    setBackendComments(updatedBackendComments)
  }


  return (
    <div>
      {backendComments.map((comment) => (
        <Comment
          key={comment.id}
          currentUser={currentUser}
          replies={comment.replies}
          activeComment={activeComment}
          setActiveComment={setActiveComment}
          deleteComment={deleteComment}
          {...comment}
        />
      ))}
      <NewComment currentUser={currentUser} handleSubmit={addComment} />
    </div>
  );
}

export default Comments;
