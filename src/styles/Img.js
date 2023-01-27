import styled from "styled-components"

export const Img = styled.img`
    pointer-events: none;
    width :${props => props.width || "auto"};
    height :${props => props.height || "auto"};
    margin-top: ${(props) => props.margin_top || `0px`};
    margin-bottom: ${(props) => props.margin_bottom || `0px`};
    margin-right: ${(props) => props.margin_right|| `0px`};
    margin-left: ${(props) => props.margin_left || `0px`};
    border-radius : ${props => props.border_radius || "none"};

    ${(props) => props.imgStyle}
`

export const CircleImg =styled(Img)`
    border-radius: 50%;
`