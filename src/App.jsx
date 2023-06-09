import './App.css'
import Background from "./assets/photos/background.jpg"
import Header from './components/Header'
function App() {


  return (
    <>
   <Header />
   <img className='background' src={Background} />
   
    </>
  )
}

export default App
