import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom'
import Navbar from './components/navigator/Navbar'
import Cliente from './components/pages/Cliente'
import Ventas from './components/pages/Ventas'
import Inicio from './components/pages/Inicio'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <>
    <div className='App'></div>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/inicio' element={<Inicio />} />
        {/* Agrega tus otras rutas aquí */}
        <Route path='/cliente' element={<Cliente />} />
        <Route path='/ventas' element={<Ventas />} />
      </Routes>
    </Router>
  </>
  )
};

export default App
