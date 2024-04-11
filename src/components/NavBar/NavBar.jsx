import Button from "../Button/Button"
import { useState } from "react"


export default function NavBar() {
    const [contentType, setContentType] = useState(null)
    
    function handleClick(type) {
        setContentType(type)
        // console.log(type)
    }
    
    return (
        <section>
          <h3>Меню</h3>
          <div className="navBar">
            <Button isActive={contentType == 'mainMenu'} onClick={() => handleClick('mainMenu')}>Основные блюда</Button>
            <Button isActive={contentType == 'burgers'} onClick={() => handleClick('burgers')}>Бургеры</Button>
            <Button isActive={contentType == 'salads'} onClick={() => handleClick('salads')}>Салаты</Button>
            <Button isActive={contentType == 'dessert'} onClick={() => handleClick('dessert')}>Десерты</Button>
          </div>
        </section>
    )
}