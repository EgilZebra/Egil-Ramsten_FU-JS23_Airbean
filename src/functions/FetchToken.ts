import { BaseUrl } from "../assets/data/API"

export const FetchToken = async() => {
    const tokenString: string | null = sessionStorage.getItem('userToken');
    const token: string = (tokenString !== null ) ? tokenString : '';
    console.log(token);
    let response = await fetch((`${BaseUrl}api/user/status`), {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
    })
    let data: {'success': boolean, 'error'?: string} = await response.json()
    console.log(data);
    return data
}