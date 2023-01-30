
import React from "react"

import { css } from "styled-components"

import {Button} from "../styles/Button"
import {Img} from "../styles/Img"
import {P} from "../styles/P"


const BTN_STYLE= {

//======Nav Button======//

    navSimpleBtn : css`
        width: 95%;
        height: 80px;
        padding-top: 20px;
        border-radius:15px;
        background-color: #181818;
        flex-direction: column;
        align-items: center;

        &:hover {
            background-color: #3d3d3d;
        }
    `,
    navDetailBtn : css`
        width: 95%;
        height: 45px;
        border-radius:10px;
        background-color: #181818;
        flex-direction: row;
        align-items: center;

        &:hover {
            background-color: #3d3d3d;
        }
    `,

//======Home Content Button ======//

    homeContentExpansionBtn  : css`
        width:48%;
        height:40px;
        background-color: #656565;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
    `,

//======video Button ======//

    videoMenuBtn : css`
        height: 40px;
        padding :15px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        border-radius: 50px;
        background-color:#3d3d3d ;
    `,

//======Comment List Button ======//

    CommentListSortBtn  : css`
        width: 100px;
        height: 30px;
        font-size: 14px;
        color: #b1b1b1;
        background-color: #181818;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    `

}

const IMG_STYLE= {

    extraSmallImg : css`
        height: 15px;
    `,
    smallImg : css`
        height: 17px;
    `,
    mediumImg : css`
        height: 19px;
    `,
    largeImg : css`
        height: 45px;
    `,
    extraLargeImg : css`
        height: 50px;
    `
};

const P_STYLE= {

    extraSmallP : css`
        font-size: 10px;
    `,
    smallP : css`
        font-size: 13px;
    `,
    mediumP : css`
        font-size: 16px;
    `,
    largeP : css`
        font-size: 19px;
    `,
    extraLargeP : css`
        font-size: 22px;
    `
};


// ========================================== //

const ImgTextBtn=(props)=>{
    const {btn_style, img_style, p_style, data} = props
    const btnStyle = BTN_STYLE[btn_style];
    const imgStyle = IMG_STYLE[img_style];
    const pStyle = P_STYLE[p_style];
 	return(
        <Button id={data.id} btnStyle={btnStyle}>
            <Img imgStyle={imgStyle} src={data.img}/>
            <P pStyle={pStyle}>{data.txt}</P>
        </Button>
	)
}

export default ImgTextBtn

// const ImgTextButton = styled.button`

//     ${(p) => p.positionStyle}

//     border: none;
//     display : flex;
//     cursor: pointer;
// `
// const POSITIONS = {
//     HeadPopUpMenu : css`
//         width: 100%;
//         height: 50px;
//         background-color: #3d3d3d;
//         flex-direction: row;
//         align-items: center;

//         &:hover {
//             background-color: #6d6d6d;
//           }
//     `,
//     SideMenuSimple : css`
//         width: 95%;
//         height: 80px;
//         padding-top: 20px;
//         border-radius:15px;
//         background-color: #181818;
//         flex-direction: column;
//         align-items: center;

//         &:hover {
//             background-color: #3d3d3d;
//           }
//     `,
//     SideMenuDetail : css`
//         width: 95%;
//         height: 45px;
//         border-radius:10px;
//         background-color: #181818;
//         flex-direction: row;
//         align-items: center;

//         &:hover {
//             background-color: #3d3d3d;
//           }
//     `,
//     HomeContentExpansion : css`
//         width:48%;
//         height:40px;
//         background-color: #656565;
//         justify-content: center;
//         align-items: center;
//         border-radius: 25px;
//     `,
//     VideoMenu : css`
//         height: 40px;
//         padding :15px;
//         flex-direction: row;
//         justify-content: space-around;
//         align-items: center;
//         border-radius: 50px;
//         background-color:#3d3d3d ;
//     `,
//     CommentListSort : css`
//         width: 100px;
//         height: 30px;
//         font-size: 14px;
//         color: #b1b1b1;
//         background-color: #181818;
//         flex-direction: row;
//         align-items: center;
//         justify-content: space-around;
//     `
// };

// // ========================================== //

// const ButtonImg = styled.img`

//     ${(p) => p.imgPositionStyle}
//     pointer-events: none;
// `
// const IMG_POSITIONS = {
//     HeadPopUpMenu : css`
//         width: 18px;
//         margin-left: 22px;
//         margin-right: 22px;
//     `,
//     SideMenuSimple : css`
//         width: 18px;
//     `,
//     SideMenuDetail : css`
//         width: 18px;
//         margin-left: 22px;
//     `,
//     HomeContentExpansion : css`
//         height : 17px;
//         margin-right: 10px;
//     `,
//     VideoMenu : css`
//         height: 18px;
//     `,
//     CommentListSort : css`
//         height: 13px;
//     `,
// };

// // ========================================== //

// const ButtonP = styled.p`

//     ${(p) => p.pPositionStyle}
    
//     color: white;
//     pointer-events: none;
// `
// const P_POSITIONS = {
//     HeadPopUpMenu : css`
//         font-size: 15px;
//     `,
//     SideMenuSimple : css`
//         font-size: 10px;
//     `,
//     SideMenuDetail : css`
//         margin-left: 20px;
//         font-size: 15px;
//         font-weight: 200;
//     `,
//     HomeContentExpansion : css`
//         color: white;
//         font-weight: 400;
//         font-size: 12px;
//     `,
//     VideoMenu : css`
//         margin-left: 10px;
//         font-size: 13px;
//     `,
//     CommentListSort : css`
//         margin-left: 5px;
//         font-size: 13px;
//     `,
// };