import FoodPage from '../FoodPage/FoodPage'
import './Card.css'
import { useState } from "react"

export default function Card({id, name, price, img_source, onToggle, cartProducts, setDataSet, chosenProducts}) {
  let haveInCart = false
  
  cartProducts.forEach(productID => {
    if (productID === id) {
      haveInCart = true
    }
  })

  const [count, setCount] = useState(1);

  const handleAddProductToCart = productID => {
    onToggle([...cartProducts, productID])
    setCount(1)
    setDataSet({'position_id': id, 'amount': count})
  }
  
  const handleRemoveFromCart = productID => {
    const newCartProducts = cartProducts.filter(id => id !== productID);
    onToggle(newCartProducts)
  }

  const plusFunction = id => {
    setCount(count+1)
  }

  const minusFunction = id => {
    if (count - 1 == 0) {
      handleRemoveFromCart(id)
    }
    else setCount(count-1)
  }
  return(
      <div className="card">
        <div className="card__top">
          <a href='/food-page' className="card__image">
            <img
              src={img_source}
              alt="Not found"
            />
          </a>
        </div>
        <div className="card__bottom">
          <div className="card__prices">{price}
          </div>
          <a href='/food-page' className="card__title">{name}
          </a>
        </div>
        {!haveInCart ? (
            <button className="card__add" 
              onClick={() => (handleAddProductToCart(id, count))}
              type="primary"
            >
              В корзину
            </button>
          ) : (
          <div className='counter'>
            <button className='button-primary minus' data-id={id} onClick={() => (minusFunction(id), setDataSet({'position_id': id, 'amount': count-1}))}>-</button>
          <b>{count}</b>
          <button className='button-primary plus' data-id={id} onClick={() => (plusFunction(id),  setDataSet({'position_id': id, 'amount': count+1}))}>+</button>
          </ div>
          )}
      </div>

      
        
    )
  }