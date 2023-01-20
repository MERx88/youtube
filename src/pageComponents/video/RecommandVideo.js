import React from "react"

import styled from "styled-components"

import {H1} from "../../styles/H1"
import {P} from "../../styles/P"

import {RecommandVideoDataState } from "../../recoil/VideoState"
import {useRecoilValue} from "recoil"

const RecommandVideoContainer = styled.section`
    width: 380px;
    height: 100px;
    margin-top: 8px;
    display: flex;
    flex-direction: row;
`

const RecommandVideoThumbnailImg = styled.img`
    width : 50%;
    border-radius:10px;
`

const RecommandVideoInfoSection =styled.div`
    width : 50%;
    height :100%;
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
`
const RecommandVideoInfoDetail =styled.div`
    width : auto;
    height :auto;
    margin-top :3px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const RecommandVideo=(props)=>{

    const {index}=props

    const recommandVideoDataValue=useRecoilValue(RecommandVideoDataState)

    return (
        <RecommandVideoContainer>
            <RecommandVideoThumbnailImg src={recommandVideoDataValue[index].recommandVideoThumbnail}/>
            <RecommandVideoInfoSection>
                <H1 font_size="15px" padding_top="8px">{recommandVideoDataValue[index].recommandVideoTitle}</H1>
                <P color="#3d3d3d" font_size="12px" padding_top="3px">{recommandVideoDataValue[index].channelTitle}</P>
                <RecommandVideoInfoDetail>
                    <P color="#3d3d3d" font_size="12px">
                        {recommandVideoDataValue[index].recommandVideoView}
                    </P>
                    <P color="#3d3d3d" font_size="12px">
                        {recommandVideoDataValue[index].recommandVideoUploadDate}
                    </P>
                </RecommandVideoInfoDetail>
            </RecommandVideoInfoSection>
        </RecommandVideoContainer>
    )
}

export default RecommandVideo