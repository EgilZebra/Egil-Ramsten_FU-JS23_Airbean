import { BaseUrl } from "../assets/data/API"
import { history  } from "../assets/data/Types";

export const FetchHistory = async() => {
    const tokenString: string | null = sessionStorage.getItem('userToken');
    const token: string = (tokenString !== null ) ? tokenString : '';
    console.log(token);
    let response = await fetch((`${BaseUrl}api/user/history`), {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
    })
    console.log(response.status)
    let data: {'success': boolean, 'orderHistory': history[], 'error'?: string} = await response.json()
    console.log(data);
    return data
}