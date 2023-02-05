import React from "react"
import styled from "styled-components"
import {useEffect} from "react"
import {useRecoilState} from "recoil"

//import component
import HomeContent from "./HomeContent"

//import recoil state 
import {ContentDataState} from "../../../recoil/HomeState"

//import style 
import {Div} from "../../../styles/Div"

//======style======//

const ContentsDiv = styled(Div)`
    flex-wrap: wrap;
    gap: 15px; 
`
//======Component======//

const Home=()=>{
    //dynamicData
    const contentData=[
        {   "contentId":"0",
            "contentVideo":"/video/video0.mov",
            "contentThumbnail":"/img/contentImg0.png",
            "contentRuntime":"12:12",
            "profileImg":"/img/contentProfileImg0.png",
            "contentTitle":"발드컵 Grand Final l LOUD(BR) vs OpTic Gaming(NA)",
            "channelTitle":"우왁굳의 게임방송",
            "channelSubscriber":"102만명",
            "contentView":"조회수 40만회",
            "contentUploadDate":"1년전",
            "contentInfo":"어렵고 딱딱한 경제,시사,금융 이야기를 쉽고 유쾌하게 풀어내는 경제/시사/이슈/잡썰 토크방송입니다.",
            "contentRecommend":"111"
        },
        {   
            "contentId":"1",
            "contentVideo":"/video/video0.mov",
            "contentThumbnail":"/img/contentImg1.png",
            "contentRuntime":"2:32",
            "profileImg":"/img/contentProfileImg1.png",
            "contentTitle":"고백으로 혼내주기 -여자편-",
            "channelTitle":"우왁굳의 계륵",
            "channelSubscriber":"102만명",
            "contentView":"조회수 10만회",
            "contentUploadDate":"2년전",
            "contentInfo":"어렵고 딱딱한 경제,시사,금융 이야기를 쉽고 유쾌하게 풀어내는 경제/시사/이슈/잡썰 토크방송입니다.",
            "contentRecommend":"1211"
        },
        {   
            "contentId":"2",
            "contentVideo":"/video/video0.mov",
            "contentThumbnail":"/img/contentImg2.png",
            "contentRuntime":"2:62",
            "profileImg":"/img/contentProfileImg2.png",
            "contentTitle":"공부할 때 듣기 좋은 메이플스토리 명곡 BGM 22선 피아노 모음",
            "channelTitle":"pair piano",
            "channelSubscriber":"12만명",
            "contentView":"조회수 13만회",
            "contentUploadDate":"5년전",
            "contentInfo":"어렵고 딱딱한 경제,시사,금융 이야기를 쉽고 유쾌하게 풀어내는 경제/시사/이슈/잡썰 토크방송입니다.",
            "contentRecommend":"2"
        },
        {   
            "contentId":"3",
            "contentVideo":"/video/video0.mov",
            "contentThumbnail":"/img/contentImg3.png",
            "contentRuntime":"1:12",
            "profileImg":"/img/contentProfileImg3.png",
            "contentTitle":"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 | 집중할 때 듣는 가사없는 애니ost 피아노",
            "channelTitle":"우왁굳의 돚거",
            "channelSubscriber":"1천명",
            "contentView":"조회수 5만회",
            "contentUploadDate":"6년전",
            "contentInfo":"어렵고 딱딱한 경제,시사,금융 이야기를 쉽고 유쾌하게 풀어내는 경제/시사/이슈/잡썰 토크방송입니다.",
            "contentRecommend":"23"
        },
        {   
            "contentId":"4",
            "contentVideo":"/video/video0.mov",
            "contentThumbnail":"/img/contentImg4.png",
            "contentRuntime":"34:12",
            "profileImg":"/img/contentProfileImg4.png",
            "contentTitle":"애니ost 피아노",
            "channelTitle":"침착맨",
            "channelSubscriber":"4천명",
            "contentView":"조회수 5만회",
            "contentUploadDate":"6년전",
            "contentInfo":"어렵고 딱딱한 경제,시사,금융 이야기를 쉽고 유쾌하게 풀어내는 경제/시사/이슈/잡썰 토크방송입니다.",
            "contentRecommend":"256"
        },
        {   
            "contentId":"5",
            "contentVideo":"/video/video0.mov",
            "contentThumbnail":"/img/contentImg5.png",
            "contentRuntime":"34:2",
            "profileImg":"/img/contentProfileImg5.png",
            "contentTitle":"침하하 구경하기",
            "channelTitle":"주호민",
            "channelSubscriber":"7천명",
            "contentView":"조회수 10만회",
            "contentUploadDate":"2년전",
            "contentInfo":"어렵고 딱딱한 경제,시사,금융 이야기를 쉽고 유쾌하게 풀어내는 경제/시사/이슈/잡썰 토크방송입니다.",
            "contentRecommend":"26"
        },
        {   
            "contentId":"6",
            "contentVideo":"/video/video0.mov",
            "contentThumbnail":"/img/contentImg6.png",
            "contentRuntime":"35:2",
            "profileImg":"/img/contentProfileImg6.png",
            "contentTitle":"고멤의 대답이 포커패가 된다 - 이심전심포커 풀버전",
            "channelTitle":"침착맨",
            "channelSubscriber":"7천명",
            "contentView":"조회수 10만회",
            "contentUploadDate":"1년전",
            "contentInfo":"어렵고 딱딱한 경제,시사,금융 이야기를 쉽고 유쾌하게 풀어내는 경제/시사/이슈/잡썰 토크방송입니다.",
            "contentRecommend":"2"
        },
        {   
            "contentId":"7",
            "contentVideo":"/video/video0.mov",
            "contentThumbnail":"/img/contentImg7.png",
            "contentRuntime":"3:2",
            "profileImg":"/img/contentProfileImg7.png",
            "contentTitle":"앞굽뒤찌 - 마인크래프트 SOS 합방",
            "channelTitle":"징버거",
            "channelSubscriber":"8천명",
            "contentView":"조회수 12만회",
            "contentUploadDate":"1년전",
            "contentInfo":"어렵고 딱딱한 경제,시사,금융 이야기를 쉽고 유쾌하게 풀어내는 경제/시사/이슈/잡썰 토크방송입니다.",
            "contentRecommend":"2"
        },
        {   "contentId":"8",
            "contentVideo":"/video/video0.mov",
            "contentThumbnail":"/img/contentImg8.png",
            "contentRuntime":"3:2",
            "profileImg":"/img/contentProfileImg1.png",
            "contentTitle":"[무한 레전드] 무한도전 추격전 레전드 하이라이트",
            "channelTitle":"우왁굳",
            "channelSubscriber":"8천명",
            "contentView":"조회수 420만회",
            "contentUploadDate":"1년전",
            "contentInfo":"어렵고 딱딱한 경제,시사,금융 이야기를 쉽고 유쾌하게 풀어내는 경제/시사/이슈/잡썰 토크방송입니다.",
            "contentRecommend":"2"
        },
        {   
            "contentId":"9",
            "contentVideo":"/video/video0.mov",
            "contentThumbnail":"/img/contentImg9.png",
            "contentRuntime":"3:2",
            "profileImg":"/img/contentProfileImg2.png",
            "contentTitle":"1호선 열차 한강대교에 2시간 멈춰 서...500여 명 고립됐다 구조 / YTN",
            "channelTitle":"게임방송",
            "channelSubscriber":"8천명",
            "contentView":"조회수 420만회",
            "contentUploadDate":"1년전",
            "contentInfo":"어렵고 딱딱한 경제,시사,금융 이야기를 쉽고 유쾌하게 풀어내는 경제/시사/이슈/잡썰 토크방송입니다.",
            "contentRecommend":"2"
        }
    ]

    //dataState
    const [contentDataValue,setContentDataState]=useRecoilState(ContentDataState)
    
    useEffect(() => {
        setContentDataState(contentData)
    },[])
    
    return (
        <ContentsDiv>
            {
                contentDataValue.map((data, index)=>{
                return <HomeContent key={data} index={index}/>
                })
            } 
        </ContentsDiv>
    )
}

export default Home