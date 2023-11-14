import React from "react";
import { Link } from "react-router-dom";
import bazarImage from "./img1.jpg";

function Home({
  searchTerm,
  onSearchTermChange,
}){
  return (
    <div className="container text-center mt-5">
      <h1>Bienvenido al Bazar Universal</h1>
      <input
        type="text"
        placeholder="Buscar Producto"
        value={searchTerm}
        onChange={onSearchTermChange}
      />
      <Link to="/productos" className="btn btn-secondary">
        Buscar
      </Link>
      <img
        src={bazarImage}
        alt="Bazar Universal"
        className="img-fluid mt-4 mb-4"
      />
        <br/>
      <br />
      <Link to="/productos" className="btn btn-secondary">
        Ingresar
      </Link>
    </div>
  );
}

export default Home;