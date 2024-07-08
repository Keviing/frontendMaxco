import { useEffect, useState } from 'react'
import { getAllClientes } from './api/httpRequest'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [cliente, setCliente] = useState([])
  useEffect( () =>{
    const getClienteDataRequest = async () => {
      const clienteData = await getAllClientes()
      setCliente(clienteData)
    }
    getClienteDataRequest()
  },[])

  return (
    <>
    <h1 className='text-center'>Lista de clientes</h1>
    <div>
      {cliente.map((item) => (
          <div className='card' key={item.id}>
            <div className='card-body'>
              <h5 className='card-title'>{item.nombre}</h5>
              <a href='#' className='btn btn-primary'>go</a>
            </div>
          </div>
      ))}
    </div>
    </>
  )
};

export default App
