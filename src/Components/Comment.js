import { useState } from "react";
import DeleteModal from "./DeleteModal";
import NewComment from "./NewComment";

export default function Comment(props) {
  const [score, setScore] = useState(props.score);
  const [disableUpvote, setDisableUpvote] = useState(false);
  const [disableDownvote, setDisableDownvote] = useState(false);
  let starterScore = props.score;
  const isCurrentUser = props.user.username === props.currentUser.username;
  const isReplying = props.activeComment && props.activeComment.id === props.id;

  const handleScoreChange = (e) => {
    if (e.target.classList.contains("minus-btn")) {
      setScore((prevScore) => prevScore - 1);
      if (score - starterScore < 1) {
        setDisableDownvote(true);
        setDisableUpvote(false);
        starterScore = props.score;
      }
    }
    if (e.target.classList.contains("plus-btn")) {
      setScore((prevScore) => prevScore + 1);
      if (starterScore - score < 1) {
        setDisableUpvote(true);
        setDisableDownvote(false);
        starterScore = props.score;
      }
    }
  };

  return (
    <div className="comment-container">
      <div className="comment">
        <div className="comment-heading">
          <img
            className="user-avatar"
            src={props.user.image.png}
            alt="user avatar"
          />
          <p className="username">{props.user.username}</p>
          {props.user.username === props.currentUser.username && (
            <p className="tag">you</p>
          )}
          <p className="date">{props.createdAt}</p>
        </div>
        <p className="comment-content">{props.content}</p>
        <div className="comment-votes">
          <button
            id="plus-btn"
            className={`plus-btn`}
            disabled={disableUpvote}
            onClick={handleScoreChange}
          >
            <img
              className={`plus-btn plus-icon`}
              src="/images/icon-plus.svg"
              alt="plus icon"
            />
          </button>
          <p className="comment-votes_total">{score}</p>
          <button
            id="minus-btn"
            disabled={disableDownvote}
            className={`minus-btn`}
            onClick={handleScoreChange}
          >
            <img
              className={`minus-btn minus-icon`}
              src="/images/icon-minus.svg"
              alt="minus icon"
            />
          </button>
        </div>
        <div className="comment-footer">
          {isCurrentUser ? (
            <div className="toggled-btns">
              <button
                className="delete-btn"
                onClick={() => {
                  props.deleteComment(props.id);
                }}
              >
                <img
                  className="delete-icon"
                  src="/images/icon-delete.svg"
                  alt="delete icon"
                />
                Delete
              </button>
              <button className="edit-btn">
                <img
                  className="edit-icon"
                  src="/images/icon-edit.svg"
                  alt="edit icon"
                />
                Edit
              </button>
            </div>
          ) : (
            <button
              className="reply-btn"
              onClick={() => props.setActiveComment({ id: props.id })}
            >
              <img
                className="reply-icon"
                src="/images/icon-reply.svg"
                alt="reply icon"
              />
              Reply
            </button>
          )}
        </div>
      </div>
      {isReplying && (
        <div>
          <NewComment
            currentUser={props.currentUser}
            handleSubmit={(text) => props.addReply(text, props.id)}
          />
        </div>
      )}
      {props.replies && (
        <div className="replies-container">
          {props.replies.map((reply) => (
            <div className="reply">
              <Comment
                key={reply.id}
                currentUser={props.currentUser}
                replies={[]}
                activeComment={props.activeComment}
                setActiveComment={props.setActiveComment}
                deleteComment={props.deleteComment}
                addComment={props.addComment}
                addReply={props.addReply}
                {...reply}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
