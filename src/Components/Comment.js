export default function Comment () {
    return (
        <section className="comment-container">
            <div className="comment-heading">
                <img className="user-avatar" src='/images/avatars/image-amyrobson.png' alt="user avatar"/>
                <p className="username">amyrobson</p>
                <p className="date">1 month ago</p>
                
            </div>
            <p className="comment-content">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</p>
            <div className="comment-footer"> 
                <div className="comment-votes">
                    <button className="plus-btn">
                        <img  className="plus-icon"src="/images/icon-plus.svg" alt="plus icon"/>
                    </button>
                    <p className="comment-votes_total">5</p>
                    <button className="minus-btn">
                        <img  className="minus-icon"src="/images/icon-minus.svg" alt="minus icon"/>
                    </button>
                </div>
                <button className="reply-btn hidden">
                    <img  className="reply-icon"src="/images/icon-reply.svg" alt="reply icon"/>
                    Reply
                </button>
                <div className="toggled-btns">
                    <button className="delete-btn ">
                        <img  className="delete-icon"src="/images/icon-delete.svg" alt="delete icon"/>
                        Delete
                    </button>
                    <button className="edit-btn ">
                        <img  className="edit-icon"src="/images/icon-edit.svg" alt="edit icon"/>
                        Edit
                    </button>
                </div>
            </div>

        </section>
    )
}