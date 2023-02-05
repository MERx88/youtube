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
import {Tablet,Pc} from "../styles/MediaQuery"

//======style======//

const ContainerMain= styled.main`
    max-width: 100%;
    padding-top: 140px;
    padding-right: 40px;
    padding-left : 40px;
`
const PaddingMain= styled.main`
    max-width: 100%;
    padding-top: 140px;
    padding-right: 40px;
    padding-left : 130px;
`
//======Component======//

const Main=()=>{
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
            <React.Fragment>
            {/* ======Pc====== */}
            <Pc>
                <PaddingMain>
                    {mainStateValue=="home" && <Home/>}
                    {mainStateValue=="shorts" && <Shorts/>}
                    {mainStateValue=="subscribe" && <Subscribe/>}
                    {mainStateValue=="storage" && <Storage/>}
                </PaddingMain>
            </Pc>
            {/* ======Tablet====== */}
            <Tablet>
                <ContainerMain>
                    {mainStateValue=="home" && <Home/>}
                    {mainStateValue=="shorts" && <Shorts/>}
                    {mainStateValue=="subscribe" && <Subscribe/>}
                    {mainStateValue=="storage" && <Storage/>} 
                </ContainerMain>   
            </Tablet>
            </React.Fragment>
        }
        </React.Fragment>
    )
}

export default Main