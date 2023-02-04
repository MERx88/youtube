import React from "react"
import styled from "styled-components"
import {useRecoilValue} from "recoil"

//import component
import ImgBtn from "../../components/ImgBtn"
import TextBtn from "../../components/TextBtn"

//import recoil state 
import {VideoDataState} from "../../recoil/VideoState"

//import style 
import {Div} from "../../styles/Div"
import {Input} from "../../styles/Input"
import {CircleImg} from "../../styles/Img"
import {P} from "../../styles/P"

//======style======//

const WriteCommentInput = styled(Input)`
    top : 10px;
    left : 55px;
`
const CommentClickBeforeDiv = styled(Div)`
    border-bottom: 1px solid #3d3d3d;
`
//======Component======//

const CommentWrite=(props)=>{
    //props
    const {commentBtnData}=props
    //state
    const [isWriteCommentExpansion,setIsWriteCommentExpansion]=React.useState(false)
     //recoilState
    const videoDataValue=useRecoilValue(VideoDataState)
    //event
    const writeCommentExpansionEvent=()=>{
        isWriteCommentExpansion ? setIsWriteCommentExpansion(false) :  setIsWriteCommentExpansion(true)
    }

    const commentMenuBtnEvent=()=>{

        const target=event.target.id

        switch(target){
            case "commentBtnId_1":
                writeCommentExpansionEvent()
                break
            case "commentBtnId_2":
                break
        }
    }

    return (
        <Div width="98%" height="80px" margin_top="5px" flex_direction="column"  position="relative" >
            <Div width="100%" height="80px" flex_style="flexLeftCenter">
                <CircleImg height="45px" src={videoDataValue[0]?.profileImg}/>
                <CommentClickBeforeDiv  width="100%" height="20px" margin_bottom="5px" margin_left="13px" flex_style="flexLeftCenter">
                <P color="#3d3d3d" font_size="large" onClick={writeCommentExpansionEvent}>댓글추가...</P>
                </CommentClickBeforeDiv>
            </Div>
            {   
                isWriteCommentExpansion
                ?
                <React.Fragment>
                    <WriteCommentInput  width="95%" height="24px" background_color="#181818" position="absolute" border="none" type="text"></WriteCommentInput>
                    <Div width="92%" height="40px" margin_left="60px" flex_style="flexSpaceBetween">
                        <ImgBtn id="commentBtnId_0" shape="circle" color="black" size="small" data={commentBtnData[1]}/>
                        <Div width="120px" height="40px" flex_style="flexSpaceBetween" onClick={commentMenuBtnEvent}>
                            <TextBtn id="commentBtnId_1" shape="round" color="gray" size="small" data={commentBtnData[3]}/>
                            <TextBtn id="commentBtnId_2" shape="round" color="gray" size="small" data={commentBtnData[4]}/>
                        </Div>
                    </Div>
                </React.Fragment>
                :
                null
            }
        </Div>
    )
}

export default CommentWrite