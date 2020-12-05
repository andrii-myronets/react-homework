import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCar, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';



function Product({
    id,
    picUrl,
    carMake,
    carModel,
    color,
    price,
    btnCard,
    favorites,
    setFavorites,
    cart
 }) {  

    const inFavorite = favorites.includes(id);
    const inCart = cart.includes(id)
   
    const favoriteHeandler = () => {
          if (!inFavorite) {
            setFavorites([...favorites, id]);
            localStorage.setItem('favorites', JSON.stringify([...favorites, id]))
        } else {
            setFavorites(favorites.filter(el => el !== id));
            localStorage.setItem('favorites', JSON.stringify(favorites.filter(el => el !== id)))
        }       
    }

    return(    
        <div className="product-card">
            <img className="proguct-img" src={ picUrl } alt="img NOT FOUND"/>
            <div className="product-header">
                <div className="product-header-main">{ carMake } <span className="product-header-text">{ carModel }</span></div>
                <FontAwesomeIcon icon={ faStar } style={inFavorite && {color:"gold"}} onClick={favoriteHeandler}/>
            </div>
            <div className="product-body">
                <p className="product-body-art">art: { id }</p>
                <p className="product-body-text">
                    <span>Color: { color }  </span>
                    <FontAwesomeIcon icon={ faCar } style={{color:`${color}`}}/>
                </p>
            </div>
            <div className="product-footer">
                <span>{ price }</span>
                {!inCart ? <Button {...btnCard}/> : <FontAwesomeIcon icon={faCartArrowDown}/>}
            </div>
        </div>      
    )
}

Product.protoTypes = {
    id: PropTypes.string,
    picUrl: PropTypes.string,
    carMake: PropTypes.string,
    carModel: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.string, 
    btnCard: PropTypes.object,
    favorites: PropTypes.array,
    setFavorites: PropTypes.func,
    cart: PropTypes.array
}

export default Product;