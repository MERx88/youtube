import React from "react"
import styled from "styled-components"

import ImgBtn from "../../components/ImgBtn"
import HeaderPopUpMenu from "./HeaderPopUpMenu"

import {useMaxNarrow} from "../../styles/useMedia"
import {useRecoilState, useSetRecoilState} from "recoil"
import {sideMenuOpenState} from "../../recoil/HeaderNavState"
import {videoState, popUpMenuState} from "../../recoil/HomeState"


const HeadMenu = styled.header`
    width: 100%;
    height:70px;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #181818;
    z-index: 1;
`
const HeadMenuBtnSection = styled.section`
    width: 200px;
    height: auto;
    padding-left: 13px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 2;
`
const SearchSection = styled.section`
    width:50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SearchContainer = styled.div`
    width: 80%;
    height: 40px;
    border: ${(props) => props.media ? `1px solid #3d3d3d` : `none`};
    border-radius: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SearchInput = styled.input`
    width:80%;
    height:25px;
    margin-right: 12%;
    color: white;
    font-size: 15px;
    border: none;
    background-color: #181818;
    ${(props) => props.media ? `null` :`display : none;`};
`
const Header=()=>{
    //mediaquery
    let isMaxNarrow=useMaxNarrow()
    //data
    const headmenuData=[
        {   "id":"0",
            "img":"/img/menu.png",
        },
        {   "id":"1",
            "img":"/img/youtubeLogo.png",
        },
        {   "id":"2",
            "img":"/img/search.png",
        },
        {   "id":"3",
            "img":"/img/mic.png",
        },
        {   "id":"4",
            "img":"/img/profileSectionBtnIcon0.png",
        },
        {   "id":"5",
            "img":"/img/profileSectionBtnIcon1.png",
        },
        {   "id":"6",
            "img":"/img/profileSectionBtnIcon2.png",
        }
    ]

    const headmenuPopUpMenuData=[
        {   "id":"0",
            "img":"/img/cross.png",
        },
        {   "id":"1",
            "img":"/img/mic.png",
        },
        {   "id":"2",
            "img":"/img/play-alt.png",
            "txt":"동영상 업로드"
        },
        {   "id":"3",
            "img":"/img/signal-stream.png",
            "txt":"실시간 스트리밍 시작"
        },
        {   "id":"4",
            "img":"/img/settings.png",
        },
        {   "id":"5",
            "img":"/img/profileSectionBtnIcon2.png"
        },
        {   "id":"6",
            "img":"/img/user.png",
            "txt":"내 채널"
        },
        {   "id":"7",
            "img":"/img/sign-out-alt.png",
            "txt":"로그아웃"
        }
    ]
    //state

    const [sideMenuOpenValue, setSideMenuOpenState]=useRecoilState(sideMenuOpenState)
    const [isVideoValue, setIsVideoState]=useRecoilState(videoState)
    const [popUpMenuValue, setPopUpMenuState]=useRecoilState(popUpMenuState)

    const isSideMenuOpen=()=>{
        sideMenuOpenValue ? setSideMenuOpenState(false) : setSideMenuOpenState(true) 
    }
    const videoPageMoveEvent=()=>{
        isVideoValue ? setIsVideoState(false) :  setIsVideoState(true)
    }
    
    //event
    const headMenuBtnEvent=()=>{

        const target=event.target.id

        switch(target){
            case "0":
                isSideMenuOpen()
                break
            case "1":
                videoPageMoveEvent()
                break
            case "2":
                break
            case "3":
                popUpMenuValue == null ? setPopUpMenuState("mic") : setPopUpMenuState(null)
                break
            case "4":
                popUpMenuValue == null ? setPopUpMenuState("streaming") : setPopUpMenuState(null)
                break
            case "5":
                popUpMenuValue == null ? setPopUpMenuState("alarm") : setPopUpMenuState(null)
                break
            case "6":
                popUpMenuValue == null ? setPopUpMenuState("profile") : setPopUpMenuState(null)
                break
        }
    }

    return (
        <React.Fragment>
        <HeaderPopUpMenu headmenuPopUpMenuData={headmenuPopUpMenuData}>
        </HeaderPopUpMenu>
        <HeadMenu onClick={headMenuBtnEvent}>
            <HeadMenuBtnSection>
                <ImgBtn position="HeadMenu" imgPosition="HeadMenu" data={headmenuData[0]}/>
                <ImgBtn position="HeadLogo" imgPosition="HeadLogo" data={headmenuData[1]}/>
            </HeadMenuBtnSection>
            
            <SearchSection>
                <SearchContainer media={isMaxNarrow}>
                    <SearchInput media={isMaxNarrow} type="text" placeholder="검색" id="searchInput"/>
                    <ImgBtn position={isMaxNarrow ? "HeadSearchMenu":"HeadMenu"} imgPosition="HeadMenu"  data={headmenuData[2]}/>
                </SearchContainer>
                <ImgBtn position="HeadMicMenu" imgPosition="HeadMenu"  data={headmenuData[3]}/>
            </SearchSection>
        
            <HeadMenuBtnSection>
                <ImgBtn position="HeadMenu" imgPosition="HeadMenu"  data={headmenuData[4]}/>
                <ImgBtn position="HeadMenu" imgPosition="HeadMenu"  data={headmenuData[5]}/>
                <ImgBtn position="ProfileMenu" imgPosition="ProfileMenu"  data={headmenuData[6]}/>
            </HeadMenuBtnSection>
        </HeadMenu>
        </React.Fragment>
    )
}

export default Header