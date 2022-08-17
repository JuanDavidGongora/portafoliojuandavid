import './App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CvToggle from './components/CvToggle';
import Habilities from './components/Habilities';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';

function App() {

  return (
    <>
    <NavBar/>
    <div className='container mt-3 body' style={{background: "#0B0C15"}}>
      <Header/>
      <CvToggle/>
      <About/>
      <Habilities/>
      <Portfolio/>
      <Contact/>

    </div>
    <Footer/>
    </>
  )
}

export default App
