import React from "react"
import styled from "styled-components"

import RecommandVideo from "./RecommandVideo"
import TextBtn from "../../components/TextBtn"
import {useNomal} from "../../hooks/useMedia"

import {RecommandVideoDataState } from "../../recoil/VideoState"
import {useRecoilValue} from "recoil"

const RecommandVideoListContainer = styled.aside`
    width: 380px;
    height: auto;
    display: flex;
    flex-direction: column;
`
const RecommandVideoListHeader = styled.section`
    width: 100%;
    height: 50px;
    margin-top: ${(props) => props.media ? `100px` : `10px`};
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-around;
`
const RecommandVideos = styled.section`
    width: 100%;
    height: auto;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
`

const RecommandVideoList=()=>{

    let isNomal=useNomal()

    const recommandVideoDataValue=useRecoilValue(RecommandVideoDataState)

    return (
        <RecommandVideoListContainer>
            <RecommandVideoListHeader media={isNomal}>
                <TextBtn position="RecommandVideoListSort" pPosition="RecommandVideoListSort" data="관련 콘텐츠" id="0"/>
                <TextBtn position="RecommandVideoListSort" pPosition="RecommandVideoListSort" data="실시간" id="1"/>
                <TextBtn position="RecommandVideoListSort" pPosition="RecommandVideoListSort" data="감상한 동영상" id="2"/>
                <TextBtn position="RecommandVideoListSort" pPosition="RecommandVideoListSort" data="최근에 업로드한 동영상" id="3"/>
            </RecommandVideoListHeader>
            <RecommandVideos>
            {
                recommandVideoDataValue.map((data,index)=>{
                return <RecommandVideo key={data} index={index}/>
                })
            } 
            </RecommandVideos>
        </RecommandVideoListContainer>
    )
}

export default RecommandVideoList