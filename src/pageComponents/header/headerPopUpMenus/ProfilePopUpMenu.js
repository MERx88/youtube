import React from "react"
import styled,{ css }  from "styled-components"

//import component
import ImgTextBtn from "../../../components/ImgTextBtn"

//import style 
import {Div} from "../../../styles/Div"
import {CircleImg} from "../../../styles/Img"
import {P} from "../../../styles/P"

//======style======//

const ProfilePopUpMenuDiv= styled(Div)`
    top :50px;  
`

const ProfilePopUpMenuHeaderDiv = styled(Div)`
    padding-bottom :10px;
    padding-left :20px;
    border-bottom : 1px solid #6d6d6d;
`

//======Component======//

const ProfilePopUpMenu=()=>{

    const btnData=[
        {   "id":"0",
            "img":"/img/profileSectionBtnIcon2.png"
        },
        {   "id":"1",
            "img":"/img/user.png",
            "txt":"내 채널"
        },
        {   "id":"2",
            "img":"/img/sign-out-alt.png",
            "txt":"로그아웃"
        }
    ]

    return (
        <ProfilePopUpMenuDiv width="300px" height="200px"  border_radius="20px" background_color="#3d3d3d" position="absolute" flex_direction="column" flex_style="flexLeftCenter">
            <ProfilePopUpMenuHeaderDiv width="93%" height="200px" margin_top="10px" margin_bottom="16px" flex_style="flexCenter">
                <CircleImg height="45px" src={btnData[0].img}/>
                <Div width="75%" hegiht="100%" margin_left="20px" flex_direction="column">
                    <P font_size="medium">
                        장승훈
                    </P>
                    <P font_size="medium">
                        @user-wc2ed7vd4p
                    </P>
                </Div>
            </ProfilePopUpMenuHeaderDiv>
            <Div width="100%" margin_bottom="20px" flex_direction="column">
            <ImgTextBtn id="profilePopUpMenuBtnId_0" shape="round" color="gray" size="small" flex_direction="row" flex_style="flexLeftCenter"  data={btnData[1]}/>
            <ImgTextBtn id="profilePopUpMenuBtnId_1" shape="round" color="gray" size="small" flex_direction="row" flex_style="flexLeftCenter"  data={btnData[2]}/>
            </Div>
        </ProfilePopUpMenuDiv>
    )
}

export default ProfilePopUpMenu