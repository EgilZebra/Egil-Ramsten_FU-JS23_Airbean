import { useCoffeeMenu, useCoffeeCart } from "../../assets/data/States";
import { menu, order } from "../../assets/data/Types"
import './coffee.scss'



export const Coffee  = () => {
    const menu: Array<menu> = useCoffeeMenu((state) => state.coffee)
    console.log(menu)
    const coffees: menu[] = menu.flat()
    const coffeCart = useCoffeeCart((state) => state.addCoffee)
    const selectItem = (coffee: menu) => {
        const toOrder: order = { name: coffee.title , price: coffee.price };
        coffeCart(toOrder);
    } 

    return (
        <div className="menu-coffee--wrapper">
        {
            coffees.map((coffee: menu, index: number) => {
                return (
                     <div className="menu-coffee--section" key={index}>
                        <button className="menu-coffee--button" onClick={() => selectItem(coffee)}>+</button>
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