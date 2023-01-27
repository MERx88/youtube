import styled from "styled-components"

export const Img = styled.img`
    width :${props => props.width || "auto"};
    height :${props => props.height || "auto"};
    border-radius : ${props => props.border_radius || "none"};
`

export const CircleImg =styled(Img)`
    border-radius: 50%;
`