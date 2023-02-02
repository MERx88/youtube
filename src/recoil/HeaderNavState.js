import {atom} from "recoil" 

//사이드메뉴 오픈
//boolean
//Header.js/Nav.js/
export const sideMenuOpenState = atom({
    "key":"sideMenuOpenState",
    "default":false
})

//메인페이지에 띄울 컴포넌트
//home/shorts/subscribe/storage
//Main.js/Nav.js/
export const mainState = atom({
    "key":"mainState",
    "default": "home"
})
