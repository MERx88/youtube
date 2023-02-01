import React from "react"
import styled,{ css }  from "styled-components"

//import component
import ImgTextBtn from "../../components/ImgTextBtn"

//import style 
import {Div} from "../../../styles/Div"

// const PopUpMenu= styled.div`
   
//     ${(p) => p.popUpMenuStyle}

//     width="800px" height="500px" border_radius="20px" background_color="#3d3d3d" position="absolute" flex_direction="column" flex_style="flexRightCenter" 
// `
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
        <Div width="250px" height="120px" border_radius="20px" background_color="#3d3d3d" position="absolute" flex_direction="column" flex_style="flexLeftCenter">
            <ImgTextBtn position="HeadPopUpMenu" imgPosition="HeadPopUpMenu" pPosition="HeadPopUpMenu" data={headmenuPopUpMenuData[0]}/>
            <ImgTextBtn position="HeadPopUpMenu" imgPosition="HeadPopUpMenu" pPosition="HeadPopUpMenu" data={headmenuPopUpMenuData[1]}/>
        </Div>
    )
}

export default StreamingPopUpMenu