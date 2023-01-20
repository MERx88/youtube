import styled from "styled-components"

export const P = styled.p`
    width: fit-content;
    height :fit-content;
    margin : 0px;
    padding-top : ${props => props.padding_top|| "0px"};
    font-weight: 400;
    color: ${props => props.color || "white"};
    font-size : ${props => props.font_size};
`