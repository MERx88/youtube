import React from "react"
import styled from "styled-components"
import {useMediaQuery } from "react-responsive"
import {useRecoilValue} from "recoil"

//import component
import ImgBtn from "../../components/ImgBtn"
import ImgTextBtn from "../../components/ImgTextBtn"

//import recoil state 
import {ContentDataState, videoDataIndexState} from "../../recoil/HomeState"

//import style 
import {Div} from "../../styles/Div"
import {CircleImg} from "../../styles/Img"
import {P} from "../../styles/P"

//======Component======//

const VideoBtnBox=()=>{
    //mediaquery
    const isMaxWide = useMediaQuery({
        query : "(min-width:1400px)"
    });
    const isWide = useMediaQuery({
        query : "(min-width:1200px)"
    });
    const isNomal = useMediaQuery({
        query : "(min-width:1000px)"
    });
    //staticData
    const videoBtnData=[
        {   "id":"0",
            "img":"/img/bell.png",
            "txt":"구독중"
        },
        {   "id":"1",
            "img":"/img/likeOutline.png"
        },
        {   "id":"2",
            "img":"/img/dislike.png"
        },
        {   "id":"3",
            "img":"/img/share.png",
            "txt":"공유"
        },
        {   "id":"4",
            "img":"/img/download.png",
            "txt":"오프라인 저장"
        },
        {   "id":"5",
            "img":"/img/donation.png",
            "txt":"Thanks"
        },
        {   "id":"6",
            "img":"/img/clip.png",
            "txt":"클립"
        },
        {   "id":"7",
            "img":"/img/menu.png",
        },
        {   "id":"8",
            "img":"/img/likeFill.png"
        }
    ]
    //state
    const [isLike,setIsLike]=React.useState(false)
    //recoilState
    const contentDataValue=useRecoilValue(ContentDataState)
    const videoDataIndexValue=useRecoilValue(videoDataIndexState)
    //event
    const likeEvent=()=>{
        isLike ? setIsLike(false) :  setIsLike(true)
    }

    const profileMenuBtnEvent=()=>{

        const target=event.target.id

        switch(target){
            case "videoMenuBtnId_0":
                break
            case "videoMenuBtnId_1":
                likeEvent()
                break
            case "videoMenuBtnId_2":
                break
            case "videoMenuBtnId_3":
                break
            case "videoMenuBtnId_4":
                break
            case "videoMenuBtnId_5":
                break
            case "videoMenuBtnId_6":
                break
            case "videoMenuBtnId_7":
                break
            case "videoMenuBtnId_8":
                likeEvent()
                break
        }
    }

    return (
        <React.Fragment>
            <Div height="50px" margin_top="10px" flex_style="flexSpaceBetween" onClick={profileMenuBtnEvent}>
                <Div  height="100%"  margin_top="10px" flex_style="flexSpaceAround">
                    <CircleImg height="45px" src={contentDataValue[videoDataIndexValue].profileImg}/>
                    <Div height="100%"  margin_top="10px" margin_left="10px" margin_right="10px" flex_direction="column">
                        <P font_size="extraLarge" font_weight="bold" >
                            {contentDataValue[videoDataIndexValue].channelTitle}
                        </P>
                        <P color="gray" font_size="small">
                            구독자 {contentDataValue[videoDataIndexValue].channelSubscriber}
                        </P>
                    </Div>
                    <ImgTextBtn id="videoMenuBtnId_0" shape="round" color="gray" size="small" flex_direction="row" flex_style="flexCenter"  data={videoBtnData[0]}/>
                </Div>
                <Div width="50%" flex_style="flexSpaceAround" media={isNomal}>
                    <ImgBtn id="videoMenuBtnId_1" shape="circle" color="gray" size="medium" data={isLike ? videoBtnData[8] : videoBtnData[1]}/>
                    <ImgBtn id="videoMenuBtnId_2" shape="circle" color="gray" size="medium" data={videoBtnData[2]}/>
                    <ImgTextBtn id="videoMenuBtnId_3" shape="round" color="gray" size="small" flex_direction="row" flex_style="flexCenter"  data={videoBtnData[3]}/>
                    <ImgTextBtn id="videoMenuBtnId_4" shape="round" color="gray" size="small" flex_direction="row" flex_style="flexCenter"  data={videoBtnData[4]}/>
                    {isMaxWide ? <ImgTextBtn id="videoMenuBtnId_5" shape="round" color="gray" size="small" flex_direction="row" flex_style="flexCenter"  data={videoBtnData[5]}/>: null}
                    {isWide ?<ImgTextBtn id="videoMenuBtnId_6" shape="round" color="gray" size="small" flex_direction="row" flex_style="flexCenter"  data={videoBtnData[6]}/> : null}
                    <ImgBtn id="videoMenuBtnId_7" shape="circle" color="gray" size="medium" data={videoBtnData[7]}/>
                </Div>
            </Div>
        </React.Fragment>
    )
}

export default VideoBtnBox