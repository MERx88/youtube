import React, {useEffect} from "react"
import styled from "styled-components"

import VideoBtnInfo from "./VideoBtnInfo"
import RecommandVideoList from "./RecommandVideoList"
import CommentList from "./CommentList"

import ImgBtn from "../../components/ImgBtn"
import ImgTextBtn from "../../components/ImgTextBtn"
import {H1} from "../../styles/H1"
import {P} from "../../styles/P"
import {CircleImg} from "../../styles/Img"
import {useNomal} from "../../styles/useMedia"

import {VideoDataState, CommentDataState, RecommandVideoDataState, VideoBtnDataState } from "../../recoil/VideoState"
import {useSetRecoilState} from "recoil"

const VideoMain = styled.main`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
`
const VideoCommentContainer = styled.div`
    width: 100%;
    height: 2000px;
    padding-left: 30px;
    padding-top: 100px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
`
const VideoContainer = styled.div`
    width: 100%;
`

const Video=()=>{

    let isNomal=useNomal()

    const videoData=[
        {   "id":"0",
            "video":"/video/video0.mov",
            "videoTitle":"아이템 자랑하기 - 고멤마을 프리터 시점",
            "profileImg":"/img/contentProfileImg0.png",
            "videoProfileName":"프리터",
            "videoProfileSubscriber":"102만명",
            "videoView":"조회수 40만회",
            "videotUploadDate":"2시간전",
            "videoInfo":"어렵고 딱딱한 경제,시사,금융 이야기를 쉽고 유쾌하게 풀어내는 경제/시사/이슈/잡썰 토크방송입니다.",
            "videoRecommend":"111"
        }
    ]
    const commentData=[
        {   "id":"0",
            "ProfilImg":"/img/contentProfileImg1.png",
            "commentProfileName":"성이름",
            "commentUploadDate":"54분전",
            "commentTxt":"바닥 뚫고 들어가는것도 그렇고 우는것도 그렇고 너무 귀여운거 아닙니까",
            "commentRecommend":"111",
        },
        {   "id":"1",
            "ProfilImg":"/img/contentProfileImg2.png",
            "commentProfileName":"누렁이",
            "commentUploadDate":"1분전",
            "commentTxt":"안녕하세요 고정 한번만 부탁드려요",
            "commentRecommend":"2",
        },
        {   "id":"2",
            "ProfilImg":"/img/contentProfileImg3.png",
            "commentProfileName":"JK",
            "commentUploadDate":"5분전",
            "commentTxt":"ㅋㅋㅋㅋㅋㅋㅋㅋ",
            "commentRecommend":"11",
        }
    ]
    const recommandVideoData=[
        {   "recommandVideoId":"0",
            "recommandVideoThumbnail":"/img/contentImg0.png",
            "recommandVideoRuntime":"12:2",
            "recommandVideoTitle":"OpTic Gaming(NA)",
            "channelTitle":"우왁굳의 게임방송",
            "recommandVideoView":"조회수 40만회",
            "recommandVideoUploadDate":"1년전"
        },
        {   "recommandVideoId":"1",
            "recommandVideoThumbnail":"/img/contentImg1.png",
            "recommandVideoRuntime":"12:12",
            "recommandVideoTitle":"게임방송",
            "channelTitle":"우왁굳의 돚거",
            "recommandVideoView":"조회수 433만회",
            "recommandVideoUploadDate":"1년전"
        },
        {   "recommandVideoId":"2",
            "recommandVideoThumbnail":"/img/contentImg2.png",
            "recommandVideoRuntime":"2:12",
            "recommandVideoTitle":"메롱",
            "channelTitle":"우왁굳의 계륵",
            "recommandVideoView":"조회수 12만회",
            "recommandVideoUploadDate":"3년전"
        },
        {   "recommandVideoId":"3",
            "recommandVideoThumbnail":"/img/contentImg3.png",
            "recommandVideoRuntime":"10:20",
            "recommandVideoTitle":"스이나 우매",
            "channelTitle":"우왁굳의 사생활",
            "recommandVideoView":"조회수 45만회",
            "recommandVideoUploadDate":"71년전"
        },
        {   "recommandVideoId":"4",
            "recommandVideoThumbnail":"/img/contentImg4.png",
            "recommandVideoRuntime":"12:1",
            "recommandVideoTitle":"발드컵 Grand Final",
            "channelTitle":"우왁굳",
            "recommandVideoView":"조회수 4만회",
            "recommandVideoUploadDate":"2년전"
        }
    ]

    const videoBtnData=[
        {   "id":"0",
            "img":"/img/bell.png",
            "txt":"구독중"
        },
        {   "id":"1",
            "img":"/img/likeOutline.png"
        },
        {   "id":"2",
            "img":"/img/dislike.png"
        },
        {   "id":"3",
            "img":"/img/share.png",
            "txt":"공유"
        },
        {   "id":"4",
            "img":"/img/download.png",
            "txt":"오프라인 저장"
        },
        {   "id":"5",
            "img":"/img/donation.png",
            "txt":"Thanks"
        },
        {   "id":"6",
            "img":"/img/clip.png",
            "txt":"클립"
        },
        {   "id":"7",
            "img":"/img/menu.png",
        },
        {   "id":"8",
            "img":"/img/menu.png",
            "txt":"정렬기준",
        },
        {   "id":"9",
            "img":"/img/likeFill.png"
        },
    ]

    const setVideoDataState=useSetRecoilState(VideoDataState)
    const setCommentDataState=useSetRecoilState(CommentDataState)
    const setRecommandVideoDataState=useSetRecoilState(RecommandVideoDataState)
    const setVideoBtnDataState=useSetRecoilState(VideoBtnDataState)
    
    useEffect(() => {
        setVideoDataState(videoData)
        setCommentDataState(commentData)
        setRecommandVideoDataState(recommandVideoData)
        setVideoBtnDataState(videoBtnData)
    },[])

    return (
        <VideoMain>
            <VideoCommentContainer>
                <VideoContainer>
                    <video  width="100%" autoplay controls>
                        <source src={videoData[0].video} type="video/mp4"/>
                    </video>
                    <H1 font_size="23px" padding_top="10px">
                        {videoData[0].videoTitle}
                    </H1>
                    <VideoBtnInfo/>
                </VideoContainer>
                {isNomal ? null : <RecommandVideoList recommandVideoData={recommandVideoData}/>}
                <CommentList/>
            </VideoCommentContainer>
            {isNomal ? <RecommandVideoList recommandVideoData={recommandVideoData}/> : null}
           
        </VideoMain>
    )
}

export default Video