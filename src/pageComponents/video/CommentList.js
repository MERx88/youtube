import React from "react"
import styled from "styled-components"

import Comment from "./Comment"
import CommentWrite from "./CommentWrite"

import ImgTextBtn from "../../components/ImgTextBtn"
import {H1} from "../../styles/H1"
import {CircleImg} from "../../styles/Img"

import {VideoDataState, CommentDataState, VideoBtnDataState} from "../../recoil/VideoState"
import {useRecoilValue} from "recoil"

const CommentListContainer = styled.aside`
    width:100%;
    margin-top:15px;
    padding-left: 10px;
    padding-right: 10px;
`
const CommentHeader = styled.section`
    width: 150px;
    font-size: 17px;
    color: #b1b1b1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const Comments = styled.section`
    width: 100%;
    height :auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`


const CommentList=()=>{

    const commentDataValue=useRecoilValue(CommentDataState)
    const videoBtnDataValue=useRecoilValue(VideoBtnDataState)

    return (
        <CommentListContainer>
            <CommentHeader>
                <H1 font_size="17px">댓글</H1>
                <ImgTextBtn position="CommentListSort" imgPosition="CommentListSort" pPosition="CommentListSort" data={videoBtnDataValue[8]}/>
            </CommentHeader>
            <CommentWrite/>
            <Comments>
            {
                commentDataValue.map((data,index)=>{
                return <Comment key={data} index={index}/>
                })
            } 
            </Comments>
        </CommentListContainer>
    )
}

export default CommentList