import styled from "styled-components"

export const Img = styled.img`
    height :${props => props.height};
`

export const CircleImg =styled(Img)`
    border-radius: 50%;
`