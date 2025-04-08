import './App.css';
import Button from './components/Button';
import './index.css';

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
      </div>
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </>
  );
}

export default App;
