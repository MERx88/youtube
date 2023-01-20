import styled from "styled-components"

export const H1 = styled.h1`
    width: fit-content;
    height :fit-content;
    padding-top : ${props => props.padding_top|| "0px"};
    margin : 0px;
    color: white;
    font-size : ${props => props.font_size};
`