import React from "react"

import { css } from "styled-components"

import {Button} from "../styles/Button"
import {P} from "../styles/P"


const BTN_STYLE= {

//======Comment Button======//

    CommentMenuBtn : css`
        width: 60px;
        height: 35px;
        border-radius: 19px;
        background-color: #3d3d3d;
    `,

//======Recommand Video List Button======//

    RecommandVideoListSortBtn : css`
        width: auto;
        height: 40px;
        border-radius: 10px;
        background-color:#3d3d3d;
    `
}

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

const TextBtn=(props)=>{
    const {btn_style, p_style, data} = props
    const btnStyle = BTN_STYLE[btn_style];
    const pStyle = P_STYLE[p_style];
 	return(
        <Button id={data.id} btnStyle={btnStyle}>
            <P pStyle={pStyle}>{data.txt}</P>
        </Button>
	)
}

export default TextBtn

// const ImgButton = styled.button`

//     ${(p) => p.positionStyle}

//     border: none;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
// `

// const POSITIONS = {
//     CommentMenu : css`
//         width: 60px;
//         height: 35px;
//         border-radius: 19px;
//         background-color: #3d3d3d;
//     `,
//     RecommandVideoListSort : css`
//         width: auto;
//         height: 40px;
//         border-radius: 10px;
//         background-color:#3d3d3d ;
//     `
// };

// // ========================================== //

// const ButtonP = styled.p`

//     ${(p) => p.imgPositionStyle}

//     color: white;
//     pointer-events: none;
// `
// const P_POSITIONS = {
//     CommentMenu : css`
//         font-size: 12px;
//     `,
//     RecommandVideoListSort : css`
//         font-size: 15px;
//     `
// };