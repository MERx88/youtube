import styled , { css } from "styled-components"

export const H1 = styled.h1`
    width: fit-content;
    height :fit-content;
    margin-top: ${(props) => props.margin_top || `0px`};
    margin-bottom: ${(props) => props.margin_bottom || `0px`};
    margin-right: ${(props) => props.margin_right|| `0px`};
    margin-left: ${(props) => props.margin_left || `0px`};
    ${(props) => FONT_WEIGHT[props.font_weight] || "font-weight : 400"};
    ${(props) => FONT_SIZE[props.font_size] || "font-size : 14px"};
    color: ${props => props.color || "white"};
`

const FONT_SIZE = {
    extraSmall : css`
        font-size : 13px;
    `,
    small : css`
        font-size : 16px;
    `,
    medium : css`
        font-size : 19px;
    `,
    large : css`
        font-size : 22px;
    `,
    extraLarge : css`
        font-size : 25px;
    `
}

const FONT_WEIGHT = {
    extraLight : css`
        font-weight : 100;
    `,
    light : css`
        font-weight : 200;
    `,
    regular : css`
        font-weight : 300;
    `,
    bold : css`
        font-weight : 400;
    `,
    extraBold : css`
        font-weight : 500;
    `
}
