import React from "react"

import styled from "styled-components"

export const ImgButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    flex-direction: row;

    width: ${(props) => 
        props.shape == ("circle" ||"round")
        ? props.size =="small" 
            ? `25px`
            : props.size =="medium"
            ? `50px`
            : props.size == "large"
            ? `100px`
            : `50px`
        : `auto`
    };

    height: 
    ${(props) => 
        props.size =="small"
        ? `25px`
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

export const Img = styled.img`
    pointer-events: none;

    height: 
    ${(props) => 
        props.size =="small"
        ? `10px`
        : props.size =="medium"
        ? `22px`
        : props.size == "large"
        ? `50px`
        : `20px`
    };
`


// ========================================== //

const ImgBtn=(props)=>{

    const {id, shape, color, size, data, onClick} = props

 	return(
        <ImgButton id={id} shape={shape} color={color} size={size} onClick={onClick}>
            <Img size={size} src={data.img}/>
        </ImgButton>
	)
}

export default ImgBtn

