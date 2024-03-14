import { create } from 'zustand';
import { menu, order, orderReturn } from './Types'

type coffeMenu = {
    coffee: menu[],
    addCoffee: (x: menu) => void;
}
 
export const useCoffeeMenu = create<coffeMenu>((set) => ({
    coffee: [],
    addCoffee: (newData: menu) => {
        set(() => ({coffee: [newData]}))
    }
}))

type CoffeeCart = {
    coffee: Array<{item: order, count: number}>,
    addCoffee: (x: order) => void,
    removeCoffee: (x: order) => void,
    clearCoffee: () => void
}

export const useCoffeeCart = create<CoffeeCart>((set) => ({
    coffee: [],
    addCoffee: (newData: order) => {
        set((state) => {
            var coffeeCopy = [...state.coffee];
            if ( state.coffee.some(coffee => coffee.item.name == newData.name)) {
                var newIndex = coffeeCopy.findIndex((coffee) => coffee.item.name == newData.name) ;
                coffeeCopy[newIndex].count++
            } else {
                coffeeCopy = [...coffeeCopy, { item: newData, count: 1 }]
            }
            return {coffee: coffeeCopy}
        })         
    },
    removeCoffee: (newData: order) => {
        set((state) => {
            var coffeeCopy = [...state.coffee];
            var newIndex = coffeeCopy.findIndex((coffee) => coffee.item.name == newData.name)
            if ( state.coffee[newIndex].count > 1) {
                coffeeCopy[newIndex].count--;
            } else {
                coffeeCopy.splice(newIndex, 1);
            }
            return {coffee: coffeeCopy}
        })},
    clearCoffee: () => {
        set(() => ({coffee: []}))
    }
}))

export type latestOrder = {
    order: orderReturn
    setOrder: (x: orderReturn) => void
}

export const useLastestOrder = create<latestOrder>((set) => ({
    order: {eta: 0, orderNr: ''},
    setOrder: (newOrder: orderReturn) => {
        set(() => ({order:newOrder}))
    }
}))

export type currentUser = {
    username: string,
    password: string,
    setCurrentUser: (newUser: { 'username': string, 'password': string}) => void
}

export const useCurrentUser = create<currentUser>((set) => ({
    username: '',
    password: '',
    setCurrentUser: ( newUser: { 'username': string, 'password': string} ) => {
        set(() => ({username: newUser.username, password: newUser.password}))}
}))