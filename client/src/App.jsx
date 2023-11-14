import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import ProductList from "./ProductLis";
import ProductDetails from "./ProductDet";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTermLowerCase)
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    // Carga inicial de productos
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        // Filtrar productos inicialmente
        setFilteredProducts(data.products);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleProductClick = (productId) => {
    // Carga de detalles del producto al hacer clic
    fetch(`http://localhost:3001/api/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedProduct(data);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  };

  const handleSearchTermChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    // Filtrar productos en función del término de búsqueda
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route
          path="/productos"
          element={
            <ProductList
              filteredProducts={filteredProducts}
              handleProductClick={handleProductClick}
              searchTerm={searchTerm}
              onSearchTermChange={handleSearchTermChange}
            />
          }
        />
        <Route path="/productos/:productId" element={<ProductDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;