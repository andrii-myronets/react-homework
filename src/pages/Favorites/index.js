import React from 'react';
import { connect } from 'react-redux';

import ProductList from '../../components/ProductList';
import { selectProductFavorites } from '../../store/productList';

const mapStareToProps = state => ({
  favorites: selectProductFavorites(state)
})

export const Favorites = connect(mapStareToProps, null ) (({listItems, favorites}) => {
       
    const listItemsInFavorite = listItems.filter( ({id}) => favorites.includes(id));  

  return (        
      <ProductList items={ listItemsInFavorite } favorites={favorites}/>   
  );
});



