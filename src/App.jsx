import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify"

import Inicio from './pages/Inicio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TopBarHome from './components/TopBarHome'
import GaleriaEatUp from './pages/GaleriaEatUp'

function App() {

  return (
    <>

    <Navbar />
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/EatUp" element={<GaleriaEatUp />} />
    </Routes>
    <Footer />
    <TopBarHome />
    </>
  )
}

export default App