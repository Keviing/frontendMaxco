import React from "react";
import { useState , useEffect } from "react";
import { getAllClientes } from "../../api/httpRequest";
import DataTable from "react-data-table-component";

function Inicio() {

    const [report, setReport] = useState([]);
    useEffect (() => {
        const getReportDataRequest = async () => {
            const reportData = await getAllClientes('http://localhost:5121/api/Report/zonas-mayor-venta-por-vendedor')
            setReport(reportData)
        }
        getReportDataRequest()
    },[]);

    const columns = [
        {name : '#', selector: (row, index) => index +1, sortable: true},
        {name: 'Zona - Vendedor', selector : row => row.zonaVendedor, sortable:true},
        {name: 'Ventas Totales', selector : row => row.totalVentas, sortable:true},
    ]
    return(
        <>
        <h1 className="text-center my-4 ">Reporte de Ventas</h1>
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-12">
        <div className="card border-primary">
        <div className="card-body">
        <div class="table-responsive">
        <DataTable 
        columns={columns}
        data={report}
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
export default Inicio;