
import './FoodPage.css'

export default function FoodPage({name, description}) {
    return (
        <div className="mainPage">
            <div className="cardImage">
            <img src="https://menunedeli.ru/wp-content/uploads/2022/07/41322293-5B97-451F-886E-2522AB91F67B-1200x948.jpeg" alt="Not found" />
            </div>
            
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}