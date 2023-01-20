
import React from "react"

import styled, { css } from "styled-components"


const ImgButton = styled.button`

    ${(p) => p.positionStyle}

    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const POSITIONS = {
    CommentMenu : css`
        width: 60px;
        height: 35px;
        border-radius: 19px;
        background-color: #3d3d3d;
    `,
    RecommandVideoListSort : css`
        width: auto;
        height: 40px;
        border-radius: 10px;
        background-color:#3d3d3d ;
    `
};

// ========================================== //

const ButtonP = styled.p`

    ${(p) => p.imgPositionStyle}

    color: white;
    pointer-events: none;
`
const P_POSITIONS = {
    CommentMenu : css`
        font-size: 12px;
    `,
    RecommandVideoListSort : css`
        font-size: 15px;
    `
};

// ========================================== //

const TextBtn=(props)=>{

    const {position, pPosition, data, id} = props

    const positionStyle = POSITIONS[position];

    const pPositionStyle = P_POSITIONS[pPosition];

 	return(
        <ImgButton id={id} positionStyle={positionStyle}>
             <ButtonP pPositionStyle={pPositionStyle}>{data}</ButtonP>
        </ImgButton>
	)
}

export default TextBtn


  
