
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
    HeadMenu : css`
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: #181818;

        &:hover {
            background-color: #3d3d3d;
          }
    `,
    HeadLogo : css`
        height: 100%;
        margin-left: 15px;
        background-color: #181818;
    `,
    HeadSearchMenu : css`
        width: 80px;
        height: 40px;
        right: 0px;
        border-radius: 0px 55px 55px 0px;
        position: absolute;
        background-color: #3d3d3d;
    `,
    HeadMicMenu : css`
        width: 45px;
        height: 45px;
        margin-left: 10px;
        border-radius: 50%;
        background-color: #212121;

        &:hover {
            background-color: #6d6d6d;
          }
    `,
    HeadPopUpMenu : css`
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: #3d3d3d;

        &:hover {
            background-color: #6d6d6d;
          }
    `,
    HeadPopUpMicMenu : css`
        width: 100px;
        height: 100px;
        margin-left: 10px;
        border-radius: 50%;
        background-color: #6d6d6d;
    `,
    ProfileMenu : css`
        width: 45px;
        height: 45px;
        border-radius: 50%;
    `,
    VideoMenu : css`
        width:40px;
        height: 40px;
        border-radius: 50%;
        background-color: #3d3d3d;
    `,
    CommentMenu : css`
        width:25px;
        height: 25px;
        background-color: #181818;
    `,
};

// ========================================== //

const ButtonImg = styled.img`

    ${(p) => p.imgPositionStyle}

    pointer-events: none;
`
const IMG_POSITIONS = {
    HeadMenu : css`
        height: 19px;
    `,
    HeadLogo : css`
        height: 25px;
    `,
    HeadPopUpMenu : css`
        height: 19px;
    `,
    HeadPopUpMicMenu : css`
        height: 50px;
    `,
    ProfileMenu : css`
        height: 45px;
        border-radius: 50%;
    `,
    VideoMenu : css`
        height: 15px;
    `,
    CommentMenu : css`
        height: 18px;
    `,
};

// ========================================== //

const ImgBtn=(props)=>{

    const {position, imgPosition, data} = props

    const positionStyle = POSITIONS[position];

    const imgPositionStyle = IMG_POSITIONS[imgPosition];

 	return(
        <ImgButton id={data?.id} positionStyle={positionStyle}>
             <ButtonImg imgPositionStyle={imgPositionStyle} src={data?.img}/> 
        </ImgButton>
	)
}

export default ImgBtn


  
