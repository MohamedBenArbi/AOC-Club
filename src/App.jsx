import './App.css'
import Background from "./assets/photos/background.jpg"
import Header from './components/Header'
function App() {


  return (
    <>
   <Header />
     <section>
      <img src={Background} />
     </section>
     <div>
       <img />
       <div>
        <h3>\About us\</h3>
        <h1>Breat The Limits</h1>
        <p>Art of Code Club is a collaboration between IT Students of the Faculty of Science of Bizerte in order to learn and excel in Computer Science field</p>
 
       <ul>
        <li>Collaboration between IT students in order to learn and excel in Computer Science field.</li>
        <li>Essential training and workshops to all students to establish basic knowledge in programming and coding</li>
        <li>Simulation of the real-world challenges by applying the acquired skills.</li>
       </ul>

       </div>
     </div>
    </>
  )
}

export default App
