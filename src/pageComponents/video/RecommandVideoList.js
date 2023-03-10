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
import {Tablet,Pc} from "../../styles/MediaQuery"

//======Component======//

const RecommandVideoList=()=>{
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
        <React.Fragment>
        {/* ======Pc====== */}
        <Pc>
        <Div width="400px" flex_direction="column" margin_top="100px"  margin_right="30px">
            <Div  width="100%" height="50px" margin_top="10px" flex_style="flexSpaceAround">
                {
                    RecommandVideoListSortBtnData.map((value, index)=>{
                        return <TextBtn id={index} shape="round" color="gray" size="small" data={value}/>
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
        </Pc>
        {/* ======Tablet====== */}
        <Tablet>
        <Div width="100%" flex_direction="column" margin_top="20px"  margin_right="30px">
            <Div  width="100%" height="50px" margin_top="10px" flex_style="flexSpaceAround">
                {
                    RecommandVideoListSortBtnData.map((value, index)=>{
                        return <TextBtn id={index} shape="round" color="gray" size="small" data={value}/>
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
        </Tablet>
        </React.Fragment>
    )
}

export default RecommandVideoList