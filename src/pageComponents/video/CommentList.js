import React from "react"
import styled from "styled-components"
import {useRecoilValue} from "recoil"

//import component
import Comment from "./Comment"
import CommentWrite from "./CommentWrite"
import ImgTextBtn from "../../components/ImgTextBtn"

//import recoil state 
import {CommentDataState} from "../../recoil/VideoState"

//import style 
import {Div} from "../../styles/Div"
import {H1} from "../../styles/H1"

//======Component======//

const CommentList=()=>{
    //staticData
    const commentBtnData=[
        {   "id":"0",
            "img":"/img/menu.png",
            "txt":"정렬기준"
        },
        {   "id":"1",
            "img":"/img/likeOutline.png"
        },
        {   "id":"2",
            "img":"/img/dislike.png"
        },
        {   "id":"3",
            "txt":"취소"
        },
        {   "id":"4",
            "txt":"완료"
        },
    ]
    //recoilState
    const commentDataValue=useRecoilValue(CommentDataState)

    return (
        <Div width="100%" margin_top="15px" margin_right="10px" margin_left="10px"  flex_direction="column" >
            <Div  width="150px" flex_style="flexSpaceAround">
                <H1 color="white" font_size="small">댓글</H1>
                <ImgTextBtn id="commentSortBtnId_0" shape="round" color="black" size="small" flex_direction="row" flex_style="flexCenter"  data={commentBtnData[0]}/>
            </Div>
            <CommentWrite commentBtnData={commentBtnData}/>
            <Div  width="100%" flex_direction="column">
            {
                commentDataValue.map((data,index)=>{
                return <Comment key={data} index={index} commentBtnData={commentBtnData}/>
                })
            } 
            </Div>
        </Div>
    )
}

export default CommentList