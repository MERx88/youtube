import React from "react"

import styled , {css}from "styled-components"

export const ImgTextButton = styled.button`
    display: flex;
    border: none;
    cursor: pointer;
    padding : 10%;

    flex-direction: ${(props) => props.flex_direction || `row`};

    ${(props) => FLEX_STYLE[props.flex_style] || "none"}

    width: 
    ${(props) => 
        props.shape == "circle"
        ? props.size =="small" 
            ? `30px`
            : props.size =="medium"
            ? `80px`
            : props.size == "large"
            ? `100px`
            : `80px`
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
        : `80px`
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

//======flex style======//

const FLEX_STYLE = {
    flexCenter : css`
        align-items: center;
        justify-content: center;
    `,
    flexLeftCenter : css`
        align-items: center;
        justify-content: start;
    `,
    flexRightCenter : css`
        align-items: center;
        justify-content: end;
    `
}

export const Img = styled.img`
    pointer-events: none;
    width: 
    ${(props) => 
        props.size =="small"
        ? `16px`
        : props.size =="medium"
        ? `19px`
        : props.size == "large"
        ? `40px`
        : `19px`
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

const ImgTextBtn=(props)=>{

    const {id, shape, color, size, flex_direction, flex_style, data, onClick} = props

 	return(
        <ImgTextButton 
            id={id} 
            shape={shape} 
            color={color} 
            size={size} 
            flex_direction={flex_direction} 
            flex_style={flex_style} 
            onClick={onClick ? onClick : null }>
                <Img size={size} src={data.img}/>
                <P size={size} flex_direction={flex_direction}>{data.txt}</P>
        </ImgTextButton>
	)
}

export default ImgTextBtn





