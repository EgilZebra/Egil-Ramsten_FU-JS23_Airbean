import { useCoffeeCart } from '../../assets/data/States'
import { order } from '../../assets/data/Types';
import './cartitem.scss'

export const Cartitem = () => {
    const coffeOrder = useCoffeeCart((state) => state.coffee);

    return (
        <div className="cart-item--wrapper">
            <h1 className="cart-item--headline">Din Beställning</h1>
            <div className="cart-item--card">
                {(coffeOrder.length > 0 ) ? 
                (
                    coffeOrder.map((coffee: {item: order, count: number}, index: number) => {
                        return( 
                            <div key={index} className='cart-item--card-wrapper' >
                                <div className='cart-item--info'>
                                    <h1 className='cart-item--name'>{coffee.item.name}</h1>
                                    <h1 className='cart-item--price'>{coffee.item.price}</h1>
                                </div>
                                <div className='cart-item--quantity'>
                                    <button className='cart-item--card-btn cart-item--card-btn__increase'></button>
                                    <p className='cart-item--count'>{coffee.count}</p>
                                    <button className='cart-item--card-btn cart-item--card-btn__decrease'></button>
                                </div>
                            </div>
                        )
                    })
                ) :
                null }
            </div>
            {/* send the order to teh api */}
            <button className="cart-item--btn">Take my money!</button>
        </div>
    )
}