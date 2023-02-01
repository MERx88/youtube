// import React from "react"
// import styled from "styled-components"
// import {useRecoilValue} from "recoil"

// //import component
// import MicPopUpMenu from "../../pageComponents/header/headerPopUpMenus/MicPopUpMenu"
// import StreamingPopUpMenu from "../../pageComponents/header/headerPopUpMenus/StreamingPopUpMenu"
// import AlarmPopUpMenu from "../../pageComponents/header/headerPopUpMenus/AlarmPopUpMenu"
// import ProfilePopUpMenu from "../../pageComponents/header/headerPopUpMenus/ProfilePopUpMenu"

// //import recoil state 
// import {popUpMenuState} from "../../recoil/HomeState"

// //import style 
// import {Div} from "../../../styles/Div"

// const PopUpMenuContainerDiv = styled(Div)`
//     z-index: 2;
// `

// const HeaderPopUpMenu=()=>{

//     const headerPopUpIconData=[
//         {   "id":"0",
//             "img":"/img/cross.png",
//         },
//         {   "id":"1",
//             "img":"/img/mic.png",
//         },
//         {   "id":"2",
//             "img":"/img/play-alt.png",
//             "txt":"동영상 업로드"
//         },
//         {   "id":"3",
//             "img":"/img/signal-stream.png",
//             "txt":"실시간 스트리밍 시작"
//         },
//         {   "id":"4",
//             "img":"/img/settings.png",
//         },
//         {   "id":"5",
//             "img":"/img/profileSectionBtnIcon2.png"
//         },
//         {   "id":"6",
//             "img":"/img/user.png",
//             "txt":"내 채널"
//         },
//         {   "id":"7",
//             "img":"/img/sign-out-alt.png",
//             "txt":"로그아웃"
//         }
//     ]
//     //state
//     const popUpMenuValue=useRecoilValue(popUpMenuState)

//     return (
//         <PopUpMenuContainerDiv width="100%" height="0px" position="fixed">
//                 {popUpMenuValue=="mic" && <MicPopUpMenu/>}
//                 {popUpMenuValue=="streaming" && <StreamingPopUpMenu/>}
//                 {popUpMenuValue=="alarm" && <AlarmPopUpMenu/>}
//                 {popUpMenuValue=="profile" && <ProfilePopUpMenu/>}
//         </PopUpMenuContainerDiv>
//     )
// }

// export default HeaderPopUpMenu