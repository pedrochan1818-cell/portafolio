import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify"

import Inicio from './pages/Inicio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TopBarHome from './components/TopBarHome'

function App() {

  return (
    <>

    <Navbar />
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
    <Footer />
    <TopBarHome />
    </>
  )
}

export default App