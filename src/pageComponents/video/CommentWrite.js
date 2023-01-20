import React from "react"
import styled from "styled-components"

import ImgBtn from "../../components/ImgBtn"
import TextBtn from "../../components/TextBtn"
import {CircleImg} from "../../styles/Img"

import {VideoDataState,VideoBtnDataState} from "../../recoil/VideoState"
import {useRecoilValue} from "recoil"

const WriteComment = styled.section`
    width:98%;
    height: 80px;
    display: flex;
    flex-direction: column;
    position : relative;
`
const WriteCommentBefore = styled.div`
    width:100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const WriteCommentInput = styled.input`
    width:90%;
    height: 20px;
    position : absolute;
    top : 12px;
    left :55px;
    background-color: #181818;
    border : none;
`
const CommentClickBeforeP = styled.p`
    width:100%;
    height: 20px;
    margin-left: 13px;
    margin-bottom: 5px;
    font-size: 16px;
    color:#3d3d3d;
    border-bottom: 1px solid #3d3d3d;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const CommentBtnContainer = styled.div`
    width:95%;
    height: 40px;
    margin-left : 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content : space-between;
`
const CommentBtnContainerRight = styled.div`
    width:125px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content : space-between;
`
const CommentWrite=()=>{

    const videoDataValue=useRecoilValue(VideoDataState)
    const videoBtnDataValue=useRecoilValue(VideoBtnDataState)

    const [isWriteCommentExpansion,setIsWriteCommentExpansion]=React.useState(false)

    const writeCommentExpansionEvent=()=>{
        isWriteCommentExpansion ? setIsWriteCommentExpansion(false) :  setIsWriteCommentExpansion(true)
    }

    const commentMenuBtnEvent=()=>{

        const target=event.target.id

        switch(target){
            case "0":
                writeCommentExpansionEvent()
                break
            case "1":
                break
        }
    }

    return (
        <WriteComment>
            <WriteCommentBefore>
                <CircleImg height="45px" src="/img/contentProfileImg0.png"/>
                <CommentClickBeforeP  onClick={writeCommentExpansionEvent}>댓글추가...</CommentClickBeforeP>
            </WriteCommentBefore>
            {   
                isWriteCommentExpansion
                ?
                <React.Fragment>
                    <WriteCommentInput type="text"></WriteCommentInput>
                    <CommentBtnContainer>
                        <ImgBtn position="CommentMenu" imgPosition="CommentMenu" data={videoBtnDataValue[1]}/>
                        <CommentBtnContainerRight onClick={commentMenuBtnEvent}>
                        <TextBtn position="CommentMenu" pPosition="CommentMenu" data="취소" id="0"/>
                        <TextBtn position="CommentMenu" pPosition="CommentMenu" data="댓글" id="1"/>
                        </CommentBtnContainerRight>
                    </CommentBtnContainer>
                </React.Fragment>
                :
                null
            }
        </WriteComment>
    )
}

export default CommentWrite