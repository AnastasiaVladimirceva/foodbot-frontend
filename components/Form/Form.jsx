import Card from "../Card/Card"
import { menu, differences, description } from "../../data"
import './Form.css'
import { useState } from "react"

export default function Form({category, data}) {
    const categoryContent = data.filter(e => e.category == category)

    const [cartProducts, setCartProducts] = useState([])

    console.log(cartProducts)


    return (
        <div className="mainForm">
            <h3>{differences[category]}</h3>
            <p>{description[category]}</p>
            <div className='cards'>{categoryContent.map((me) => (<Card key={me.id} {...me} onToggle={setCartProducts} cartProducts={cartProducts}/>))}</div>
        </div>
        
    )

}