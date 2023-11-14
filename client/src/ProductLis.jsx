import React from "react";
import { Link } from "react-router-dom";

function ProductLis({
  filteredProducts,
  handleProductClick,
  searchTerm,
  onSearchTermChange,
}) {
  return (
    <div className="product-list">
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar Producto"
        value={searchTerm}
        onChange={onSearchTermChange}
      />
      <Link to="/productos" className="btn btn-secondary">
        Buscar
      </Link>
        <br/>

      {/* Lista de productos */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/productos/${product.id}`}>
            <div onClick={() => handleProductClick(product.id)}>
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductLis;