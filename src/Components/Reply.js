export default function Reply (props) {

    const commentOptions = 
        props.user.username === props.currentUser.username ? 
        <div className="toggled-btns">
            <button className="delete-btn">
                <img  className="delete-icon"src="/images/icon-delete.svg" alt="delete icon"/>
                Delete
            </button>
            <button className="edit-btn">
                <img  className="edit-icon"src="/images/icon-edit.svg" alt="edit icon"/>
                Edit
            </button>
        </div> :
        <button className="reply-btn">
            <img  className="reply-icon"src="/images/icon-reply.svg" alt="reply icon"/>
            Reply
        </button>

    
    return (
            <div className="reply">
                <div className="comment-heading">
                    <img className="user-avatar" src={props.user.image.png} alt="user avatar"/>
                    <p className="username">{props.user.username}</p>
                    
                    {props.user.username === props.currentUser.username && <p className="tag">you</p>}
                    <p className="date">{props.createdAt}</p>
                    
                </div>
                <p className="comment-content">{props.content}</p>
                <div className="comment-footer"> 
                    <div className="comment-votes">
                        <button className="plus-btn">
                            <img  className="plus-icon"src="/images/icon-plus.svg" alt="plus icon"/>
                        </button>
                        <p className="comment-votes_total">{props.score}</p>
                        <button className="minus-btn">
                            <img  className="minus-icon"src="/images/icon-minus.svg" alt="minus icon"/>
                        </button>
                    </div>
                    {commentOptions}
                </div>
            </div>
    )
}