
import React from "react"

import styled, { css } from "styled-components"

const ImgTextButton = styled.button`

    ${(p) => p.positionStyle}

    border: none;
    display : flex;
    cursor: pointer;
`
const POSITIONS = {
    HeadPopUpMenu : css`
        width: 100%;
        height: 50px;
        background-color: #3d3d3d;
        flex-direction: row;
        align-items: center;

        &:hover {
            background-color: #6d6d6d;
          }
    `,
    SideMenuSimple : css`
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
    SideMenuDetail : css`
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
    HomeContentExpansion : css`
        width:48%;
        height:40px;
        background-color: #656565;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
    `,
    VideoMenu : css`
        height: 40px;
        padding :15px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        border-radius: 50px;
        background-color:#3d3d3d ;
    `,
    CommentListSort : css`
        width: 100px;
        height: 30px;
        font-size: 14px;
        color: #b1b1b1;
        background-color: #181818;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    `
};

// ========================================== //

const ButtonImg = styled.img`

    ${(p) => p.imgPositionStyle}
    pointer-events: none;
`
const IMG_POSITIONS = {
    HeadPopUpMenu : css`
        width: 18px;
        margin-left: 22px;
        margin-right: 22px;
    `,
    SideMenuSimple : css`
        width: 18px;
    `,
    SideMenuDetail : css`
        width: 18px;
        margin-left: 22px;
    `,
    HomeContentExpansion : css`
        height : 17px;
        margin-right: 10px;
    `,
    VideoMenu : css`
        height: 18px;
    `,
    CommentListSort : css`
        height: 13px;
    `,
};

// ========================================== //

const ButtonP = styled.p`

    ${(p) => p.pPositionStyle}
    
    color: white;
    pointer-events: none;
`
const P_POSITIONS = {
    HeadPopUpMenu : css`
        font-size: 15px;
    `,
    SideMenuSimple : css`
        font-size: 10px;
    `,
    SideMenuDetail : css`
        margin-left: 20px;
        font-size: 15px;
        font-weight: 200;
    `,
    HomeContentExpansion : css`
        color: white;
        font-weight: 400;
        font-size: 12px;
    `,
    VideoMenu : css`
        margin-left: 10px;
        font-size: 13px;
    `,
    CommentListSort : css`
        margin-left: 5px;
        font-size: 13px;
    `,
};

// ========================================== //

const ImgTextBtn=(props)=>{

	const {position, imgPosition, pPosition, data} = props

    const positionStyle = POSITIONS[position]

    const imgPositionStyle = IMG_POSITIONS[imgPosition]

    const pPositionStyle = P_POSITIONS[pPosition]

 	return(
        <ImgTextButton id={data?.id} positionStyle={positionStyle}>
             <ButtonImg imgPositionStyle={imgPositionStyle} src={data?.img}/> 
             <ButtonP pPositionStyle={pPositionStyle}>{data?.txt}</ButtonP>
        </ImgTextButton>
	)
}

export default ImgTextBtn