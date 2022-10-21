import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Productos from './components/Productos';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import CartContextProvider from '../src/context/CartContext';
import ListContainer from './firebase/ListContainer';
import Order from './components/Order';

function App() {
  return (
    <div className='App'>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<Productos/>}/>
          <Route path={"/firebase"} element={<ListContainer/>}/>
          <Route path={"/producto/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"/producto/category/:id"} element={<ItemListContainer/>}/>
          <Route path={"/cart"} element={<Cart/>}/>
          <Route path={"/order"} element={<Order/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;
