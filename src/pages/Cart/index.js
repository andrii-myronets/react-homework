import React from 'react';
import { connect } from 'react-redux';

import ProductList from '../../components/ProductList';
import { selectProductCart } from '../../store/productList';
import { FormCart } from '../../components/FormCart';

const mapStareToProps = state => ({
  cart: selectProductCart(state)
})

export const Cart = connect(mapStareToProps, null) (({listItems, cart }) => {  

  const listItemsInCart = listItems.filter( ({id}) => cart.includes(id));

  return (
      <>        
        <ProductList items={ listItemsInCart } cart={cart} delBtnCart={true}/>
        {cart.length>0 && <FormCart/>}
      </>   
  );
})

