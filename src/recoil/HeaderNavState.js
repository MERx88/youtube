import {atom} from "recoil" 

export const sideMenuOpenState = atom({
    "key":"sideMenuOpenState",
    "default":false
})

export const mainState = atom({
    "key":"mainState",
    "default": "home"
})
