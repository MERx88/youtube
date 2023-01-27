import styled, { css } from "styled-components"

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    flex-direction: ${(props) => props.flex_direction || `row`};
    width: ${(props) => props.width || `auto`};
    height: ${(props) => props.height || `auto`};
    margin-top: ${(props) => props.margin_top || `0px`};
    margin-bottom: ${(props) => props.margin_bottom || `0px`};
    margin-right: ${(props) => props.margin_right|| `0px`};
    margin-left: ${(props) => props.margin_left || `0px`};
    border-radius: ${(props) => props.border_radius || `none`};
    position: ${(props) => props.position|| `static`};
    background-color: ${(props) => props.background_color || `none`};
    &:hover {
        background-color: ${(props) => props.hover_background_color || `none`};
    }

    ${(props) => props.btnStyle}
`
