
import './App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListConteiner greeting="Bienvenido a la tienda de zapatos 'A TUS ZAPATOS'"/>
      </header>
    </div>
  );
}

export default App;