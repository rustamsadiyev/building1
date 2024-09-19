import './App.css'
import { Route, Routes, } from 'react-router-dom'
import Projects from './pages/Projects'
import Header from './pages/Header'
import Home from './pages/Home'
import About from './pages/About'



function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/header' element={<Header />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
      </Routes>
      
    </>
  )
}

export default App
