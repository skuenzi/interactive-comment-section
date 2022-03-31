export default function NewComment (props) {
    return (
        <section className="new-comment-container">
            <textarea 
                className="new-comment"
                placeholder="Add a comment..."
                value={props.newComment}
            />
            <div className="new-comment-footer">
                <img 
                    className="new-comment-avatar" 
                    src={`./images/avatars/image-${props.currentUser.username}.png`}
                    alt={props.currentUser.username}
                />
                <button 
                    className="submit" 
                    type='submit'
                >
                    send
                </button>
            </div>
        </section>
    )
}