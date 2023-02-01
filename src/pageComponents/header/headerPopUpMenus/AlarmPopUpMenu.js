import React from "react"
import styled,{ css }  from "styled-components"

//import component
import ImgBtn from "../../components/ImgBtn"

//import style 
import {Div} from "../../../styles/Div"
import {H1} from "../../styles/H1"

// const PopUpMenu= styled.div`
   
//     ${(p) => p.popUpMenuStyle}

//     width="800px" height="500px" border_radius="20px" background_color="#3d3d3d" position="absolute" flex_direction="column" flex_style="flexRightCenter" 
// `
// const POPUPMENU = {
//      alarm : css`
// top :65px;
// right : 60px; 
// `,

//======style======//

const AlarmPopUpMenuBodyDiv = styled(Div)`
    border-top : 1px solid #6d6d6d;
`

//======Component======//

const AlarmPopUpMenu=()=>{

    const BtnData=[
        {   "id":"0",
            "img":"/img/settings.png"
        }
    ]

    return (
        <Div width="500px" height="500px" border_radius="20px" background_color="#3d3d3d" position="absolute" flex_direction="column" flex_style="flexLeftCenter">
            <Div width="92%" height="130px" margin_top="10px" flex_style="flexSpaceBetween">
                <H1 font_size="small" >
                    알림
                </H1>
                <ImgBtn position="HeadPopUpMenu" imgPosition="HeadPopUpMenu" data={headmenuPopUpMenuData[4]}/>
            </Div>
            <AlarmPopUpMenuBodyDiv width="100%" height="100%">
                {/* {
                    sidemenuData.map((value)=>{
                        return <ImgTextBtn position="SideMenuSimple" imgPosition="SideMenuSimple" pPosition="SideMenuSimple" data={value}/>
                        
                    })
                }   */}
            </AlarmPopUpMenuBodyDiv>
        </Div>
    )
}

export default AlarmPopUpMenu