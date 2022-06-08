import Footer from './Components/Footer'
import Comments from './Components/Comments'
import DeleteModal from './Components/DeleteModal'
import data from './data.json'

function App() {
  const currentUser = data.currentUser

  return (
    <div className="App">
        
      <Comments currentUser={currentUser}/>
      
      {/* <DeleteModal /> */}
      <Footer />
      
    </div>
  );
}

export default App;
