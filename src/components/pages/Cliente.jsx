import React  from "react";
import { useEffect, useState } from "react";
import { getAllClientes } from "../../api/httpRequest";
import DataTable from "react-data-table-component";

function Cliente () {

    const [cliente, setcliente] = useState([]);
    useEffect (() => {
        const getClienteDataRequest = async () => {
            const clienteData = await getAllClientes('http://localhost:5121/api/Cliente')
            setcliente(clienteData)
        }
        getClienteDataRequest()
    },[]);

    const columns = [
        { name: '#', selector: (row, index) => index + 1, sortable: true },
        { name: 'Nombre', selector: row => row.nombre, sortable: true },
        
      ];

return(
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
          data={cliente}
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

export default Cliente;