import React, {useEffect} from "react"
import styled from "styled-components"
import {useSetRecoilState} from "recoil"

//import component
import VideoBtnInfo from "./VideoBtnInfo"
import RecommandVideoList from "./RecommandVideoList"
import CommentList from "./CommentList"

//import style'
import {Div} from "../../styles/Div"
import {H1} from "../../styles/H1"
import {useNomal} from "../../hooks/useMedia"

//import recoil state 
import {VideoDataState, CommentDataState, RecommandVideoDataState} from "../../recoil/VideoState"

//======Component======//

const Video=()=>{
    //mediaquery
    let isNomal=useNomal()
     //dynamicData
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
    //recoilState
    const setVideoDataState=useSetRecoilState(VideoDataState)
    const setCommentDataState=useSetRecoilState(CommentDataState)
    const setRecommandVideoDataState=useSetRecoilState(RecommandVideoDataState)
    
    useEffect(() => {
        setVideoDataState(videoData)
        setCommentDataState(commentData)
        setRecommandVideoDataState(recommandVideoData)
    },[])

    return (
        <Div width="100%" flex_style="flexRightCenter" >
            <Div width="100%" height="2000px" margin_top="100px" margin_right="30px" margin_left="100px" flex_direction="column">
                <Div width="100%" flex_direction="column">
                    <video  width="100%" autoplay controls>
                        <source src={videoData[0].video} type="video/mp4"/>
                    </video>
                    <H1  margin_top="10px" font_size="large">
                        {videoData[0].videoTitle}
                    </H1>
                    <VideoBtnInfo/>
                </Div>
                {/* {isNomal ? null : <RecommandVideoList/>} */}
                <CommentList/>
            </Div>
            <RecommandVideoList/>
            {/* {isNomal ? <RecommandVideoList/> : null} */}
        </Div>
    )
}

export default Video