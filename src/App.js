import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import Product from './components/Products/Product';
import Cart from './components/Cart/Cart';



 
function App() {
  return (
    <>
       <Navbar />
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/products' component={Products} />
         <Route exact path='/products/:id' component={Product} />
         <Route exact path='/cart' component={Cart}/>
       </Switch>
    </>
  );
}

export default App;
