import React from "react"
import styled from "styled-components"
import {useRecoilValue} from "recoil"

//import component
import Home from "./main/home/Home"
import Shorts from "./main/Shorts"
import Subscribe from "./main/Subscribe"
import Storage from "./main/Storage"
import Video from "./video/Video"

//import recoil state 
import {mainState} from "../recoil/HeaderNavState"
import {videoPageState} from "../recoil/HomeState"

//import style 
import {useNarrow} from "../hooks/useMedia"

//======style======//

const ContainerMain= styled.main`
    max-width: 100%;
    padding-top: 140px;
    padding-right: 40px;
    padding-left : ${(props) => props.media ? `130px` :`40px`};
`
//======Component======//

const Main=()=>{
    //mediaquery
    let isNarrow=useNarrow()
    //state
    const mainStateValue = useRecoilValue(mainState)
    const videoPageValue = useRecoilValue(videoPageState)

    return (
        <React.Fragment>
        {
            videoPageValue=="video" && 
            <Video/> 
        }
        {
            videoPageValue=="main" && 
            <ContainerMain media={isNarrow}>
                {mainStateValue=="home" && <Home/>}
                {mainStateValue=="shorts" && <Shorts/>}
                {mainStateValue=="subscribe" && <Subscribe/>}
                {mainStateValue=="storage" && <Storage/>}    
            </ContainerMain>
        }
        </React.Fragment>
    )
}

export default Main