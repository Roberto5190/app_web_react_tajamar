import React, { useState } from 'react';
import './App.css';
import { gatosDb } from './db/gatos_db';
// import Button from './components/Button';
import './index.css';
import { ProductCard } from './components/ProductCard';
import SearchBar from './components/SearchBar';
import { Footer } from './components/Footer';


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
    <div className='flex flex-col items-center justify-between max-w-1028 mt-12' >

      <h1 className="text-5xl text-light font-[Poppins] font-bold mb-10">Blog de Gatos</h1>
      {/* <Button className="azul">Azul</Button>
      <Button className="verde">Verde</Button>
      <Button className="rojo">Rojo</Button>
      <Button className="amarillo">Amarillo</Button>
      <Button className="morado">Morado</Button>
      <Button className="naranja">Naranja</Button> */}


      <SearchBar  onSearch={handleSearch} />

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 px-8">
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

        <Footer />
    </div>
  );
}

export default App;
