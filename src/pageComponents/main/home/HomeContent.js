import React from "react"
import styled, { css } from "styled-components"

import ImgTextBtn from "../../../components/ImgTextBtn"

import {useRecoilValue, useRecoilState} from "recoil"
import {ContentDataState} from "../../../recoil/HeaderNavState"
import {videoState} from "../../../recoil/HomeState"

import {H1} from "../../../styles/H1"
import {P} from "../../../styles/P"

const ContentContainer = styled.div`
    margin-bottom: 30px;
    flex-basis: 250px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    max-width :350px;
    position: relative;
    cursor: pointer;
`
const ContentThumbnailImgContainer = styled.div`
    width: 100%;
    position:relative;
    pointer-events: none;
`
const ContentThumbnailImg = styled.img`
    width: 100%;
    height: auto;
    border-radius: 25px 25px 25px 25px;
`
const ContentInfoContainer = styled.div`
    width: 100%;
    margin-top :8px;
    display: flex;
    flex-direction: row;
    position: relative;
    pointer-events: none;
`
const ContentInfoTxt = styled.article`
    width: 70%;
    margin-left: 10px;
`
const ContentInfoDetailTxt = styled.div`
    width: 120px;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const MouseOverInfo = styled.div`
    width: 110px;
    height: 19px;
    background-color:#181818;
    color :white;
    font-size: 13px;
    position: absolute;
    top:83%;
    right: 5px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
`
//================================//

const Content = styled.div`
    ${(p) => p.isExpansionStyle}
`
const CONTENT = {
    Simple : css`
        margin-bottom: 30px;
        flex-basis: 250px;
        flex-grow: 1;
        cursor: pointer;
    `,
    Expansion : css`
        width : 350px;
        height: 350px;
        background-color:#212121;
        margin-top: 0px;
        position: absolute;
        border-radius: 15px;
        z-index:1;
        cursor: pointer;
    `
}

//================================//

const ContentExpansionBtnContainer = styled.div`
    width:100%;
    height:60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const HomeContent=(props)=>{
    //props
    const {index, contentExpansionBtnData}=props
    //state
    const [isMouseOver,setIsMouseOver]=React.useState(false)
    const [isContentExpansion,setIsContentExpansion]=React.useState(false)
    const contentDataValue=useRecoilValue(ContentDataState)
    const [isVideoValue, setIsVideoState]=useRecoilState(videoState)
    //event
    const contentMouseOverInfoEvent=()=>{
        isMouseOver ? setIsMouseOver(false) :  setIsMouseOver(true)
    }
    const contentExpansionEvent=()=>{
        isContentExpansion ? setIsContentExpansion(false) :  setIsContentExpansion(true)
    }
    const videoPageMoveEvent=()=>{
        isVideoValue ? setIsVideoState(false) :  setIsVideoState(true)
    }

    const contentExpansionBtnEvent=()=>{

        const target=event.target.id

        switch(target){
            case "0":
                videoPageMoveEvent()
                break
            case "1":
                break
        }
    }

    return (
        <ContentContainer>  
            <Content isExpansionStyle={CONTENT[isContentExpansion ? "Expansion" : "Simple"]} onMouseOver={contentMouseOverInfoEvent} onMouseOut={contentMouseOverInfoEvent} onClick={contentExpansionEvent}>
                <ContentThumbnailImgContainer>
                <ContentThumbnailImg src={contentDataValue[index].contentThumbnail}/>
                {
                    isMouseOver
                    ? <MouseOverInfo>클릭하여 재생하기</MouseOverInfo>
                    : <MouseOverInfo>{contentDataValue[index].contentRuntime}</MouseOverInfo>
                }
                </ContentThumbnailImgContainer>

                <ContentInfoContainer>
                    <img class="contentInformationProfileImg" src={contentDataValue[index].profileImg}/>
                    {
                        isMouseOver
                        ? <i class="fa-solid fa-ellipsis-vertical mouseOverMenuImg"></i>
                        : null
                    }
                    <ContentInfoTxt>
                        <H1 font_size="17px" >{contentDataValue[index].contentTitle}</H1>
                        <P color="#3d3d3d" font_size="15px">{contentDataValue[index].channelTitle}</P>
                        <ContentInfoDetailTxt>
                            <P color="#3d3d3d" font_size="15px">{contentDataValue[index].contentView}</P>
                            <P color="#3d3d3d" font_size="15px">{contentDataValue[index].contentUploadDate}</P>
                        </ContentInfoDetailTxt>
                    </ContentInfoTxt>
                </ContentInfoContainer>
                {
                    isContentExpansion
                    ?
                    <ContentExpansionBtnContainer onClick={contentExpansionBtnEvent}>
                        <ImgTextBtn position="HomeContentExpansion" imgPosition="HomeContentExpansion" pPosition="HomeContentExpansion" data={contentExpansionBtnData[0]}/>
                        <ImgTextBtn position="HomeContentExpansion" imgPosition="HomeContentExpansion" pPosition="HomeContentExpansion" data={contentExpansionBtnData[1]}/>
                    </ContentExpansionBtnContainer>
                    :
                    null
                }
            </Content>
        </ContentContainer>
    )
}

export default HomeContent