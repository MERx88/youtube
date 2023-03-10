import React, {useEffect} from "react"
import styled from "styled-components"
import {useSetRecoilState, useRecoilValue} from "recoil"

//import component
import VideoBtnBox from "./VideoBtnBox"
import VideoInfoBox from "./VideoInfoBox"
import RecommandVideoList from "./RecommandVideoList"
import CommentList from "./CommentList"

//import style'
import {Div} from "../../styles/Div"
import {H1} from "../../styles/H1"
import {Tablet,Pc} from "../../styles/MediaQuery"

//import recoil state 
import {CommentDataState, RecommandVideoDataState} from "../../recoil/VideoState"
import {ContentDataState, videoDataIndexState} from "../../recoil/HomeState"

//======Component======//

const Video=()=>{
     //dynamicData
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
        },
        {   "recommandVideoId":"5",
            "recommandVideoThumbnail":"/img/contentImg2.png",
            "recommandVideoRuntime":"2:12",
            "recommandVideoTitle":"메롱",
            "channelTitle":"우왁굳의 계륵",
            "recommandVideoView":"조회수 12만회",
            "recommandVideoUploadDate":"3년전"
        },
        {   "recommandVideoId":"6",
            "recommandVideoThumbnail":"/img/contentImg3.png",
            "recommandVideoRuntime":"10:20",
            "recommandVideoTitle":"스이나 우매",
            "channelTitle":"우왁굳의 사생활",
            "recommandVideoView":"조회수 45만회",
            "recommandVideoUploadDate":"71년전"
        },
        {   "recommandVideoId":"7",
            "recommandVideoThumbnail":"/img/contentImg4.png",
            "recommandVideoRuntime":"12:1",
            "recommandVideoTitle":"발드컵 Grand Final",
            "channelTitle":"우왁굳",
            "recommandVideoView":"조회수 4만회",
            "recommandVideoUploadDate":"2년전"
        },
        {   "recommandVideoId":"8",
            "recommandVideoThumbnail":"/img/contentImg2.png",
            "recommandVideoRuntime":"2:12",
            "recommandVideoTitle":"메롱",
            "channelTitle":"우왁굳의 계륵",
            "recommandVideoView":"조회수 12만회",
            "recommandVideoUploadDate":"3년전"
        },
        {   "recommandVideoId":"9",
            "recommandVideoThumbnail":"/img/contentImg3.png",
            "recommandVideoRuntime":"10:20",
            "recommandVideoTitle":"스이나 우매",
            "channelTitle":"우왁굳의 사생활",
            "recommandVideoView":"조회수 45만회",
            "recommandVideoUploadDate":"71년전"
        },
        {   "recommandVideoId":"10",
            "recommandVideoThumbnail":"/img/contentImg4.png",
            "recommandVideoRuntime":"12:1",
            "recommandVideoTitle":"발드컵 Grand Final",
            "channelTitle":"우왁굳",
            "recommandVideoView":"조회수 4만회",
            "recommandVideoUploadDate":"2년전"
        }
    ]
    //recoilState
    const setCommentDataState=useSetRecoilState(CommentDataState)
    const setRecommandVideoDataState=useSetRecoilState(RecommandVideoDataState)
    const contentDataValue=useRecoilValue(ContentDataState)
    const videoDataIndexValue=useRecoilValue(videoDataIndexState)
    
    useEffect(() => {
        setCommentDataState(commentData)
        setRecommandVideoDataState(recommandVideoData)
    },[])

    return (
        <React.Fragment>
        {/* ======Pc====== */}
        <Pc>
            <Div width="100%" margin_left="20px" flex_style="flexTopCenter">
                <Div width="70%" margin_top="100px" margin_right="20px" flex_direction="column">
                    <Div width="100%" flex_direction="column">
                        <video  width="100%" autoplay controls poster={contentDataValue[videoDataIndexValue].contentThumbnail}>
                            <source src={contentDataValue[videoDataIndexValue].contentVideo} type="video/mp4"/>
                        </video>
                        <H1 font_size="large" margin_top="10px">
                            {contentDataValue[videoDataIndexValue].contentTitle}
                        </H1>
                        <VideoBtnBox/>
                        <VideoInfoBox/>
                    </Div>
                    <CommentList/>
                </Div>
                <RecommandVideoList/>
            </Div>
        </Pc>
        {/* ======Tablet====== */}
        <Tablet>
             <Div width="100%" margin_left="20px" flex_style="flexTopCenter">
                <Div width="100%" margin_top="100px" margin_right="20px" flex_direction="column">
                    <Div width="100%" flex_direction="column">
                        <video  width="100%" autoplay controls poster={contentDataValue[videoDataIndexValue].contentThumbnail}>
                            <source src={contentDataValue[videoDataIndexValue].contentVideo} type="video/mp4"/>
                        </video>
                        <H1 font_size="large" margin_top="10px">
                            {contentDataValue[videoDataIndexValue].contentTitle}
                        </H1>
                        <VideoBtnBox/>
                        <VideoInfoBox/>
                    </Div>
                    <RecommandVideoList/>
                    <CommentList/>
                </Div>
            </Div>
        </Tablet>
        </React.Fragment>
    )
}

export default Video