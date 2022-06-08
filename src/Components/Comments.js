import Comment from './Comment'
import DeleteModal from './DeleteModal'
import {useState, useEffect} from 'react'

import data from '../data.json'



function Comments({currentUser}) {
    const allData = data
    const [backendComments, setBackendComments] = useState(allData.comments)
    // console.log(backendComments)



  

    return (
      <div>
        {backendComments.map(comment =>  (
            <Comment key={comment.id} currentUser={currentUser} replies={comment.replies} {...comment} className='comment'/>
        ))}
      </div>
    );
}

export default Comments;
