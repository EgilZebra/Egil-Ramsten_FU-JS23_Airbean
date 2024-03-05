import { create } from 'zustand';
import { menu } from './Types'

type coffeStore = {
    coffee: menu[],
    addCoffee: (x: menu) => void;
}
 
export const useCoffeeMenu = create<coffeStore>((set) => ({
    coffee: [],
    addCoffee: (newData: menu) => {
        set(() => ({coffee: [newData]}))
    }
}))