export type menu = {
    'id': string,
    "title": string,
    "desc": string,
    "price": number
}
export type order = {
    "id": number,
    "name": string,
    "price": number
}
export type history = {
    "total": number,
    "orderNr": string,
    "orderDate": string
}