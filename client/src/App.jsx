import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { ListaVehiculos } from './pages/ListaVehiculos'
import { Vehiculo } from './pages/Vehiculo'
import { Vehiculos } from './pages/Vehiculos'
import WhatsApp from './pages/WhatApp'
import Headers from './pages/Headers'
import Footer from './pages/Footer'
import About from './pages/cases/About'
import PostVenta from './pages/PostVenta'
import Inicio from './pages/cases/Inicio'
import Contact from './pages/cases/Contact'
import Modal from './pages/cases/Modal'



function App() {
  return (
    <div>
      <div>
       <Headers />
       <Inicio />
      </div>
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Navigate to="/lista" />} />
      <Route path="/nosotros" element={ <About />} />
      <Route path="/contacto" element={ <Contact />} />
      
      <Route path="/postventa" element={ <PostVenta />} />
      <Route path="/lista" element={<ListaVehiculos />} />
      <Route path="/lista/:id" element={<Vehiculo />} />
      <Route path="/vehiculo/:id" element={<Vehiculos />} />
    </Routes>
    </BrowserRouter>
    <div>
      <Footer />
      <WhatsApp />
    </div>
    </div>
  )
}

export default App
