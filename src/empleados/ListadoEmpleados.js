import axios from "axios";
import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

export default function ListadoEmpleados() {
  const urlBase = "http://localhost:8080/rrhh-app/empleados";

  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    const resultado = await axios.get(urlBase);
    setEmpleados(resultado.data);
  };

  const eliminarEmpleado = async (id) =>{
    await axios.delete(`${urlBase}/${id}`);
    cargarEmpleados();
  }

  return (
    <div className="container">
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3> Sistema de Recursos Humanos</h3>
      </div>

      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Empleado</th>
            <th scope="col">Departamento</th>
            <th scope="col">Sueldo</th>
            <th scope="col">Operaciones</th>
          </tr>
        </thead>
        <tbody>
          {
            //interamos la lista
            empleados.map((empleado, indice) => (
              <tr key={indice}>
                <th scope="row">{empleado.id}</th>
                <td>{empleado.nombre}</td>
                <td>{empleado.departamento}</td>
                <td>
                  <NumericFormat
                    value={empleado.sueldo}
                    displayType={"text"}
                    thousandSeparator=","
                    prefix={"$"}
                    decimalScale={3}
                    fixedDecimalScale
                  />
                </td>
                <td className="text-center">
                  <div>
                    <Link to={`/editar/${empleado.id}`}  className="btn btn-warning btn-sm me-3 my-2">Editar</Link>
                    <button onClick={()=>eliminarEmpleado(empleado.id)} className="btn btn-danger btn-sm">Eliminar</button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
