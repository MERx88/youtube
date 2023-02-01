import React from "react"
import styled,{ css }  from "styled-components"

//import component
import ImgBtn from "../../components/ImgBtn"

//import style 
import {Div} from "../../../styles/Div"
import {H1} from "../../styles/H1"
import {P} from "../../styles/P"

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

    return (
        <Div width="800px" height="500px" border_radius="20px" background_color="#3d3d3d" position="absolute" flex_direction="column" flex_style="flexLeftCenter">
            <Div width="92%" height="100px" margin_top="10px" flex_style="flexRightCenter">
                <ImgBtn position="HeadPopUpMenu" imgPosition="HeadPopUpMenu" data={headmenuPopUpMenuData[0]}/>
            </Div>
            <Div width="92%" height="300px" margin_top="10px" margin_bottom="230px">
                <H1 font_size="extraLarge" >음성으로 검색</H1>
                <P font_size="medium" margin_top="10px">음성으로 검색하려면 브라우저 설정으로 이동해 마이크에 대한 액세스를 허용하세요.</P>
            </Div>
            <ImgBtn position="HeadPopUpMicMenu" imgPosition="HeadPopUpMicMenu" data={headmenuPopUpMenuData[1]}/>
        </Div>
    )
}

export default MicPopUpMenu