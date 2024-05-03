import FoodPage from '../FoodPage/FoodPage'
import './Card.css'
import {useState} from 'react'

export default function Card({id, name, price, onToggle, cartProducts}) {
  let haveInCart = false;
  
  const handleAddProductToCart = productID => {
    onToggle([...cartProducts, productID]);
  }
  const handleRemoveFromCart = productID => {
    const newCartProducts = cartProducts.filter(id => id !== productID);
    onToggle(newCartProducts);
  }
  cartProducts.forEach(productID => {
    if (productID === id) {
      haveInCart = true;
    }
  })

  
  
  return(
      <div className="card">
        <div className="card__top">
          <a href="#" className="card__image">
            <img
              src='https://menunedeli.ru/wp-content/uploads/2022/07/41322293-5B97-451F-886E-2522AB91F67B-1200x948.jpeg'
              alt="Not found"
            />
          </a>
        </div>
        <div className="card__bottom">
          <div className="card__prices">{price}
          </div>
          <a href={<FoodPage id={id}/>} className="card__title">{name}
          </a>
          {!haveInCart ? (
            <button className="card__add" 
              onClick={() => handleAddProductToCart(id)}
              type="primary"
            >
              В корзину
            </button>
          ) : (
            <button className="card__add" 
              onClick={() => handleRemoveFromCart(id)}
              type="primary"
            >
              Удалить
            </button>
          )}
        </div>
      </div>

      
        
    )
  }