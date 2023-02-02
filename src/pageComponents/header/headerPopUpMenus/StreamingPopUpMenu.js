import React from "react"
import styled,{ css }  from "styled-components"

//import component
import ImgTextBtn from "../../../components/ImgTextBtn"

//import style 
import {Div} from "../../../styles/Div"

const StreamingPopUpMenuDiv= styled(Div)`
    top :50px;  
`
// //     width="800px" height="500px" border_radius="20px" background_color="#3d3d3d" position="absolute" flex_direction="column" flex_style="flexRightCenter" 
// // `
// const POPUPMENU = {
//     streaming : css`
//     width : 250px;
//     height : 120px;
//     top :65px;
//     right : 120px; 
//     padding-top : 20px;
// `,

//======Component======//

const StreamingPopUpMenu=()=>{

    const BtnData=[
        {   "id":"0",
            "img":"/img/play-alt.png",
            "txt":"동영상 업로드"
        },
        {   "id":"1",
            "img":"/img/signal-stream.png",
            "txt":"실시간 스트리밍 시작"
        }
    ]

    return (
        <StreamingPopUpMenuDiv width="250px" height="130px" border_radius="20px" background_color="#3d3d3d" position="absolute" flex_direction="column" flex_style="flexCenter">
            <ImgTextBtn btn_style="HeadPopUpMenu" img_style="mediumImg" p_style="mediumP" data={BtnData[0]}/>
            <ImgTextBtn btn_style="HeadPopUpMenu" img_style="mediumImg" p_style="mediumP" data={BtnData[1]}/>
        </StreamingPopUpMenuDiv>
    )
}

export default StreamingPopUpMenu