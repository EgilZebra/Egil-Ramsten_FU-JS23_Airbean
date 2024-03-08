import { useState } from 'react';
import './cartpopup.scss'
import { Cartitem } from '../cartitem/Cartitem';
import { useCoffeeCart } from '../../assets/data/States';

const CartPopup = () => {
    const [cartState, setCartState] = useState({ cartshow: ' hide', btnactive: '', backround: ''})
    const cartItems = useCoffeeCart((state) => state.coffee.length);
    const showCart = () => {
        if ( cartState.btnactive == '') {
            setCartState( { cartshow: '', btnactive: ' btn-active', backround: ' background-faded'} );
        } else {
            setCartState({ cartshow: ' hide', btnactive: '', backround: ''});
        }
    }
    return (
        <div className={`cart--wrapper${cartState.backround}`}>
            <div className={`cart--button-wrapper${cartState.btnactive}`}>
                <div className='cart--button-counter'>{(cartItems > 0) ? cartItems : ''}</div>
                <button className={`cart--button`} onClick={showCart}><img src="/src/assets/images/CartIcon.svg" alt="cart" /></button>
            </div>
            <div className={`cart--options-wrapper${cartState.cartshow}`}>
                <figure className='cart--options-pointer'></figure>
                <Cartitem />
            </div>
        </div>
    )
} 

export default CartPopup