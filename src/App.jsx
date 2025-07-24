import './App.css'
import Enter from './components/Enter'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Resume'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return(
    <>
      <Enter/>
      <div>
        <Header/>
        <Home/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
