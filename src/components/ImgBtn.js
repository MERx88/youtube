import React from "react"

import { css } from "styled-components"

import {Button} from "../styles/Button"
import {Img} from "../styles/Img"


const BTN_STYLE= {

//======Header Button======//

    headerBtn : css`
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: #181818;

        &:hover {
            background-color: #3d3d3d;
        }
    `,
    headerLogo : css`
        width: 128px;
        height: 27px;
        margin-left : 15px;
        background-color: #181818;
    `,
    headerSearchBtn : css`
        width: 80px;
        height: 40px;
        right: 0px;
        border-radius: 0px 55px 55px 0px;
        position: absolute;
        background-color: #3d3d3d;
    `,
    headerMicBtn : css`
        width: 45px;
        height: 45px;
        margin-left: 10px;
        border-radius: 50%;
        background-color: #212121;

        &:hover {
            background-color: #6d6d6d;
        }
    `,

//======Header Popup Menu Button======//


    headerPopUpBtn : css`
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: #3d3d3d;

        &:hover {
            background-color: #6d6d6d;
        }
    `,
    headerPopUpMicBtn : css`
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #3d3d3d;

        &:hover {
            background-color: #6d6d6d;
        }
    `,

//======Video Menu Button======//

    videoMenuBtn : css`
        width:40px;
        height: 40px;
        border-radius: 50%;
        background-color: #3d3d3d;
    `,


//======Comment Button======//

    commentMenuBtn : css`
        width:25px;
        height: 25px;
        background-color: #181818;
    `,

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
        height: 27px;
    `,
    extraLargeImg : css`
        height: 40px;
    `,

//======CircleImg======//

    extraSmallCircleImg : css`
        border-radius: 50%;
        height: 15px;
    `,
    smallCircleImg : css`
        border-radius: 50%;
        height: 17px;
    `,
    mediumCircleImg : css`
        border-radius: 50%;
        height: 19px;
    `,
    largeCircleImg : css`
        border-radius: 50%; 
        height: 45px;
    `,
    extraLargeCircleImg: css`
        border-radius: 50%; 
        height: 50px;
    `
};


// ========================================== //

const ImgBtn=(props)=>{
    const {btn_style, img_style, data} = props
    const btnStyle = BTN_STYLE[btn_style];
    const imgStyle = IMG_STYLE[img_style];
 	return(
        <Button id={data.id} btnStyle={btnStyle}>
            <Img imgStyle={imgStyle} src={data.img}/>
        </Button>
	)
}

export default ImgBtn

