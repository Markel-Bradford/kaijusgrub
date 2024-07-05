import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Main from './Components/Main'

function App() {

  return (
    <div className="app">
      <Router>
      <ScrollToTop />
      <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/kaijusgrub" element={<Main />}></Route>
        </Routes>
      <Footer />
      </Router>
    </div>
  )
}

export default App
