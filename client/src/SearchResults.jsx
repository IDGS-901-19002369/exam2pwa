import React from 'react';

function SearchResults({ products, handleSearch, handleProductClick, searchTerm }) {
  return (
    <div>
      <h1>Search Results</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product.id)}>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;