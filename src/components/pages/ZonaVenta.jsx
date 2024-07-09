// src/components/ZonasSinVentas.js
import React, { useState, useEffect } from "react";
import { getAllData } from "../../api/httpRequest";
import DataTable from "react-data-table-component";

function ZonaVenta({ fechaInicio, fechaFin }) {
  const [report, setReport] = useState([]);

  useEffect(() => {
    const getReportDataRequest = async () => {
      const reportData = await getAllData(
        `http://localhost:5121/api/report/zonasSinVentas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
      );
      setReport(reportData);
    };
    getReportDataRequest();
  }, [fechaInicio, fechaFin]);

  const columns = [
    { name: "#", selector: (row, index) => index + 1, sortable: true },
    { name: "Zona", selector: (row) => row, sortable: true },
  ];

  return (
    <>
      <h1 className="text-center my-4">Zonas Sin Ventas de {fechaInicio} hasta {fechaFin}</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card border-primary">
              <div className="card-body">
                <div className="table-responsive">
                  <DataTable columns={columns} data={report} pagination highlightOnHover />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ZonaVenta;