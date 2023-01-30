import React from "react"
import styled from "styled-components"
import {useRecoilValue} from "recoil"

//import recoil state 
import {RecommandVideoDataState } from "../../recoil/VideoState"

//import style 
import {Div} from "../../styles/Div"
import {Img} from "../../styles/Img"
import {H1} from "../../styles/H1"
import {P} from "../../styles/P"

//======Component======//

const RecommandVideo=(props)=>{

    const {index}=props

    const recommandVideoDataValue=useRecoilValue(RecommandVideoDataState)

    return (
        <Div  width="380px" height="100px" margin_top="8px">
            <Img width="50%" border_radius="10px" src={recommandVideoDataValue[index].recommandVideoThumbnail}/>
            <Div width="50%" height="100%" margin_left="8px" flex_direction="column">
                <H1 font_size="small" margin_top="8px">{recommandVideoDataValue[index].recommandVideoTitle}</H1>
                <P color="#3d3d3d" font_size="small" margin_top="3px">{recommandVideoDataValue[index].channelTitle}</P>
                <Div  margin_top="3px" flex_style="flexCenter">
                    <P color="#3d3d3d" font_size="small">
                        {recommandVideoDataValue[index].recommandVideoView}
                    </P>
                    <P color="#3d3d3d" font_size="small">
                        {recommandVideoDataValue[index].recommandVideoUploadDate}
                    </P>
                </Div>
            </Div>
        </Div>
    )
}

export default RecommandVideo