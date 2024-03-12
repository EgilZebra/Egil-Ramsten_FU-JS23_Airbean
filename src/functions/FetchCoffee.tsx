import { BaseUrl } from "../assets/data/API"
import { useCoffeeMenu } from '../assets/data/States';
import { orderReturn } from "../assets/data/Types";

export const FetchCoffee = () => {

    const addCoffee = useCoffeeMenu((state: any) => state.addCoffee)

    fetch((`${BaseUrl}api/beans`), {
            method: 'GET'
        })
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        addCoffee(data.menu)
        console.log(data.menu);
    })
}

export const SendOrder = (items: any) => {
    fetch((`${BaseUrl}api/beans/order`), {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({details: {order: items}})
        })
    .then(function (res) {
        return res.json()
    })
    .then(function (data: orderReturn) {
        console.log(data)
        return (data)
    })
}