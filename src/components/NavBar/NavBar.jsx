import Button from "../Button/Button"
import { useState } from "react"
import { differences } from "../../data"


export default function NavBar({category, onChange}) {
    const [contentType, setContentType] = useState('Бургеры 🍔')

    return (
        <section>
          <h3>Меню</h3>
          <div className='navBar'>
            {category.map((inform) => (<Button key={inform.id} {...inform} isActive={contentType == inform.name} onClick={() => {onChange(inform.name), setContentType(inform.name)}}/>))}
          </div>
        </section>
    )
}