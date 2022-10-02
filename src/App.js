import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
//import Inicio from './components/paginas/Inicio'; POR EL MOMENTO NO ES NECESARIO USARLO
import Contacto from './components/paginas/Contacto';
import Productos from './components/paginas/Productos';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer greeting={'Tu SmartPlace de confianza, todo un mundo para vos!'}/>}/>
          <Route path={"/productos"} element={<Productos/>}/>
          <Route path={"/contacto"} element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
