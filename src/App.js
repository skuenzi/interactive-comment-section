import Footer from './Components/Footer'
import Comment from './Components/Comment'
import DeleteModal from './Components/DeleteModal'
import NewComment from './Components/NewComment'

import data from './data.json'



function App() {

  const comments = data.comments.map(comment => <Comment key={comment.id} {...comment}/>)
  console.log(data.comments)
  return (
    <div className="App">
      {comments}
      {/* <DeleteModal /> */}
      <NewComment />
      <Footer />
      
    </div>
  );
}

export default App;
