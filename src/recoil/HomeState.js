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

//콘텐츠 인덱스 저장
//contents index
//HomeContent.js/video.js/videoBtnBox.js/videoInfoBox.js/
export const videoDataIndexState = atom({
    "key":"videoDataIndexState",
    "default": null
})

//비디오 페이지 전환
//video/main
//HomeContent.js/header.js/nav.js/
export const videoPageState = atom({
    "key":"videoPageState",
    "default":"main"
})




