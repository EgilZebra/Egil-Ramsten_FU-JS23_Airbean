import './orderhistory.scss';
import { history, user } from '../../assets/data/Types';
import { FetchHistory } from '../../functions/FetchHistory';
import { FetchToken } from '../../functions/FetchToken';
import { useEffect, useState } from 'react';
import ProfilePopup from '../profilepopup/ProfilePopup';
import { useCurrentUser } from '../../assets/data/States';

export const OrderHistory = () => {
    const [userHistory, setUserHistory ] = useState([{"total": 0,"orderNr": '', "orderDate": ''}])
    const [totalSpent, setTotalSpent] = useState(0)
    const [toggle, setToggle] = useState(['hidden', '0'])
    const User: user = useCurrentUser((state) => state)

    const getHistory = async() => {
        let response: {'success': boolean, 'orderHistory': history[], 'error'?: string} = await FetchHistory()
        if (response.success) {
            console.log(response.orderHistory)
            setUserHistory(response.orderHistory)
            let newTotal: number = (
                response.orderHistory.reduce((total, items) => 
                total + (items.total), 0)
            )
            setTotalSpent(newTotal)
        } else {
            alert(response.error)
            
        }
    }

    const checkToken = async() => {
        let response: {'success': boolean, 'error'?: string} = await FetchToken();
        if (response.success) {
            getHistory();
        } else {
            if (User.username !== 'Gäst') {
                toggleLogin() 
            } 
            
        }
    }

    useEffect((() => {
        checkToken()
    }), []) ; 

    const toggleLogin = () => {
        setToggle(['', '5'])
    }

    return (
        <div className='history--wrapper'>
            <div style={{zIndex: toggle[1]}} className={`landingpage--login ${toggle[0]}`}>
                    <ProfilePopup />
                </div>
            <h1 className='history--headline'>Orderhistorik</h1>
            <div className='history--order'>
                { (userHistory) ?  
                userHistory.map((order: history, index: number) => {
                    return (
                    <div className='order--wrapper' key={index}>
                        <div className='order--top'>
                            <h1 className='order--number'>#{order.orderNr}</h1>
                            <h1 className='order--date'>{order.orderDate}</h1>
                        </div>
                        <div className='order--bottom'>
                            <h1 className='order--text'>total ordersumma</h1>
                            <h1 className='order--sum'>{order.total} kr</h1>
                        </div>
                    </div>
                )}):null}
            </div>
            <div className='history--total-wrapper'>
                <h1 className='history--total-headline'>Totalt spenderat</h1>
                <h1 className='history--total-price'>{totalSpent} kr</h1>
            </div>
        </div>
    )
}