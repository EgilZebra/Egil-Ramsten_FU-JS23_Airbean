import { BaseUrl } from "../assets/data/API"
import { useCoffeeMenu } from '../assets/data/States';

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