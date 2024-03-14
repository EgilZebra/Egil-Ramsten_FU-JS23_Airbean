export type menu = {
    'id': string,
    "title": string,
    "desc": string,
    "price": number
}
export type order = {
    "name": string,
    "price": number
}
export type history = {
    "total": number,
    "orderNr": string,
    "orderDate": string
}
export type orderReturn = {
    'eta': number,
    'orderNr': string
}
export type user = {
    'username': string,
    'password': string
}