import styled, { css } from "styled-components"

export const Input = styled.input`
    width: ${(props) => props.width || `auto`};
    height: ${(props) => props.height || `auto`};
    margin-top: ${(props) => props.margin_top || `0px`};
    margin-bottom: ${(props) => props.margin_bottom || `0px`};
    margin-right: ${(props) => props.margin_right|| `0px`};
    margin-left: ${(props) => props.margin_left || `0px`};
    border: ${(props) => props.border || `none`};
    border-radius: ${(props) => props.border_radius || `none`};
    color: ${(props) => props.color || `none`};
    font-size: ${(props) => props.font_size || `none`};
    position: ${(props) => props.position|| `static`};
    background-color: ${(props) => props.background_color || `none`};
`