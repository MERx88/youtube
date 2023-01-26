import React from "react"
import styled from "styled-components"

import Home from "./main/home/Home"
import Shorts from "./main/Shorts"
import Subscribe from "./main/Subscribe"
import Storage from "./main/Storage"
import Video from "./video/Video"

import {useNarrow} from "../hooks/useMedia"

import {useRecoilValue} from "recoil"
import {mainState} from "../recoil/HeaderNavState"
import {videoState} from "../recoil/HomeState"

const  MainContainer= styled.main`
    max-width: 100%;
    padding-top: 140px;
    padding-right: 40px;
    padding-left : ${(props) => props.media ? `130px` :`40px`};
`

const Main=()=>{
    //mediaquery
    let isNarrow=useNarrow()
    //state
    const mainStateValue = useRecoilValue(mainState)
    const isVideoValue = useRecoilValue(videoState)

    return (
        isVideoValue
        ?
        <Video/> 
        : 
        <MainContainer media={isNarrow}>
            {mainStateValue=="home" && <Home/>}
            {mainStateValue=="shorts" && <Shorts/>}
            {mainStateValue=="subscribe" && <Subscribe/>}
            {mainStateValue=="storage" && <Storage/>}    
        </MainContainer>
    )
}

export default Main