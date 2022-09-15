import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Inicio from './components/paginas/Inicio';
import Contacto from './components/paginas/Contacto';
import Productos from './components/paginas/Productos';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className='App'>
        <NavBar/>
        <Inicio/>
        <Productos/>
        <Contacto/>
    <ItemListContainer/>
    </div>
  );
}

export default App;
