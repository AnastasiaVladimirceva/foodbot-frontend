import { description } from '../../data'
import FoodPage from '../FoodPage/FoodPage'
import './Card.css'

export default function Card({id, name, price, img_source, category, description}) {

  
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
          <a href={<FoodPage name={name} description={description} />} className="card__title">{name}
          </a>
          <button className="card__add">В корзину</button>
        </div>
      </div>

      
        
    )
  }