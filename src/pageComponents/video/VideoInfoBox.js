import React from "react"
import styled from "styled-components"
import {useRecoilValue} from "recoil"

//import recoil state 
import {ContentDataState, videoDataIndexState} from "../../recoil/HomeState"

//import style 
import {Div} from "../../styles/Div"
import {P} from "../../styles/P"

//======Component======//

const VideoInfoBox=()=>{
    //state
    const [isInfoBoxExpansion,setIsInfoBoxExpansion]=React.useState(false)
    //recoilState
    const contentDataValue=useRecoilValue(ContentDataState)
    const videoDataIndexValue=useRecoilValue(videoDataIndexState)
    //event
    const infoBoxEvent=()=>{
        isInfoBoxExpansion ? setIsInfoBoxExpansion(false) :  setIsInfoBoxExpansion(true)
    }

    return (
        <Div  height={ isInfoBoxExpansion ? "auto" : "100px"} margin_top="10px"  border_radius="15px" background_color="#3d3d3d" flex_direction="column" onClick={infoBoxEvent}>
            <Div margin_top="20px" margin_bottom="5px" margin_left="20px">
                <P font_size="medium">
                    {contentDataValue[videoDataIndexValue].contentView}
                </P>
                <P font_size="medium" margin_left="5px">
                    {contentDataValue[videoDataIndexValue].contentUploadDate}
                </P>
            </Div>
            <P font_size="medium" margin_left="20px" margin_bottom="20px">
                {contentDataValue[videoDataIndexValue].contentInfo}
            </P>
        </Div>
    )
}

export default VideoInfoBox