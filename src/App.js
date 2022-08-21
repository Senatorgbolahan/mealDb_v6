import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleMeal from './pages/SingleMeal'
import Error from './pages/Error'

// import components
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      <Router>
          <Navbar/>
          <Routes>
             <Route exact path= '/' element= {<Home/>} />
             <Route path= '/about' element={<About/>}/>
             <Route path= '/meal/:id' element={<SingleMeal/>}/>
             <Route path= '*' element={<Error/>} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
