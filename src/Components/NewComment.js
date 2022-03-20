export default function NewComment () {
    return (
        <section className="new-comment-container">
            <textarea 
                className="new-comment"
                placeholder="Add a comment..."
            />
            <div className="new-comment-footer">
                <img className="new-comment-avatar" src="./images/avatars/image-juliusomo.png"/>
                <button className="submit" type='submit'>send</button>
            </div>
        </section>
    )
}