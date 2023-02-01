import React from "react"
import styled from "styled-components"
import {useRecoilState,useSetRecoilState} from "recoil"

//import component
// import MicPopUpMenu from "../../pageComponents/header/headerPopUpMenus/MicPopUpMenu"
// import StreamingPopUpMenu from "../../pageComponents/header/headerPopUpMenus/StreamingPopUpMenu"
// import AlarmPopUpMenu from "../../pageComponents/header/headerPopUpMenus/AlarmPopUpMenu"
// import ProfilePopUpMenu from "../../pageComponents/header/headerPopUpMenus/ProfilePopUpMenu"
import ImgBtn from "../../components/ImgBtn"

//import recoil state 
import {sideMenuOpenState, mainState} from "../../recoil/HeaderNavState"
import {popUpMenuState} from "../../recoil/HomeState"

//import style 
import {Div} from "../../styles/Div"
import {Input} from "../../styles/Input"
import {useMaxNarrow} from "../../hooks/useMedia"

//======style======//
const PopUpMenuContainerDiv = styled(Div)`
    z-index: 2;
`
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
    //staticData
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

    //recoilState
    const [sideMenuOpenValue, setSideMenuOpenState]=useRecoilState(sideMenuOpenState)
    const [popUpMenuValue, setPopUpMenuState]=useRecoilState(popUpMenuState)
    const setMainState = useSetRecoilState(mainState)
    
    //event
    const isSideMenuOpen=()=>{
        sideMenuOpenValue ? setSideMenuOpenState(false) : setSideMenuOpenState(true) 
    }
    
    const headMenuBtnEvent=()=>{

        const target=event.target.id

        switch(target){
            case "0":
                isSideMenuOpen()
                break
            case "1":
                setMainState("home")
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
        <PopUpMenuContainerDiv width="100%" height="0px" position="fixed">
                {popUpMenuValue=="mic" && <MicPopUpMenu/>}
                {popUpMenuValue=="streaming" && <StreamingPopUpMenu/>}
                {popUpMenuValue=="alarm" && <AlarmPopUpMenu/>}
                {popUpMenuValue=="profile" && <ProfilePopUpMenu/>}
        </PopUpMenuContainerDiv>
        <HeaderDiv width="100%" height="70px" background_color="#181818" position="fixed" flex_style="flexSpaceBetween" onClick={headMenuBtnEvent}>
            <HeadMenuBtnContainerDiv width="200px" margin_left="13px" flex_style="flexSpaceAround">
                <ImgBtn btn_style="headerBtn" img_style="mediumImg" data={headerIconData[0]}/>
                <ImgBtn btn_style="headerLogo" img_style="largeImg" data={headerIconData[1]}/>
            </HeadMenuBtnContainerDiv>
            
            <Div width="50%" flex_style="flexCenter">
                <Div width="80%" height="40px" border="1px solid #3d3d3d" border_radius="50px" position="relative" flex_style="flexCenter">
                    <Input width="80%" height="25px" margin_right="12%" color="white" font_size="15px" background_color="#181818" type="text" placeholder="검색"/>
                    <ImgBtn btn_style="headerSearchBtn" img_style="mediumImg" data={headerIconData[2]} />
                </Div>
                <ImgBtn btn_style="headerMicBtn" img_style="mediumImg" data={headerIconData[3]} />
            </Div>
        
            <HeadMenuBtnContainerDiv width="200px" flex_style="flexSpaceAround">
                <ImgBtn btn_style="headerBtn" img_style="mediumImg" data={headerIconData[4]} />
                <ImgBtn btn_style="headerBtn" img_style="mediumImg" data={headerIconData[5]}/>
                <ImgBtn btn_style="headerBtn" img_style="largeCircleImg" data={headerIconData[6]} />
            </HeadMenuBtnContainerDiv>
        </HeaderDiv>
        </React.Fragment>
    )
}

export default Header