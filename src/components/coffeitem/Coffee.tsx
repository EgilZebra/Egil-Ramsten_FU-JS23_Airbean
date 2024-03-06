import { useCoffeeMenu } from "../../assets/data/States";
import { menu } from "../../assets/data/Types"
import './coffee.scss'

export const Coffee  = () => {
    const menu: Array<menu> = useCoffeeMenu((state) => state.coffee)
    console.log(menu)
    const coffees = menu.flat()

    return (
        <div className="menu-coffee--wrapper">
        {
            coffees.map((coffee: menu, index: number) => {
                return (
                     <div className="menu-coffee--section" key={index}>
                        <button className="menu-coffee--button">+</button>
                        <div className="menu-coffee--info-wrapper">
                            <div className="menu-coffee--name-wrapper">
                                <h1 className="menu-coffee--name">{coffee.title}</h1>
                                <h1 className="menu-coffee--price">{coffee.price} kr</h1>
                            </div>
                            <p className="menu-coffee--desc">{coffee.desc}</p>
                        </div>
                    
                     </div>
                )
            } )
        }
        </div>
    )
}