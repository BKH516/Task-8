import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Hosting from './Components/Hosting/Hosting'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {


  return (
    <>
    <div className="App">
    <Navbar />
    <Hero />
    <div className='br' ></div>
    <Services />
    <Hosting/>
    <Footer/>
  </div>
  </>
  )
}

export default App
