import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify"

import Inicio from './pages/Inicio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>

    <Navbar />
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
    <Footer />
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App