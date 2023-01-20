import {atom} from "recoil" 

export const ContentDataState = atom({
    "key":"ContentDataState",
    "default": []
})

//==========event==============//

export const sideMenuOpenState = atom({
    "key":"sideMenuOpenState",
    "default":false
})

export const mainState = atom({
    "key":"mainState",
    "default": "home"
})
