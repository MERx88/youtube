import React from "react"
import styled from "styled-components"
import {useRecoilValue} from "recoil"

//import component
import ImgBtn from "../../components/ImgBtn"

//import recoil state 
import {CommentDataState} from "../../recoil/VideoState"

//import style 
import {Div} from "../../styles/Div"
import {P} from "../../styles/P"
import {CircleImg} from "../../styles/Img"

//======Component======//

const Comment=(props)=>{
    //props
    const {index, commentBtnData} = props
    //recoilState
    const commentDataValue=useRecoilValue(CommentDataState)

    return (
        <Div  width="100%" height="90px" margin_top="20px" >
            <CircleImg height="45px" src={commentDataValue[index].ProfilImg}/>
            <Div margin_left="10px" flex_direction="column">
                <Div width="85px" height="25px" margin_top="5px" flex_style="flexSpaceBetween">
                    <P font_size="medium">
                        {commentDataValue[index].commentProfileName}
                    </P>
                    <P color="gray" font_size="medium">
                        {commentDataValue[index].commentUploadDate}
                    </P>
                </Div>
                <P font_size="large">
                    {commentDataValue[index].commentTxt}
                </P>
                <Div width="90px" margin_top="5px" flex_style="flexSpaceAround">
                    <ImgBtn id="commentBtnId_0" shape="circle" color="black" size="small" data={commentBtnData[1]}/>
                    <ImgBtn id="commentBtnId_1" shape="circle" color="black" size="small" data={commentBtnData[2]}/>
                </Div>
            </Div>
        </Div>
    )
}

export default Comment