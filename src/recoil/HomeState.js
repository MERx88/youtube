import {atom} from "recoil" 

//백엔드 콘텐츠 데이터 저장
//contentData
//Home.js/HomeContent.js/
export const ContentDataState = atom({
    "key":"ContentDataState",
    "default": []
})

//사이드메뉴 오픈
//mic/streaming/alarm/profile
//Header.js/MicPopUpMenu.js/
export const popUpMenuState = atom({
    "key":"popUpMenuState",
    "default": null
})

//삭제해야할 스테이트
export const videoPageState = atom({
    "key":"videoPageState",
    "default":"main"
})


