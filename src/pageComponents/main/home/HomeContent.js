import React from "react"
import styled, { css } from "styled-components"
import {useRecoilValue, useSetRecoilState} from "recoil"

//import component
import ImgTextBtn from "../../../components/ImgTextBtn"

//import recoil state 
import {ContentDataState} from "../../../recoil/HomeState"
import {videoPageState} from "../../../recoil/HomeState"

//import style 
import {Div,CusorDiv,NoneEventsDiv} from "../../../styles/Div"
import {Img, CircleImg} from "../../../styles/Img"
import {H1} from "../../../styles/H1"
import {P} from "../../../styles/P"

//======style======//

const ContentContainerDiv = styled(CusorDiv)`
    flex-basis: 250px;
    flex-grow: 1;
    max-width :350px;
`
const MouseOverDiv = styled(NoneEventsDiv)`
    top:83%;
    right: 5px;
`
//================================//

const ContentDiv = styled.div`
    ${(p) => p.whichContentStyle}
`
const CONTENT_STYLE = {
    Simple : css`
        margin-bottom: 30px;
        flex-basis: 250px;
        flex-grow: 1;
        cursor: pointer;
    `,
    Expansion : css`
        width : 350px;
        height: 350px;
        background-color : #212121;
        margin-top: 0px;
        position: absolute;
        border-radius: 15px;
        z-index:1;
        cursor: pointer;
    `
}

//======Component======//

const HomeContent=(props)=>{
    //props
    const {index, contentExpansionBtnData}=props
    //state
    const [isMouseOver,setIsMouseOver]=React.useState(false)
    const [isContentExpansion,setIsContentExpansion]=React.useState(false)
    //recoilState
    const setVideoPageState=useSetRecoilState(videoPageState)
    const contentDataValue=useRecoilValue(ContentDataState)
    //event
    const contentMouseOverInfoEvent=()=>{
        isMouseOver ? setIsMouseOver(false) :  setIsMouseOver(true)
    }
    const contentExpansionEvent=()=>{
        isContentExpansion ? setIsContentExpansion(false) :  setIsContentExpansion(true)
    }

    const contentExpansionBtnEvent=()=>{

        const target=event.target.id

        switch(target){
            case "homeContentExpansionBtnId_0":
                setVideoPageState("video") 
                break
            case "homeContentExpansionBtnId_1":
                break
        }
    }

    return (
        <ContentContainerDiv  margin_bottom="30px" position="relative" flex_style="flexTopCenter">  
            <ContentDiv whichContentStyle={CONTENT_STYLE[isContentExpansion ? "Expansion" : "Simple"]} onMouseOver={contentMouseOverInfoEvent} onMouseOut={contentMouseOverInfoEvent} onClick={contentExpansionEvent}>
                <NoneEventsDiv  width="100%" position="relative">
                <Img width="100%" border_radius="25px" src={contentDataValue[index].contentThumbnail}/>
                {
                    isMouseOver
                    ? <MouseOverDiv width="110px" height="19px" background_color="#181818" position="absolute" border_radius="3px" flex_style="flexCenter">
                            <P font_size="small" color="white" >
                                클릭하여 재생하기
                            </P>
                      </MouseOverDiv>
                    : <MouseOverDiv width="110px" height="19px" background_color="#181818" position="absolute" border_radius="3px" flex_style="flexCenter">
                        <P font_size="small" color="white" >
                            {contentDataValue[index].contentRuntime}
                        </P>
                      </MouseOverDiv>
                }
                </NoneEventsDiv>

                <NoneEventsDiv width="100%" margin_top="8px" position="relative">
                    <CircleImg height="45px" src={contentDataValue[index].profileImg}/>
                    {
                        isMouseOver
                        ? <i class="fa-solid fa-ellipsis-vertical mouseOverMenuImg"></i>
                        : null
                    }
                    <Div width="70%" margin_left="10px" flex_direction="column">
                        <H1 font_size="small" font_weight="bold">{contentDataValue[index].contentTitle}</H1>
                        <P font_size="medium" color="gray">{contentDataValue[index].channelTitle}</P>
                        <Div width="120px" flex_style="flexSpaceBetween">
                            <P font_size="medium" color="gray">{contentDataValue[index].contentView}</P>
                            <P font_size="medium" color="gray">{contentDataValue[index].contentUploadDate}</P>
                        </Div>
                    </Div>
                </NoneEventsDiv>
                {
                    isContentExpansion
                    ?
                    <Div width="100%" height="60px" flex_style="flexSpaceAround" onClick={contentExpansionBtnEvent}>
                        <ImgTextBtn id="homeContentExpansionBtnId_0" shape="round" color="gray" size="small" flex_direction="row" flex_style="flexCenter"  data={contentExpansionBtnData[0]}/>
                        <ImgTextBtn id="homeContentExpansionBtnId_1" shape="round" color="gray" size="small" flex_direction="row" flex_style="flexCenter"  data={contentExpansionBtnData[1]}/>
                    </Div>
                    :
                    null
                }
            </ContentDiv>
        </ContentContainerDiv>
    )
}

export default HomeContent