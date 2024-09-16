import './App.css'
import { Route, Routes, } from 'react-router-dom'
import Projects from './pages/Projects'
import Header from './pages/Header'
import Home from './pages/Home'



function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/header' element={<Header />} />
          <Route path='/projects' element={<Projects />} />
      </Routes>
      
    </>
  )
}

export default App
