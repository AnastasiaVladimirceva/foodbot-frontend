import './Card.css'

export default function Card({name, description, price, img_source, category}) {
  
  return(
      <div className="card">
        <div className="card__top">
          <a href="#" className="card__image">
            <img
              src={"/img/" + img_source}
              alt="Not found"
            />
          </a>
        </div>
        <div className="card__bottom">
          <div className="card__prices">{price}
          </div>
          <a href="#" className="card__title">{name}
          </a>
          <p>{description}</p>
          <button className="card__add">В корзину</button>
        </div>
      </div>

      
        
    )
  }