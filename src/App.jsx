import './App.css';
import React from 'react';

import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import CartProvider from './context/CartContext';


export const CartContext = React.createContext([]);
console.log('CartContext ', CartContext);


function App() {
  return (
    <>
    <BrowserRouter>
     
     <CartProvider>
     <NavBar />
     <Routes>
      <Route path ='/' element = {<ItemListContainer />}/>
      <Route path ='/categoria/:categoriaId' element = { <ItemListContainer />}/>
      <Route path ='/cart' element = {<Cart />}/>
      <Route path ='/detalle/:detalleId' element = { <ItemDetailContainer />}/>
     </Routes>
     </CartProvider>
    
     
    </BrowserRouter>
   
   </>
  );
}

export default App;
