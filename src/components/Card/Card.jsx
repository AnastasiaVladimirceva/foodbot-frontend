import './Card.css'
import image from '../../img/khachapuri.png'

export default function Card({name, description, price, img_source}) {
  return(
      <div className="card">
        <div className="card__top">
          <a href="#" className="card__image">
            <img
              src={image}
              alt="Not found"
            />
          </a>
        </div>
        <div className="card__bottom">
          <div className="card__prices">{price}
          </div>
          <a href="#" className="card__title">{name}
          </a>
          <button className="card__add">В корзину</button>
        </div>
      </div>

      
        
    )
  }