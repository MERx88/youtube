// import React from "react"
// import styled from "styled-components"
// import {useRecoilValue} from "recoil"

// //import component
// import ImgBtn from "../../components/ImgBtn"
// import ImgTextBtn from "../../components/ImgTextBtn"

// //import recoil state 
// import {VideoDataState} from "../../recoil/VideoState"

// //import style 
// import {Div} from "../../styles/Div"
// import {CircleImg} from "../../styles/Img"
// import {P} from "../../styles/P"
// import {useMaxWide, useWide, useNomal} from "../../hooks/useMedia"

// //======Component======//

// const VideoBtnInfo=()=>{
//     //mediaquery
//     let isMaxWide=useMaxWide()
//     let isWide=useWide()
//     let isNomal=useNomal()
//     //state
//     const [isLike,setIsLike]=React.useState(false)
//     //recoilState
//     const videoDataValue=useRecoilValue(VideoDataState)
//     //event
//     const likeEvent=()=>{
//         isLike ? setIsLike(false) :  setIsLike(true)
//     }

//     const profileMenuBtnEvent=()=>{

//         const target=event.target.id

//         switch(target){
//             case "0":
                
//                 break
//             case "1":
//                 likeEvent()
//                 break
//             case "2":
//                 break
//             case "3":
//                 break
//             case "4":
//                 break
//             case "5":
//                 break
//             case "6":
//                 break
//             case "7":
//                 break
//             case "8":
//                 likeEvent()
//                 break
//         }
//     }

//     return (
//         <Div  height="100px" margin_top="10px" border_radius="15px" background_color="#3d3d3d" flex_direction="column" >
//             <Div margin_top="20px" margin_bottom="5px" margin_left="20px">
//                 <P color="white" font_size="medium">
//                     {videoDataValue[0]?.videoView}
//                 </P>
//                 <P color="white" font_size="medium" margin_left="5px">
//                     {videoDataValue[0]?.videotUploadDate}
//                 </P>
//             </Div>
//             <P color="white" font_size="medium" margin_left="20px">
//                 {videoDataValue[0]?.videoInfo}
//             </P>
//         </Div>
//     )
// }

// export default VideoBtnInfo