import Card from "../Card/Card"
import { differences, menu } from "../../data"
import './Form.css'
export default function Form() {
    return (
        <div className='cards'>{menu.map((me) => (<Card key={me.id} {...me} />))}</div>
    )

}