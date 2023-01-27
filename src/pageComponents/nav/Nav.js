import React from "react"
import styled from "styled-components"
import {useRecoilValue, useSetRecoilState, useRecoilState} from "recoil"

//import component
import ImgTextBtn from "../../components/ImgTextBtn"

//import recoil state 
import {videoState} from "../../recoil/HomeState"
import {BtnDataState, sideMenuOpenState, mainState} from "../../recoil/HeaderNavState"

//import style 
import {Div} from "../../styles/Div"
import {useNarrow} from "../../hooks/useMedia"

//======style======//

const navDetailDiv = styled(Div)`
    overflow-y: scroll;
    z-index: 2;
`
//======Component======//

const Nav=()=>{
    //mediaquery
    let isNarrow=useNarrow()
    //data
    const navIconData=[
        {   "id":"0",
            "img":"/img/sideMenuIcon0.png",
            "txt":"홈",
        },
        {   "id":"1",
            "img":"/img/sideMenuIcon1.png",
            "txt":"shorts",
        },
        {   "id":"2",
            "img":"/img/sideMenuIcon2.png",
            "txt":"구독",
        },
        {   "id":"3",
            "img":"/img/sideMenuIcon3.png",
            "txt":"보관함",
        }
    ]
    //state
    const sideMenuOpenValue = useRecoilValue(sideMenuOpenState)
    const setMainState = useSetRecoilState(mainState)
    const [isVideoValue, setIsVideoState]=useRecoilState(videoState)
    //event
    const videoPageMoveEvent=()=>{
        isVideoValue ? setIsVideoState(false) :  setIsVideoState(true)
    }

    const sideMenuBtnEvent=()=>{

        const target=event.target.id

        const sideMenuBtn=(mainState)=>{
            setMainState(mainState)
        }
    
        switch(target){
            case "0":
                sideMenuBtn("home")
                videoPageMoveEvent()
                break
            case "1":
                sideMenuBtn("shorts")
                break
            case "2":
                sideMenuBtn("subscribe")
                break
            case "3":
                sideMenuBtn("storage")
                break
        }
    }

    return (
        sideMenuOpenValue
        ?
            <navDetailDiv width="240px" height="1500px" margin_top="83px" flex_direction="column" position="fixed" background_color="#181818" onClick={sideMenuBtnEvent}>
            {
                navIconData.map((value)=>{
                    return <ImgTextBtn position="SideMenuDetail" imgPosition="SideMenuDetail" pPosition="SideMenuDetail" data={value}/>
                })
            }  
            </navDetailDiv>
        :
            isNarrow
            &&
                (
                isVideoValue
                ?
                null
                :
                <Div width="80px" margin_top="70px" flex_direction="column" position="fixed" background_color="#181818" onClick={sideMenuBtnEvent}>
                    {
                        navIconData.map((value)=>{
                            return <ImgTextBtn position="SideMenuSimple" imgPosition="SideMenuSimple" pPosition="SideMenuSimple" data={value}/>
                            
                        })
                    }  
                </Div>
                )
    )
}

export default Nav