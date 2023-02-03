import React from "react"
import styled from "styled-components"
import {useRecoilValue, useSetRecoilState, useRecoilState} from "recoil"

//import component
import ImgTextBtn from "../../components/ImgTextBtn"
import TestBtn from "../../components/TestBtn"

//import recoil state 
import {sideMenuOpenState, mainState} from "../../recoil/HeaderNavState"
import {videoPageState} from "../../recoil/HomeState"

//import style 
import {Div} from "../../styles/Div"
import {useNarrow} from "../../hooks/useMedia"

//======style======//

const NavDetailDiv = styled(Div)`
    overflow-y: scroll;
    z-index: 2;
`
//======Component======//

const Nav=()=>{
    //mediaquery
    let isNarrow=useNarrow()
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
    const videoPageValue = useRecoilValue(videoPageState)
    //event
    const sideMenuBtnEvent=()=>{

        const target=event.target.id
    
        switch(target){
            case "0":
                setMainState("home")
                break
            case "1":
                setMainState("shorts")
                break
            case "2":
                setMainState("subscribe")
                break
            case "3":
                setMainState("storage")
                break
        }
    }

    return (
        sideMenuOpenValue
        ?   
            null
            // <NavDetailDiv width="240px" height="1500px" margin_top="83px" flex_direction="column" position="fixed" background_color="#181818" onClick={sideMenuBtnEvent}>
            // {
            //     navIconData.map((value, index)=>{
            //         return <TestBtn id={index} shape="roundSquare" color="black" size="medium" flex_direction="column" data={value}/>
            //     })
            // }  
            // </NavDetailDiv>
        :
            isNarrow
            &&
            <React.Fragment>
                {
                    videoPageValue =="video" && null
                }
                {
                    videoPageValue =="main" && 
                        <Div width="80px" margin_top="70px" flex_direction="column" position="fixed" background_color="#181818" onClick={sideMenuBtnEvent}>
                            {
                                navIconData.map((value, index)=>{
                                    return <TestBtn id={index} shape="roundSquare" color="black" size="medium" flex_direction="column" data={value}/>
                                })
                            }  
                        </Div>
                }
            </React.Fragment>
    )
}

export default Nav