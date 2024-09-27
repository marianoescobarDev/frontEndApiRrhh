import React from "react";
import { Link } from "react-router-dom";

export default function Navegacion() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Recursos Humanos
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/agregar">
                Agregar Empleado
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
