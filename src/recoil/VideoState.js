import {atom} from "recoil" 

//백엔드 비디오 데이터 저장
//videoData
//Video.js/VideoBtnInfo.js/CommentWrite.js
export const VideoDataState = atom({
    "key":"VideoDataState",
    "default": []
})

//백엔드 댓글 데이터 저장
//commentData
//Video.js/CommentList.js/Comment.js/
export const CommentDataState = atom({
    "key":"CommentDataState",
    "default": []
})

//백엔드 추천 동영상 데이터 저장
//recommandVideoData
//Video.js/RecommandVideo.js/RecommandVideoList.js/
export const RecommandVideoDataState = atom({
    "key":"RecommandVideoDataState",
    "default": []
})