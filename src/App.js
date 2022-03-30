import Footer from './Components/Footer'
import Comment from './Components/Comment'
import DeleteModal from './Components/DeleteModal'
import {useState, useEffect} from 'react'
import NewComment from './Components/NewComment'

import data from './data.json'



function App() {
  const allData = data

  const [commentsData, setCommentsData] = useState(allData.comments)

  const [currentUser, setCurrentUser] = useState(allData.currentUser)




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
      <NewComment 
        currentUser={currentUser}
      />
      <Footer />
      
    </div>
  );
}

export default App;
