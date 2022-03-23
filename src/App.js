import Footer from './Components/Footer'
import Comment from './Components/Comment'
import DeleteModal from './Components/DeleteModal'
import {useState, useEffect} from 'react'
import NewComment from './Components/NewComment'

import data from './data.json'



function App() {
  const [currentUser, setUser] = useState(data.currentUser)
  const [commentsData, setcommentsData] = useState(JSON.parse(localStorage.getItem('commentsdata')) || [])
 

  useEffect(() => {
    localStorage.setItem('commentsdata', JSON.stringify(data.comments))
  }, [commentsData])

  const comments = commentsData.map(comment => {
    return <Comment 
      key={comment.id} 
      isCurrentUser={comment.user.username === currentUser.username}
      currentUser={currentUser} 
      {...comment}
    />
  })

  return (
    <div className="App">
      {comments}
      {/* <DeleteModal /> */}
      <NewComment currentUser={currentUser}/>
      <Footer />
      
    </div>
  );
}

export default App;
