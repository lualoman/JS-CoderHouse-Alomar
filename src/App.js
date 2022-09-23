import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Inicio from './components/paginas/Inicio';
import Contacto from './components/paginas/Contacto';
import Productos from './components/paginas/Productos';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" exact component={Inicio}/>
          <Route path="/productos" exact component={Productos}/>
          <Route path="/contacto" exact component={Contacto}/>
        </Routes>
      </Router>
    <ItemListContainer/>
    <Footer/>
    </div>
  );
}

export default App;
