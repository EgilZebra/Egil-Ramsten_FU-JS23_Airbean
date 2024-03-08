import { create } from 'zustand';
import { menu, order } from './Types'

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
    removeCoffee: (x: order) => void
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
            var removeIndex = coffeeCopy.findIndex((coffee) => coffee.item.name === newData.name);
            if ( removeIndex !== -1 ) {
                coffeeCopy.splice(removeIndex, 1);
            } else {
                coffeeCopy[removeIndex].count--
            }
            return {coffee: coffeeCopy}
        })}
}))

type coffeeID = {
    id: number,
    increaseId: () => void,
    resetId: () => void
}

export const useCoffeeId = create<coffeeID>((set) => ({
    id: 0,
    increaseId: () => {
        set((state) => ({id: state.id++ }))
    } ,
    resetId: () => {
        set(() => ({id: 0}))
    }
}))