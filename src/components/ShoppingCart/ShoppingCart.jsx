import './ShoppingCart.css'

export default function ShoppingCart({id, name, description, count, price, img_source}) {
    return (
        <div className="shopping-cart">
        <div className="item">

   
          <div className="image">
            <img src='' alt="" />
          </div>
   
          <div className="description">
            <span>{name}</span>
            <span>{description}</span>
          </div>
   
          <div className='counter-wrap'>
            <button className='button-primary minus' data-id={id} >-</button>
          <b>{count}</b>
          <button className='button-primary plus' data-id={id} >+</button>
          </ div>
   
          <div className="total-price">{count*price}</div>
        </div>
      </div>
    )
}