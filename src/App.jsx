import './App.css';
import Button from './components/Button';
import './index.css';
import { ProductCard } from './components/ProductCard';
import gato1 from './assets/img/gato-1.jpg';
import gato2 from './assets/img/gato-2.jpg';
import gato3 from './assets/img/gato-3.jpg';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">HOLA</h1>
      <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-4 gap-4">
        <Button className="azul">Azul</Button>
        <Button className="verde">Verde</Button>
        <Button className="rojo">Rojo</Button>
        <Button className="amarillo">Amarillo</Button>
        <Button className="morado">Morado</Button>
        <Button className="naranja">Naranja</Button>
        <ProductCard
          src={gato1}
          alt="gato 1"
          title="Gato 1"
          description="Descripcion del gato 1"
        />

        <ProductCard
          src={gato2}
          alt="gato 2"
          title="Gato 2"
          description="Descripcion del gato 2"
        />
        <ProductCard
          src={gato3}
          alt="gato 3"
          title="Gato 3"
          description="Descripcion del gato 3"
        />
      </div>

      <div className="footer">
        <h1>Footer</h1>
      </div>
    </>
  );
}

export default App;
