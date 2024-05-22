import './ShoppingBag.css'
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export default function ShoppingBag({data}) {
    const bagContent = data.filter(e => e.amount_in_cart > 0)
    return (
        <div className='shoppinng-cart'>
            <div className="title">
          Корзина
        </div>
        {bagContent.map((me) => (<ShoppingCart key={me.id} id={me.id} name={me.name} description={me.description} count={me.amount_in_cart} price={me.price} img_source={me.img_source}/>))}
            
        </div>
    )
}