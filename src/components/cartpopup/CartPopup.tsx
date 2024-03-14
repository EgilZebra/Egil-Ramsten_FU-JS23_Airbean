import { useState } from 'react';
import './cartpopup.scss'
import { Cartitem } from '../cartitem/Cartitem';
import { useCoffeeCart } from '../../assets/data/States';

const CartPopup = () => {
    const [cartState, setCartState] = useState({ cartshow: ' hide', btnactive: '', backround: ''})
    
    const cartItems = useCoffeeCart((state) => 
        state.coffee.reduce((total, coffee) => 
        total + coffee.count, 0)
    );

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
                {(cartItems > 0) ? <div className='cart--button-counter'>{cartItems}</div> : null}
                {(cartItems > 0) ? <button className='cart--button' onClick={showCart}><img src="/src/assets/images/CartIcon.svg" alt="cart" /></button>  : null}
            </div>
            <div className={`cart--options-wrapper${cartState.cartshow}`}>
                <figure className='cart--options-pointer'></figure>
                <Cartitem />
            </div>
        </div>
    )
} 

export default CartPopup