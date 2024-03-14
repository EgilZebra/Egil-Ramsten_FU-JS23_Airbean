import { BaseUrl } from "../assets/data/API"
import { orderReturn } from "../assets/data/Types";

export const SendOrder = async(items: any, token?: string) => {
    const response = await fetch((`${BaseUrl}api/beans/order`), {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
            body: JSON.stringify({details: {order: items}})
        })
    const data: orderReturn = await response.json();
    return data

}