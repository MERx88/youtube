import styled , { css }  from "styled-components"

export const P = styled.p`
    width: fit-content;
    height :fit-content;
    margin-top: ${(props) => props.margin_top || `0px`};
    margin-bottom: ${(props) => props.margin_bottom || `0px`};
    margin-right: ${(props) => props.margin_right|| `0px`};
    margin-left: ${(props) => props.margin_left || `0px`};

    font-size:
    ${(props) => 
        props.font_size =="extraSmall"
        ? `10px`
        : props.font_size =="small"
        ? `12px`
        : props.font_size =="medium"
        ? `14px`
        : props.font_size =="large"
        ? `16px`
        : props.font_size =="extraLarge"
        ? `18px`
        : `14px`
    };

    font-weight:
    ${(props) => 
        props.font_weight =="light"
        ? `100`
        : props.font_weight =="medium"
        ? `300`
        : props.font_weight =="bold"
        ? `500`
        : `300`
    };

    color: 
    ${(props) => 
        props.color =="white"
        ? `#ffffff`
        : props.color =="gray"
        ? `#3d3d3d`
        : props.color =="black"
        ? `#181818`
        : `#ffffff`
    };
`
