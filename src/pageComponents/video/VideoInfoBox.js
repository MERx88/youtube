import React from "react"
import styled from "styled-components"
import {useRecoilValue} from "recoil"

//import recoil state 
import {VideoDataState} from "../../recoil/VideoState"

//import style 
import {Div} from "../../styles/Div"
import {P} from "../../styles/P"
import {useMaxWide, useWide, useNomal} from "../../hooks/useMedia"

//======Component======//

const VideoInfoBox=()=>{
    //mediaquery
    let isMaxWide=useMaxWide()
    let isWide=useWide()
    let isNomal=useNomal()
    //state
    const [isInfoBoxExpansion,setIsInfoBoxExpansion]=React.useState(false)
    //recoilState
    const videoDataValue=useRecoilValue(VideoDataState)
    //event
    const infoBoxEvent=()=>{
        isInfoBoxExpansion ? setIsInfoBoxExpansion(false) :  setIsInfoBoxExpansion(true)
    }

    return (
        <Div  height={ isInfoBoxExpansion ? "auto" : "100px"} margin_top="10px"  border_radius="15px" background_color="#3d3d3d" flex_direction="column" onClick={infoBoxEvent}>
            <Div margin_top="20px" margin_bottom="5px" margin_left="20px">
                <P color="white" font_size="medium">
                    {videoDataValue[0]?.videoView}
                </P>
                <P color="white" font_size="medium" margin_left="5px">
                    {videoDataValue[0]?.videotUploadDate}
                </P>
            </Div>
            <P color="white" font_size="medium" margin_left="20px" margin_bottom="20px">
                {videoDataValue[0]?.videoInfo}
            </P>
        </Div>
    )
}

export default VideoInfoBox