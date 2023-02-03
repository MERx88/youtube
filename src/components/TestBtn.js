import React from "react"

import styled from "styled-components"

export const ImgTextButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    flex-direction: ${(props) => props.flex_direction || `row`};

    width: 
    ${(props) => 
        props.shape =="circle" || "roundSquare"
        ? props.size =="small" 
            ? `30px`
            : props.size =="medium"
            ? `80px`
            : props.size == "large"
            ? `100px`
            : `70px`
        : `auto`
    };

    height: 
    ${(props) => 
        props.size =="small"
        ? `30px`
        : props.size =="medium"
        ? `80px`
        : props.size == "large"
        ? `100px`
        : `50px`
    };

    border-radius: 
    ${(props) => 
        props.shape =="round" || "roundSquare"
        ? `1em`
        : props.shape =="circle"
        ? `50%`
        : `none`
    };

    background-color: 
    ${(props) => 
        props.color =="black"
        ? `#181818`
        : props.color =="darkGray"
        ? `#212121`
        : props.color =="gray"
        ? `#3d3d3d`
        : `#181818`
    };
    
    &:hover {
        background-color: ${(props) => 
            props.color =="black"
            ? `#3d3d3d`
            : props.color =="darkGray"
            ? `#6d6d6d`
            : props.color =="gray"
            ? `#6d6d6d`
            : `none`
        };
`

export const Img = styled.img`
    pointer-events: none;
    width: 
    ${(props) => 
        props.size =="small"
        ? `15px`
        : props.size =="medium"
        ? `19px`
        : props.size == "large"
        ? `40px`
        : `19px`
    };
`

export const P = styled.p`
    pointer-events: none;
    color : white;
    font-size: 
    ${(props) => 
        props.size =="small"
        ? `10px`
        : props.size =="medium"
        ? `14px`
        : props.size == "large"
        ? `18px`
        : `14px`
    };
`


// ========================================== //

const TestBtn=(props)=>{

    const {id, shape, color, size, flex_direction, data, onClick} = props

 	return(
        <ImgTextButton id={id} shape={shape} color={color} size={size} flex_direction={flex_direction} onClick={onClick ? onClick : "null"}>
            <Img size={size} src={data.img}/>
            <P size={size}>{data.txt}</P>
        </ImgTextButton>
	)
}

export default TestBtn

