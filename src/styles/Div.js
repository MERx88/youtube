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

    ${(props) => FLEXSTYLE[props.flex_style] || FLEXSTYLE[flexCenter]}
`

export const CusorDiv = styled(Div)`
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.hover_background_color || `none`};
    }
`

//======flex style======//

const FLEXSTYLE = {
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