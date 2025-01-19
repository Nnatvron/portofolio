import react from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import StatsAndTechStack from './Components/Skills/StatsAndTechStack'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
    <Nav/>
    <Header/>
    <div style={{ 
      backgroundColor: '#111827', 
      minHeight: '100vh',
      padding: '2rem',
      color: 'white'
    }}>
      <StatsAndTechStack />
    </div>
    <About/>
    <Service/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
