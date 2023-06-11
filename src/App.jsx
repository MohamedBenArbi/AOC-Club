import './App.css'
import Background from "./assets/photos/background.jpg"
import About from "./assets/photos/about.jpg"
import Header from './components/Header'
import Event from './components/Event'
import Ionic from './assets/photos/ionic.jpg'
import Design from './assets/photos/designnight.jpg'

import Grad from "./assets/photos/graduation.jpg"
function App() {


  return (
    <>
   <Header />
     <section>
      <img src={Background} />
     </section>
     <div className='about'>
     <h3 className='title-mobile'>\About us\</h3>

      <div className="about-image-container">
      <img className='about-image' src={About} />

      </div>
       <div className='about-desc-container'>
       <h3 className='title-desktop'>\About us\</h3>
        <h1>Breaking The Limits</h1>
        <p>Art of Code Club is a collaboration between IT Students of the <br/> Faculty of Science of Bizerte in order to learn and excel in Computer Science field</p>
        <h4>Objectifs : </h4>
       <ul>
        <li>Collaboration between IT students in order to learn and excel in Computer Science field.</li>
        <li>Essential training and workshops to all students to establish basic knowledge in programming and coding</li>
        <li>Simulation of the real-world challenges by applying the acquired skills.</li>
       </ul>

       </div>
     </div>
    <div className='events'>
        <h3>\Events\</h3>
        <h1>Latest Events</h1>
    <div className="events-container">      
       <Event Photo={Grad} Title="Graduation Ceremony" Date="July 8th, 2023" />
       <Event Photo={Ionic} Title="Ionic WorkShop" Date="July 8th, 2023" />
       <Event Photo={Design} Title="Design Night" Date="July 8th, 2023" />
       <div className='seemore'>
      <a href="">See More Events</a>
       </div>
     </div>
    </div>
    </>
  )
}

export default App
