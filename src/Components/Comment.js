import Reply from './Reply'
import NewComment from './NewComment'
import {useState} from 'react'

export default function Comment (props) {
    const [score, setScore] = useState(props.score)
    const [disable, setDisable] = useState(false)
    const [allReplies, setAllReplies] = useState(props.replies)
    const [hideNewComment, setHideNewComment] = useState(true)
    const [newComment, setNewComment] = useState()
    
    const replies = allReplies ? 
        allReplies.map(reply => {
            return <Reply 
                key={reply.id} 
                currentUser={props.currentUser} 

                {...reply}
            />
        }) : 
    []

    const handleScoreChange = (e) => {
        if (e.target.classList.contains('minus-btn')) {
            setScore(prevScore => prevScore - 1)
            setDisable(true)
          }
          if (e.target.classList.contains('plus-btn')) {
            setScore(prevScore => prevScore + 1)
            setDisable(true)
          }
    }

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
        <button className="reply-btn" onClick={() => setHideNewComment(prevComment => !prevComment)} >
            <img  className="reply-icon"src="/images/icon-reply.svg" alt="reply icon"/>
            Reply
        </button>
    
    return (
        <li className="comment-container">
            <div className='comment'>
                <div className="comment-heading">
                    <img className="user-avatar" src={props.user.image.png} alt="user avatar"/>
                    <p className="username">{props.user.username}</p>
                    {props.user.username === props.currentUser.username && <p className="tag">you</p>}
                    <p className="date">{props.createdAt}</p>
                    
                </div>
                <p className="comment-content">{props.content}</p>
                <div className="comment-footer"> 
                    <div className="comment-votes">
                        <button 
                            id="plus-btn" 
                            className={`plus-btn`}
                            disabled={disable}
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
                            disabled={disable}
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
                   {commentOptions}
                   
                </div>
            </div>
            <div className={hideNewComment ? 'hidden' : 'display'}>
                <NewComment 
                    currentUser={props.currentUser} 
                    newComment={newComment}
                    setNewComment={setNewComment}
                />
            </div>
            <div className="reply-container">
                {replies}
            </div>
            
        </li>
    )
}