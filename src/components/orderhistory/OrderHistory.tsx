import './orderhistory.scss';

export const OrderHistory = () => {
    return (
        <div className='history--wrapper'>
            <h1 className='history--headline'>Orderhistorik</h1>
            <div>
                { <p> oerders</p>}
            </div>
            <div className='history--total-wrapper'>
                <h1 className='history--total-headline'>Totalt spenderat</h1>
                <h1 className='history--total-price'>9999 kr</h1>
            </div>
        </div>
    )
}