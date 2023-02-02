import React from "react"
import styled,{ css }  from "styled-components"
import {useSetRecoilState} from "recoil"

//import component
import ImgBtn from "../../../components/ImgBtn"

//import recoil state 
import {popUpMenuState} from "../../../recoil/HomeState"

//import style 
import {Div} from "../../../styles/Div"
import {H1} from "../../../styles/H1"
import {P} from "../../../styles/P"

// const PopUpMenu= styled.div`
   
//     ${(p) => p.popUpMenuStyle}

//     width="800px" height="500px" border_radius="20px" background_color="#3d3d3d" position="absolute" flex_direction="column" flex_style="flexRightCenter" 
// `
// const POPUPMENU = {
//     mic : css`
//         top : 5px ;
//         right : 350px;
//     `}

//======Component======//

const MicPopUpMenu=()=>{

    const BtnData=[
        {   "id":"0",
            "img":"/img/cross.png",
        },
        {   "id":"1",
            "img":"/img/mic.png",
        }
    ]

    //recoilState
    const setPopUpMenuState=useSetRecoilState(popUpMenuState)

    const micPopUpMenuBtnEvent=()=>{

        const target=event.target.id

        switch(target){
            case "0":
                setPopUpMenuState(null)
                break
            case "1":
                break
        }
    }

    return (
        <Div width="800px" height="500px" border_radius="20px" background_color="#3d3d3d" position="absolute" flex_direction="column" flex_style="flexLeftCenter" onClick={micPopUpMenuBtnEvent}>
            <Div width="92%" height="100px" margin_top="10px" flex_style="flexRightCenter">
                <ImgBtn btn_style="headerPopUpBtn" img_style="mediumImg" data={BtnData[0]}/>
            </Div>
            <Div width="92%" height="150px" margin_top="10px" margin_bottom="230px" flex_direction="column">
                <H1 font_size="extraLarge" >음성으로 검색</H1>
                <P font_size="medium" margin_top="10px">음성으로 검색하려면 브라우저 설정으로 이동해 마이크에 대한 액세스를 허용하세요.</P>
            </Div>
            <Div margin_bottom="20px">
            <ImgBtn btn_style="headerPopUpMicBtn" img_style="extraLargeImg" data={BtnData[1]}/>
            </Div>
        </Div>
    )
}

export default MicPopUpMenu