import React from "react"
import styled,{ css }  from "styled-components"

//import component
import ImgTextBtn from "../../../components/ImgTextBtn"

//import style 
import {Div} from "../../../styles/Div"
import {CircleImg} from "../../../styles/Img"
import {P} from "../../../styles/P"

// const PopUpMenu= styled.div`
   
//     ${(p) => p.popUpMenuStyle}

//     width="800px" height="500px" border_radius="20px" background_color="#3d3d3d" position="absolute" flex_direction="column" flex_style="flexRightCenter" 
// `
// profile : css`
//         width : 300px;
//         height : 200px;
//         top :65px;
//         right : 5px; 
//     `
//     }

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

    const BtnData=[
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
                <CircleImg height="45px" src={BtnData[0].img}/>
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
            <ImgTextBtn btn_style="HeadPopUpMenu" img_style="mediumImg" p_style="mediumP" data={BtnData[1]}/>
            <ImgTextBtn btn_style="HeadPopUpMenu" img_style="mediumImg" p_style="mediumP" data={BtnData[2]}/>
            </Div>
        </ProfilePopUpMenuDiv>
    )
}

export default ProfilePopUpMenu