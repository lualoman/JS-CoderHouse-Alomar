import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Productos from './components/Productos';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<Productos/>}/>
          <Route path={"/producto/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={"/producto/category/:id"} element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
