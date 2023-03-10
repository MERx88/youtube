import styled, { css } from "styled-components"

export const Div = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flex_direction || `row`};
    width: ${(props) => props.width || `auto`};
    height: ${(props) => props.height || `auto`};
    margin-top: ${(props) => props.margin_top || `0px`};
    margin-bottom: ${(props) => props.margin_bottom || `0px`};
    margin-right: ${(props) => props.margin_right|| `0px`};
    margin-left: ${(props) => props.margin_left || `0px`};
    border: ${(props) => props.border || `none`};
    border-radius: ${(props) => props.border_radius || `none`};
    position: ${(props) => props.position|| `static`};
    background-color: ${(props) => props.background_color || `none`};

    ${(props) => FLEX_STYLE[props.flex_style] || "none"}

`
    // ${(props) => 
    //     {
    //         if(props.position=="absolute"){
    //             return(
    //                 `top : ${(props) => props.top || `auto`};
    //                     bottom : ${(props) => props.bottom || `auto`};
    //                     right : ${(props) => props.right || `auto`};
    //                     left : ${(props) => props.left || `auto`};
    //                 `
    //             )
    //         }else {return(null)}
    //     }
    // }

  
export const AbsoluteDiv = styled(Div)`
    position: absolute;
    top : ${(props) => props.top || `auto`};
    bottom : ${(props) => props.bottom || `auto`};
    right : ${(props) => props.right || `auto`};
    left : ${(props) => props.left || `auto`};
`

export const CusorDiv = styled(Div)`
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.hover_background_color || `none`};
    }
`
export const NoneEventsDiv = styled(Div)`
    pointer-events: none;
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
    `,
    flexTopCenter : css`
        justify-content: center;
    `,
    flexSpaceBetween : css`
        align-items: center;
        justify-content: space-between;
    `,
    flexSpaceAround : css`
        align-items: center;
        justify-content: space-around;
    `,
}