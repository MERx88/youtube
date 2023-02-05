import React from "react"
import styled from "styled-components"
import {useRecoilValue, useSetRecoilState,useRecoilState} from "recoil"

//import component
import ImgTextBtn from "../../components/ImgTextBtn"

//import recoil state 
import {sideMenuOpenState, mainState} from "../../recoil/HeaderNavState"
import {videoPageState} from "../../recoil/HomeState"

//import style 
import {Div} from "../../styles/Div"
import {Tablet,Pc} from "../../styles/MediaQuery"

//======style======//

const NavDetailDiv = styled(Div)`
    overflow-y: scroll;
    z-index: 2;
`
//======Component======//

const Nav=()=>{
    //staticData
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
    //recoilState
    const sideMenuOpenValue = useRecoilValue(sideMenuOpenState)
    const setMainState = useSetRecoilState(mainState)
    const [videoPageValue, setVideoPageState]=useRecoilState(videoPageState)

    //event
    const sideMenuBtnEvent=()=>{

        const target=event.target.id
    
        switch(target){
            case "0":
                setVideoPageState("main") 
                setMainState("home")
                break
            case "1":
                setVideoPageState("main") 
                setMainState("shorts")
                break
            case "2":
                setVideoPageState("main") 
                setMainState("subscribe")
                break
            case "3":
                setVideoPageState("main")
                setMainState("storage")
                break
        }
    }

    return (
        sideMenuOpenValue
        ?   
            <NavDetailDiv width="240px" height="1500px" margin_top="70px" flex_direction="column" position="fixed" background_color="#181818" onClick={sideMenuBtnEvent}>
            {
                navIconData.map((value, index)=>{
                    return <ImgTextBtn id={index} shape="round" color="black" size="small" flex_direction="row" flex_style="flexLeftCenter" data={value}/>
                })
            }  
            </NavDetailDiv>
        :
        <React.Fragment>
            {/* ======Pc====== */}
            <Pc>
                {
                    videoPageValue =="video" && null
                }
                {
                    videoPageValue =="main" && 
                        <Div width="80px" margin_top="70px" flex_direction="column" position="fixed" background_color="#181818" onClick={sideMenuBtnEvent}>
                            {
                                navIconData.map((value, index)=>{
                                    return <ImgTextBtn id={index} shape="round" color="black" size="medium" flex_direction="column" flex_style="flexCenter" data={value}/>
                                })
                            }  
                        </Div>
                }
            </Pc>
            {/* ======Tablet====== */}
            <Tablet>
                {null}
            </Tablet>
        </React.Fragment>
    )
}

export default Nav