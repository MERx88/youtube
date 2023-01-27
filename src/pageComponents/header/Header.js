import React from "react"
import styled from "styled-components"
import {useRecoilState} from "recoil"

//import component
import ImgBtn from "../../components/ImgBtn"
import TestBtn from "../../components/testBtn"
import HeaderPopUpMenu from "./HeaderPopUpMenu"

//import recoil state 
import {sideMenuOpenState} from "../../recoil/HeaderNavState"
import {videoState, popUpMenuState} from "../../recoil/HomeState"

//import style 
import {Div} from "../../styles/Div"
import {Input} from "../../styles/Input"
import {useMaxNarrow} from "../../hooks/useMedia"

//======style======//

const HeaderDiv = styled(Div)`
    z-index: 1;
`
const HeadMenuBtnContainerDiv = styled(Div)`
    z-index: 2;
`
//======Component======//

const Header=()=>{
    //mediaquery
    let isMaxNarrow=useMaxNarrow()
    //data
    const headerIconData=[
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

    const headerPopUpIconData=[
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
    // const videoPageMoveEvent=()=>{
    //     isVideoValue ? setIsVideoState(false) :  setIsVideoState(true)
    // }
    
    //event
    const headMenuBtnEvent=()=>{

        const target=event.target.id

        switch(target){
            case "0":
                isSideMenuOpen()
                break
            case "1":
                // videoPageMoveEvent()
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
        <HeaderPopUpMenu headerPopUpIconData={headerPopUpIconData}>
        </HeaderPopUpMenu>
        <HeaderDiv width="100%" height="70px" background_color="#181818" position="fixed" flex_style="flexSpaceBetween" onClick={headMenuBtnEvent}>
            <HeadMenuBtnContainerDiv width="200px" margin_left="13px" flex_style="flexSpaceAround">
                <TestBtn data={headerIconData[0]} width="45px" height="45px" border_radius="50%" background_color="#181818" hover_background_color="#3d3d3d" />
                <ImgBtn position="HeadLogo" imgPosition="HeadLogo" data={headerIconData[1]}/>
            </HeadMenuBtnContainerDiv>
            
            <Div width="50%" flex_style="flexCenter">
                <Div width="80%" height="40px" border="1px solid #3d3d3d" border_radius="50px" position="relative" flex_style="flexCenter">
                    <Input width="80%" height="25px" margin_right="12%" color="white" font_size="15px" background_color="#181818" type="text" placeholder="검색"/>
                    <ImgBtn position={isMaxNarrow ? "HeadSearchMenu":"HeadMenu"} imgPosition="HeadMenu"  data={headerIconData[2]}/>
                </Div>
                <ImgBtn position="HeadMicMenu" imgPosition="HeadMenu"  data={headerIconData[3]}/>
            </Div>
        
            <HeadMenuBtnContainerDiv width="200px" flex_style="flexSpaceAround">
                <TestBtn data={headerIconData[4]} width="45px" height="45px" border_radius="50%" background_color="#181818" hover_background_color="#3d3d3d"  />
                <TestBtn data={headerIconData[5]} width="45px" height="45px" border_radius="50%" background_color="#181818" hover_background_color="#3d3d3d"  />
                <ImgBtn position="ProfileMenu" imgPosition="ProfileMenu"  data={headerIconData[6]}/>
            </HeadMenuBtnContainerDiv>
        </HeaderDiv>
        </React.Fragment>
    )
}

export default Header