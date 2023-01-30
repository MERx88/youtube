import React from "react"
import styled from "styled-components"
import {useRecoilValue} from "recoil"

//import component
import RecommandVideo from "./RecommandVideo"
import TextBtn from "../../components/TextBtn"

//import recoil state 
import {RecommandVideoDataState} from "../../recoil/VideoState"

//import style 
import {Div} from "../../styles/Div"
import {useNomal} from "../../hooks/useMedia"

//======Component======//

const RecommandVideoList=()=>{
    //mediaquery
    let isNomal=useNomal()
    //staticData
    const RecommandVideoListSortBtnData=[
        {   "id":"0",
            "txt":"관련 콘텐츠"
        },
        {   "id":"1",
            "txt":"실시간"
        },
        {   "id":"2",
            "txt":"감상한 동영상"
        },
        {   "id":"3",
            "txt":"최근에 업로드한 동영상"
        }
    ]

    const recommandVideoDataValue=useRecoilValue(RecommandVideoDataState)

    return (
        <Div  width="380px" flex_direction="column" >
            <Div  width="100%" height="50px" margin_top="10px" flex_style="flexSpaceAround"  media={isNomal}>
                {
                    RecommandVideoListSortBtnData.map((value)=>{
                        return <TextBtn btn_style="RecommandVideoListSortBtn" p_style="mediumP" data={value}/>
                    })
                }
            </Div>
            <Div width="100%" margin_top="5px" flex_direction="column" >
            {
                recommandVideoDataValue.map((data,index)=>{
                return <RecommandVideo key={data} index={index}/>
                })
            } 
            </Div>
        </Div>
    )
}

export default RecommandVideoList