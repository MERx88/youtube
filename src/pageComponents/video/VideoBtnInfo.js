import React from "react"
import styled from "styled-components"

import ImgBtn from "../../components/ImgBtn"
import ImgTextBtn from "../../components/ImgTextBtn"
import {P} from "../../styles/P"
import {CircleImg} from "../../styles/Img"

import {useMaxWide, useWide, useNomal, useNarrow, useMaxNarrow} from "../../hooks/useMedia"

import {VideoDataState, VideoBtnDataState } from "../../recoil/VideoState"
import {useRecoilValue} from "recoil"

const ProfileSection = styled.section`
    height: 50px;
    display: flex;
    margin-top :10px;
    flex-direction: row;
    justify-content:space-between;
    
`
const ProfileLeft = styled.div`
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
const ProfileInfoContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 5px;
`
const ProfileRight = styled.div`
    width: ${(props) => props.media ? `55%` : `43%`};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const VideoInfoSection = styled.section`
    height: 100px;
    margin-top: 10px;
    padding: 20px;
    font-size: 15px;
    color: white;
    display: flex;
    flex-direction: column;
    background-color: #3d3d3d;
    border-radius: 15px;
`
const VideoInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom : 5px;
`


const VideoBtnInfo=()=>{

    let isMaxWide=useMaxWide()
    let isWide=useWide()
    let isNomal=useNomal()
    let isNarrow=useNarrow()
    let isMaxNarrow=useMaxNarrow()

    const videoDataValue=useRecoilValue(VideoDataState)
    const videoBtnDataValue=useRecoilValue(VideoBtnDataState)

    const [isLike,setIsLike]=React.useState(false)

    const likeEvent=()=>{
        isLike ? setIsLike(false) :  setIsLike(true)
    }

    const profileMenuBtnEvent=()=>{

        const target=event.target.id

        switch(target){
            case "0":
                
                break
            case "1":
                likeEvent()
                break
            case "2":
                break
            case "3":
                break
            case "4":
                break
            case "5":
                break
            case "6":
                break
            case "7":
                break
            case "9":
                likeEvent()
                break
        }
    }

    return (
        <React.Fragment>
            <ProfileSection onClick={profileMenuBtnEvent}>
                <ProfileLeft>
                    <CircleImg height="45px" src={videoDataValue[0]?.profileImg}/>
                    <ProfileInfoContainer>
                        <P font_size="18px">
                            {videoDataValue[0]?.videoProfileName}
                        </P>
                        <P color="#3d3d3d" font_size="12px">
                            구독자 {videoDataValue[0]?.videoProfileSubscriber}
                        </P>
                    </ProfileInfoContainer>
                    <ImgTextBtn position="VideoMenu" imgPosition="VideoMenu" pPosition="VideoMenu" data={videoBtnDataValue[0]}/>
                </ProfileLeft>
                <ProfileRight media={isNomal}>
                    <ImgBtn position="VideoMenu" imgPosition="VideoMenu" data={isLike ? videoBtnDataValue[9] : videoBtnDataValue[1]}/>
                    <ImgBtn position="VideoMenu" imgPosition="VideoMenu" data={videoBtnDataValue[2]}/>
                    <ImgTextBtn position="VideoMenu" imgPosition="VideoMenu" pPosition="VideoMenu" data={videoBtnDataValue[3]}/>
                    {isNomal ?<ImgTextBtn position="VideoMenu" imgPosition="VideoMenu" pPosition="VideoMenu" data={videoBtnDataValue[4]}/>: null}
                    {isMaxWide ? <ImgTextBtn position="VideoMenu" imgPosition="VideoMenu" pPosition="VideoMenu" data={videoBtnDataValue[5]}/> : null}
                    {isWide ?<ImgTextBtn position="VideoMenu" imgPosition="VideoMenu" pPosition="VideoMenu" data={videoBtnDataValue[6]}/> : null}
                    <ImgBtn position="VideoMenu" imgPosition="VideoMenu" data={videoBtnDataValue[7]}/>
                </ProfileRight>
            </ProfileSection>
            <VideoInfoSection>
                <VideoInfoContainer>
                    <P font_size="15px">
                        {videoDataValue[0]?.videoView}
                    </P>
                    <P font_size="15px">
                        {videoDataValue[0]?.videotUploadDate}
                    </P>
                </VideoInfoContainer>
                <P font_size="15px">
                    {videoDataValue[0]?.videoInfo}
                </P>
            </VideoInfoSection>
        </React.Fragment>
    )
}

export default VideoBtnInfo