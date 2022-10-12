import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Productos from './components/Productos';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import CartContextProvider from '../src/context/CartContext';

function App() {
  return (
    <CartContextProvider>
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<Productos/>}/>
          <Route path={"/producto/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"/producto/category/:id"} element={<ItemListContainer/>}/>
          <Route path={"/cart"} element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    <Footer/>
    </div>
    </CartContextProvider>
  );
}

export default App;
