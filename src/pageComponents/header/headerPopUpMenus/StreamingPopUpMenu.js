import React from "react"
import styled,{ css }  from "styled-components"

//import component
import ImgTextBtn from "../../../components/ImgTextBtn"

//import style 
import {Div} from "../../../styles/Div"

//======Style======//

const StreamingPopUpMenuDiv= styled(Div)`
    top :50px;  
`

//======Component======//

const StreamingPopUpMenu=()=>{

    const btnData=[
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
            <ImgTextBtn id="streamingPopUpMenuBtnId_0" shape="round" color="gray" size="small" flex_direction="row" flex_style="flexLeftCenter"  data={btnData[0]}/>
            <ImgTextBtn id="streamingPopUpMenuBtnId_1" shape="round" color="gray" size="small" flex_direction="row" flex_style="flexLeftCenter"  data={btnData[1]}/>
        </StreamingPopUpMenuDiv>
    )
}

export default StreamingPopUpMenu