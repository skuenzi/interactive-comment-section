import Footer from './Components/Footer'
import Comment from './Components/Comment'
import DeleteModal from './Components/DeleteModal'
import {useState, useEffect} from 'react'
import NewComment from './Components/NewComment'

import data from './data.json'



function App() {
  const [currentUser, setUser] = useState(data.currentUser)
  const commentsArray = data.comments

  // get comments from local storage and save in state
  const [commentsData, setcommentsData] = useState(JSON.parse(localStorage.getItem('commentsdata')) || [])
  
  // set json data to local storage
  useEffect(() => {
    localStorage.setItem('commentsdata', JSON.stringify(commentsArray))
  }, [commentsData])

  // render state into comment components
  const comments = commentsData.map(comment => {
    return <Comment 
      key={comment.id} 
      currentUser={currentUser} 
      {...comment}
    />
  })

  

  return (
    <div className="App">
      <ul>{comments}</ul>
      
      {/* <DeleteModal /> */}
      <NewComment currentUser={currentUser}/>
      <Footer />
      
    </div>
  );
}

export default App;
