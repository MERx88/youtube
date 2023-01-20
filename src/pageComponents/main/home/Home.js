import React from "react"
import styled from "styled-components"

import {useEffect} from "react"

import HomeContent from "./HomeContent"

import {ContentDataState} from "../../../recoil/HeaderNavState"

import {useRecoilState} from "recoil"

const Contents = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 15px; 
`

const Home=()=>{
    //data
    const contentData=[
        {   "content_id":"0",
            "contentThumbnail":"/img/contentImg0.png",
            "contentRuntime":"12:12",
            "profileImg":"/img/contentProfileImg0.png",
            "contentTitle":"발드컵 Grand Final l LOUD(BR) vs OpTic Gaming(NA)",
            "channelTitle":"우왁굳의 게임방송",
            "contentView":"조회수 40만회",
            "contentUploadDate":"1년전"
        },
        {   "content_id":"1",
            "contentThumbnail":"/img/contentImg1.png",
            "contentRuntime":"2:32",
            "profileImg":"/img/contentProfileImg1.png",
            "contentTitle":"고백으로 혼내주기 -여자편-",
            "channelTitle":"우왁굳의 계륵",
            "contentView":"조회수 10만회",
            "contentUploadDate":"2년전"
        },
        {   "content_id":"2",
            "contentThumbnail":"/img/contentImg2.png",
            "contentRuntime":"4:12",
            "profileImg":"/img/contentProfileImg2.png",
            "contentTitle":"공부할 때 듣기 좋은 메이플스토리 명곡 BGM 22선 피아노 모음",
            "channelTitle":"pair piano",
            "contentView":"조회수 1천회",
            "contentUploadDate":"3년전"
        },
        {   "content_id":"3",
            "contentThumbnail":"/img/contentImg3.png",
            "contentRuntime":"1:12",
            "profileImg":"/img/contentProfileImg3.png",
            "contentTitle":"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 | 집중할 때 듣는 가사없는 애니ost 피아노",
            "channelTitle":"우왁굳의 돚거",
            "contentView":"조회수 5만회",
            "contentUploadDate":"1년전"
        },
        {   "content_id":"4",
            "contentThumbnail":"/img/contentImg4.png",
            "contentRuntime":"1:12:12",
            "profileImg":"/img/contentProfileImg4.png",
            "contentTitle":"석가모니 인생 조언 - 현명한 사람은 알지만 어리석은 사람은 모르는 것",
            "channelTitle":"책게바라",
            "contentView":"조회수 43회",
            "contentUploadDate":"3년전"
        },
        {   "content_id":"5",
            "contentThumbnail":"/img/contentImg5.png",
            "contentRuntime":"23:12",
            "profileImg":"/img/contentProfileImg5.png",
            "contentTitle":"침하하 구경하기",
            "channelTitle":"주호민",
            "contentView":"조회수 10만회",
            "contentUploadDate":"2일전"
        },
        {   "content_id":"6",
            "contentThumbnail":"/img/contentImg6.png",
            "contentRuntime":"15:12",
            "profileImg":"/img/contentProfileImg6.png",
            "contentTitle":"고멤의 대답이 포커패가 된다 - 이심전심포커 풀버전",
            "channelTitle":"침착맨",
            "contentView":"조회수 40만회",
            "contentUploadDate":"1년전"
        },
        {   "content_id":"7",
            "contentThumbnail":"/img/contentImg7.png",
            "contentRuntime":"33:12",
            "profileImg":"/img/contentProfileImg7.png",
            "contentTitle":"앞굽뒤찌 - 마인크래프트 SOS 합방",
            "channelTitle":"징버거",
            "contentView":"조회수 20만회",
            "contentUploadDate":"1년전"
        },
        {   "content_id":"8",
            "contentThumbnail":"/img/contentImg8.png",
            "contentRuntime":"16:12",
            "profileImg":"/img/contentProfileImg1.png",
            "contentTitle":"[무한 레전드] 무한도전 추격전 레전드 하이라이트",
            "channelTitle":"우왁굳",
            "contentView":"조회수 420만회",
            "contentUploadDate":"1년전"
        },
        {   "content_id":"9",
            "contentThumbnail":"/img/contentImg9.png",
            "contentRuntime":"6:12",
            "profileImg":"/img/contentProfileImg2.png",
            "contentTitle":"1호선 열차 한강대교에 2시간 멈춰 서...500여 명 고립됐다 구조 / YTN",
            "channelTitle":"게임방송",
            "contentView":"조회수 1230만회",
            "contentUploadDate":"3년전"
        }
    ]
    const contentExpansionBtnData=[
        {   "id":"0",
            "img":"/img/playlist.png",
            "txt":"나중에 볼 동영상"
        },
        {   "id":"1",
            "img":"/img/playlist.png",
            "txt":"현재 재생목록에 추가"
        }
    ]
    //dataState
    const [contentDataValue,setContentDataState]=useRecoilState(ContentDataState)
    
    useEffect(() => {
        setContentDataState(contentData)
    },[])
    
    return (
        <Contents>
            {
                contentDataValue.map((data, index)=>{
                return <HomeContent key={data} index={index} contentExpansionBtnData={contentExpansionBtnData}/>
                })
            } 
        </Contents>
    )
}

export default Home