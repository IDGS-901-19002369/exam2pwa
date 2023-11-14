import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";

function ProductDet() {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    // Cargar detalles del producto usando productId
    fetch(`http://localhost:3001/api/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProductDetails(data);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

  if (!productDetails) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="product-details">
      <img src={productDetails.thumbnail} alt={productDetails.title} />
      <h2>{productDetails.title}</h2>
      <p>{productDetails.description}</p>
      <p>Precio: ${productDetails.price}</p>
      <p>Rating: {productDetails.rating}</p>
      <p>Marca: {productDetails.brand}</p>
      <p>Categoria: {productDetails.category}</p>

      {/* Botón de Comprar (simulación) */}
      <button onClick={() => alert("¡Adquirio Este Producto!")}>Comprar</button>
        <br/>
      {/* Botón para redirigir a la lista de productos */}
      <Link to="/productos">
        <button>Volver a la lista de productos</button>
      </Link>
    </div>
  );
}

export default ProductDet;