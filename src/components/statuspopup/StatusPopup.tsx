import './statuspopup.scss';
import { useNavigate } from 'react-router-dom';
import { useLastestOrder } from '../../assets/data/States';

const StatusPopup = () => {
    const order = useLastestOrder((state) => state.order)
    console.log(order);
    const GoToPage = useNavigate()
    return (
        <div className='delivery--wrapper'>
            <h1 className='delivery--number'>ordernummer #<span style={{fontWeight: 700}}>{order.orderNr}</span></h1>
            <figure className='delivery--image'>
                <img src="src/assets/images/AirbeanDrone.svg" alt="delivery drone" />
            </figure>
            <h1 className='delivery--headline'>Din beställning är på väg!</h1>
            <h1 className='delivery--eta'><span style={{fontSize: '22px', fontWeight: '700'}}>{order.eta}</span> minuter</h1>
            <button className='delivery--btn' onClick={() => GoToPage('/menu')}>Ok, cool!</button>
        </div>
    )
}

export default StatusPopup