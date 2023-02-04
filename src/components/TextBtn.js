import React from "react"

import styled , {css}from "styled-components"

export const TextButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    flex-direction: row;
    padding :  15px;

    width: ${(props) => 
        props.shape == ("circle" ||"round")
        ? props.size =="extraSmall" 
            ? `25px`
            : props.size =="small"
            ? `30px`
            : props.size =="medium"
            ? `50px`
            : props.size == "large"
            ? `100px`
            : `50px`
        : `auto`
    };

    height: 
    ${(props) => 
        props.size =="extraSmall"
        ? `25px`
        : props.size =="small"
        ? `30px`
        : props.size =="medium"
        ? `50px`
        : props.size == "large"
        ? `100px`
        : `50px`
    };

    border-radius: 
    ${(props) => 
        props.shape == "round"
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

export const P = styled.p`
    width: fit-content;
    height :fit-content;
    pointer-events: none;
    color : white;

    margin-left:
    ${(props) => 
        props.flex_direction == (`row` || null)
        ? "1em" 
        : null 
    };

    font-size: 
    ${(props) => 
        props.size =="small"
        ? `12px`
        : props.size =="medium"
        ? `14px`
        : props.size == "large"
        ? `18px`
        : `14px`
    };
`


// ========================================== //

const TextBtn=(props)=>{

    const {id, shape, color, size, data, onClick} = props

 	return(
        <TextButton id={id} shape={shape} color={color} size={size} onClick={onClick}>
            <P size={size}>{data.txt}</P>
        </TextButton>
	)
}

export default TextBtn

