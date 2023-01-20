import React from "react"
import styled from "styled-components"

import ImgBtn from "../../components/ImgBtn"
import {P} from "../../styles/P"
import {CircleImg} from "../../styles/Img"

import {CommentDataState, VideoBtnDataState} from "../../recoil/VideoState"
import {useRecoilValue} from "recoil"

const CommentContainer = styled.div`
    width: 100%;
    height :90px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
`
const CommentInfoSection = styled.div`
    width: auto;
    margin-left: 10px;
`
const CommentInfoDetail = styled.div`
    width: 85px;
    height: 25px;
    margin-top :5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const CommentBtn = styled.div`
    width: 90px;
    height: auto;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around; 
`

const Comment=(props)=>{

    const {index}=props

    const commentDataValue=useRecoilValue(CommentDataState)
    const videoBtnDataValue=useRecoilValue(VideoBtnDataState)

    return (
        <CommentContainer>
            <CircleImg height="45px" src={commentDataValue[index].ProfilImg}/>
            <CommentInfoSection>
                <CommentInfoDetail>
                    <P  font_size="14px">
                        {commentDataValue[index].commentProfileName}
                    </P>
                    <P color="#3d3d3d" font_size="14px">
                        {commentDataValue[index].commentUploadDate}
                    </P>
                </CommentInfoDetail>
                <P font_size="16px">
                    {commentDataValue[index].commentTxt}
                </P>
                <CommentBtn>
                    <ImgBtn position="CommentMenu" imgPosition="CommentMenu" data={videoBtnDataValue[1]}/>
                    <ImgBtn position="CommentMenu" imgPosition="CommentMenu" data={videoBtnDataValue[2]}/>
                </CommentBtn>
            </CommentInfoSection>
        </CommentContainer>
    )
}

export default Comment