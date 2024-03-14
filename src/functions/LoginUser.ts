import { BaseUrl } from "../assets/data/API"
import { user } from "../assets/data/Types";

export const LoginUser = async(user: user) => {
    let response = await fetch((`${BaseUrl}api/user/login`), {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'username': user.username ,'password': user.password})
    })
    let data: {'success': boolean, 'token': string, 'message'?: string} = await response.json()
    console.log(data);
    return data
}