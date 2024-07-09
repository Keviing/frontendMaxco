import React from "react";
import { useState, useEffect}  from "react";
import { getAllClientes } from "../../api/httpRequest";
import DataTable from "react-data-table-component";


function Ventas(){

    const [venta, setVenta] = useState([]);
    useEffect(() => {
        const getVentaDataRequest = async () => {
            const ventaData = await getAllClientes('http://localhost:5121/api/Venta')
        setVenta(ventaData)
        }
        getVentaDataRequest()
    },[])


    const columns = [
        { name: '#', selector: (row, index) => index + 1, sortable: true },
        { name: 'Cliente', selector: row => row.cliente.nombre, sortable: true },
        { name: 'Télefono', selector: row => row.cliente.telefono, sortable: true },
        { name: 'Vendedor', selector: row => row.vendedor.nombre, sortable: true },
        { name: 'Zona', selector: row => row.zona.nombreZona, sortable: true },
      ];

    return (
        <>
        <h1 className="text-center my-4">Lista de clientes</h1>
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-12">
        <div className="card border-primary">
        <div className="card-body">
        <div class="table-responsive">
          <DataTable
            columns={columns}
            data={venta}
            pagination
            highlightOnHover
          />
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </>
    )
}

export default Ventas;