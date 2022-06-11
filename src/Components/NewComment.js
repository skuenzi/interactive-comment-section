import { useState } from "react";

export default function NewComment({ currentUser, handleSubmit }) {
  const [text, setText] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText('')
  };

  return (
    <form className="new-comment-container" onSubmit={onSubmit}>
      <textarea
        className="new-comment"
        placeholder="Add a comment..."
        value={text}
        onChange={e => {
            setText(e.target.value)
        }}
      />
      <img
        className="new-comment-avatar"
        src={`./images/avatars/image-${currentUser.username}.png`}
        alt={currentUser.username}
      />
      <button className="submit" type="submit">
        Send
      </button>
    </form>
  );
}
