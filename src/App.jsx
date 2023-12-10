
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar'
import Themes from './components/Themes'



function App() {

  return (
    <>
     <BrowserRouter>
     <Themes></Themes>
     <Navbar></Navbar>
      <Routes>
        <Route index element={<Home></Home>}/>
        <Route path='about' element={<About></About>}/>
        <Route path='portfolio' element={<Portfolio></Portfolio>}/>
        <Route path='contact' element={<Contact></Contact>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
