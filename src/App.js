import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Home, Favorites, Cart } from './pages';
import { Header } from './commons/Header';
import { selectProductList, getProducts } from './store/productList';

const mapStateToProps = state => ({
  products: selectProductList(state)
})

const App = connect(mapStateToProps, { getProducts }) ( ({products, getProducts }) =>{
 
  useEffect(()=>{
    getProducts()
  },[getProducts])
  
  
  return (
       <Router>     
          <Header/>        
          <Switch>
            <Route path="/" exact>
              <Home listItems={ products }/>
            </Route>
            <Route path="/favorites">
              <Favorites listItems={ products }/>
            </Route>
            <Route path="/cart">
              <Cart listItems={ products }/>
            </Route>
          </Switch>
        </Router>
  );
});


export default App;
