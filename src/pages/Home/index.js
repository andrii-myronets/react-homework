import React from 'react';
import ProductList from '../../components/ProductList';


export function Home({listItems}) { 
    
  return (        
      <ProductList items={listItems}/>   
  );
}
