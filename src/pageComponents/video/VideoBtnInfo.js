import React from "react"
import styled from "styled-components"
import {useRecoilValue} from "recoil"

//import component
import ImgBtn from "../../components/ImgBtn"
import ImgTextBtn from "../../components/ImgTextBtn"

//import recoil state 
import {VideoDataState} from "../../recoil/VideoState"

//import style 
import {Div} from "../../styles/Div"
import {CircleImg} from "../../styles/Img"
import {P} from "../../styles/P"
import {useMaxWide, useWide, useNomal} from "../../hooks/useMedia"

//======Component======//

const VideoBtnInfo=()=>{
    //mediaquery
    let isMaxWide=useMaxWide()
    let isWide=useWide()
    let isNomal=useNomal()
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
    const videoDataValue=useRecoilValue(VideoDataState)
    //event
    const likeEvent=()=>{
        isLike ? setIsLike(false) :  setIsLike(true)
    }

    const profileMenuBtnEvent=()=>{

        const target=event.target.id

        switch(target){
            case "0":
                
                break
            case "1":
                likeEvent()
                break
            case "2":
                break
            case "3":
                break
            case "4":
                break
            case "5":
                break
            case "6":
                break
            case "7":
                break
            case "9":
                likeEvent()
                break
        }
    }

    return (
        <React.Fragment>
            <Div height="50px" margin_top="10px" flex_style="flexSpaceBetween" onClick={profileMenuBtnEvent}>
                <Div width="250px" height="100%"  margin_top="10px" flex_style="flexSpaceAround">
                    <CircleImg height="45px" src={videoDataValue[0]?.profileImg}/>
                    <Div height="100%"  margin_top="10px" margin_left="5px"  flex_direction="column">
                        <P font_size="extraLarge">
                            {videoDataValue[0]?.videoProfileName}
                        </P>
                        <P color="#3d3d3d" font_size="small">
                            구독자 {videoDataValue[0]?.videoProfileSubscriber}
                        </P>
                    </Div>
                    <ImgTextBtn btn_style="videoMenuBtn" img_style="smallImg" p_style="smallP" data={videoBtnData[0]}/>
                </Div>
                <Div width="43%" flex_style="flexSpaceAround" media={isNomal}>
                    <ImgBtn btn_style="videoMenuBtn" img_style="extraSmallImg" data={isLike ? videoBtnData[8] : videoBtnData[1]}/>
                    <ImgBtn btn_style="videoMenuBtn" img_style="extraSmallImg" data={videoBtnData[2]}/>
                    <ImgTextBtn btn_style="videoMenuBtn" img_style="smallImg" p_style="smallP" data={videoBtnData[3]}/>
                    {isNomal ?<ImgTextBtn btn_style="videoMenuBtn" img_style="smallImg" p_style="smallP" data={videoBtnData[4]}/>: null}
                    {isMaxWide ? <ImgTextBtn btn_style="videoMenuBtn" img_style="smallImg" p_style="smallP" data={videoBtnData[5]}/> : null}
                    {isWide ?<ImgTextBtn btn_style="videoMenuBtn" img_style="smallImg" p_style="smallP" data={videoBtnData[6]}/> : null}
                    <ImgBtn btn_style="videoMenuBtn" img_style="extraSmallImg" data={videoBtnData[7]}/>
                </Div>
            </Div>
            <Div  height="100px" margin_top="10px" border_radius="15px" background_color="#3d3d3d" flex_direction="column" >
                <Div margin_bottom="5px" >
                    <P color="white" font_size="medium">
                        {videoDataValue[0]?.videoView}
                    </P>
                    <P color="white" font_size="medium">
                        {videoDataValue[0]?.videotUploadDate}
                    </P>
                </Div>
                <P color="white" font_size="medium">
                    {videoDataValue[0]?.videoInfo}
                </P>
            </Div>
        </React.Fragment>
    )
}

export default VideoBtnInfo