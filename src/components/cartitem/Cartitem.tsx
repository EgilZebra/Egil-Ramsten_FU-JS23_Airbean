import { useNavigate } from 'react-router-dom';
import { useCoffeeCart, useLastestOrder, latestOrder } from '../../assets/data/States'
import { order, orderReturn } from '../../assets/data/Types';
import { SendOrder } from '../../functions/OrderCoffee';
import './cartitem.scss'

export const Cartitem = () => {
    const coffeOrder = useCoffeeCart((state) => state.coffee);
    const addCoffee: Function = useCoffeeCart((state) => state.addCoffee);
    const removeCoffee: Function = useCoffeeCart((state) => state.removeCoffee);
    const GoToPage: Function = useNavigate()
    const setOrder: Function = useLastestOrder((state: latestOrder) => state.setOrder)
    const clearCoffee: Function = useCoffeeCart((state) => state.clearCoffee)

    const totalPrice = useCoffeeCart((state) => 
        state.coffee.reduce((total, coffee) => 
        total + (coffee.count * coffee.item.price), 0)
    );
    const OrderCoffee = async() => {
        const order: Array<Object> = [];
        const getToken: string |null = sessionStorage.getItem('userToken');
        const token: string = (getToken !== null) ? getToken : ''
        coffeOrder.forEach(coffe => {
            for (let i=0; i<coffe.count; i++) {
            order.push(coffe.item);
            }
        });
        let lastOrder: orderReturn = await SendOrder(order, token)
        setOrder(lastOrder);
        console.log(lastOrder)
        GoToPage('/orderstatus')
        clearCoffee()
    }

    return (
        <div className="cart-item--wrapper">
            <h1 className="cart-item--headline">Din Beställning</h1>
            <div className="cart-item--card-wrapper">
                <div className='cart-card--wrapper'>
                    {(coffeOrder.length > 0 ) ? 
                    (
                        coffeOrder.map((coffee: {item: order, count: number}, index: number) => {
                            return( 
                                <div key={index} className='cart-card--item-wrapper' >
                                    <div className='cart-card--info'>
                                        <h1 className='cart-card--name'>{coffee.item.name}<span></span></h1>
                                        <h1 className='cart-card--price'>{coffee.item.price} kr</h1>
                                    </div>
                                    <div className='cart-card--quantity'>
                                        <button className='cart-card--btn cart-card--btn__increase' onClick={() => addCoffee(coffee.item)}><img src='src/assets/images/ChevronUp.svg' /></button>
                                        <p className='cart-card--count'>{coffee.count}</p>
                                        <button className='cart-card--btn cart-card--btn__decrease' onClick={() => removeCoffee(coffee.item)}><img src='src/assets/images/ChevronDown.svg' /></button>
                                    </div>
                                </div>
                            )
                        })
                    ) :
                    <p>Din korg är tyvärr tom</p> }
                </div>
                <div className='cart-total--wrapper'>
                    <div className='cart-total--info'>
                        <h1 className='cart-total--headline'>Total</h1>
                        <h1 className='cart-total--lead'>ink moms + drönarleverans</h1>
                    </div>
                    <div className='cart-total--price-wrapper'>
                        <h1 className='cart-total--price'>{totalPrice}</h1>
                    </div>
                </div>
            </div>
            <button className="cart-item--btn" onClick={() => OrderCoffee()}>Take my money!</button>
        </div>
    )
}