import React from "react"
import styled from "styled-components"

import ImgBtn from "../../components/ImgBtn"
import HeaderPopUpMenu from "./HeaderPopUpMenu"

import {useMaxNarrow} from "../../hooks/useMedia"
import {useRecoilState} from "recoil"
import {sideMenuOpenState} from "../../recoil/HeaderNavState"
import {videoState, popUpMenuState} from "../../recoil/HomeState"
import {Div,CusorDiv} from "../../styles/Div"
import {Input} from "../../styles/Input"


const HeaderDiv = styled(Div)`
    z-index: 1;
`

const HeadMenuBtnDiv = styled(Div)`
    z-index: 2;
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
        <HeaderDiv width="100%" height="70px" background_color="#181818" position="fixed" flex_style="flexSpaceBetween">
            <HeadMenuBtnDiv width="200px" margin_left="13px" flex_style="flexSpaceAround">
                <ImgBtn position="HeadMenu" imgPosition="HeadMenu" data={headmenuData[0]}/>
                <ImgBtn position="HeadLogo" imgPosition="HeadLogo" data={headmenuData[1]}/>
            </HeadMenuBtnDiv>
            
            <Div width="50%" flex_style="flexCenter">
                <Div width="80%" height="40px" border="1px solid #3d3d3d" border_radius="50px" position="relative" flex_style="flexCenter">
                    <Input width="80%" height="25px" margin_right="12%" color="white" font_size="15px" background_color="#181818" type="text" placeholder="검색"/>
                    <ImgBtn position={isMaxNarrow ? "HeadSearchMenu":"HeadMenu"} imgPosition="HeadMenu"  data={headmenuData[2]}/>
                </Div>
                <ImgBtn position="HeadMicMenu" imgPosition="HeadMenu"  data={headmenuData[3]}/>
            </Div>
        
            <HeadMenuBtnDiv width="200px" flex_style="flexSpaceAround">
                <ImgBtn position="HeadMenu" imgPosition="HeadMenu"  data={headmenuData[4]}/>
                <ImgBtn position="HeadMenu" imgPosition="HeadMenu"  data={headmenuData[5]}/>
                <ImgBtn position="ProfileMenu" imgPosition="ProfileMenu"  data={headmenuData[6]}/>
            </HeadMenuBtnDiv>
        </HeaderDiv>
        </React.Fragment>
    )
}

export default Header