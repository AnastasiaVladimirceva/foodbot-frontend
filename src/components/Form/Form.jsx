import Card from "../Card/Card"
import './Form.css'
import { useState, useEffect } from "react"


export default function Form({title, data, category, setDataSet, chosenProducts, cartContent}) {
    const categoryContent = data.filter(e => e.category == title)
    const [cartProducts, setCartProducts] = useState(cartContent)
    console.log(chosenProducts)
    console.log(cartProducts)
    return (
        <div className="mainForm">
            <div className='cards'>{categoryContent.map((me) => (<Card key={me.id} {...me} onToggle={setCartProducts} cartProducts={cartProducts} setDataSet={setDataSet}/>))}</div>
        </div>
        
    )

}