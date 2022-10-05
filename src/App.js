import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Inicio from './components/paginas/Inicio';
import Contacto from './components/paginas/Contacto';
import Productos from './components/paginas/Productos';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<Inicio greeting={'INICIO'}/>}/>
          <Route path={"/productos"} element={<Productos/>}/>
          <Route path={"/contacto"} element={<Contacto greeting={'CONTACTO'}/>}/>
          <Route path={"/producto/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"/producto/category/:id"} element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
