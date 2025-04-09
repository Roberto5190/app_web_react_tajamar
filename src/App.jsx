import React, { useState } from 'react';
import './App.css';
import { gatosDb } from './db/gatos_db';
// import Button from './components/Button';
import './index.css';
import { ProductCard } from './components/ProductCard';
import SearchBar from './components/SearchBar';


function App() {
  const [data] = useState(gatosDb);
  

    const [filteredProducts, setFilteredProducts] = useState(data);
  
    const handleSearch = (searchText) => {
      const results = data.filter((gato) =>
        gato.nombre.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(results);
    };

  return (
    <>
      <h1 className="text-3xl font-bold underline mb-10">Blog de Gatos</h1>
      {/* <Button className="azul">Azul</Button>
      <Button className="verde">Verde</Button>
      <Button className="rojo">Rojo</Button>
      <Button className="amarillo">Amarillo</Button>
      <Button className="morado">Morado</Button>
      <Button className="naranja">Naranja</Button> */}


      <SearchBar  onSearch={handleSearch} />

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {filteredProducts.map((gato) => (
          <ProductCard
            key={gato.id}
            src={`/img/${gato.src}.jpg`}
            alt={gato.alt}
            title={gato.nombre}
            description={gato.descripcion}
          />
        ))}
      </div>

      <div className="footer">
        <h1>Footer</h1>
      </div>
    </>
  );
}

export default App;
