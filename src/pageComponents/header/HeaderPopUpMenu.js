import React from "react"
import styled,{ css }  from "styled-components"

import {useRecoilValue} from "recoil"
import {popUpMenuState} from "../../recoil/HomeState"

import ImgTextBtn from "../../components/ImgTextBtn"
import ImgBtn from "../../components/ImgBtn"
import {CircleImg} from "../../styles/Img"
import {H1} from "../../styles/H1"
import {P} from "../../styles/P"

const PopUpMenuContainer = styled.div`
    width: 100%;
    height :0px;
    position : fixed;
    z-index: 2;
`
const PopUpMenu= styled.div`
    position : absolute;
    background-color: #3d3d3d;
    border-radius: 20px;
    display :flex;
    flex-direction :column;
    align-items: center;

    ${(p) => p.popUpMenuStyle}
`
const POPUPMENU = {
    mic : css`
        width : 800px;
        height : 500px;
        top : 5px ;
        right : 350px;
    `,
    streaming : css`
        width : 250px;
        height : 120px;
        top :65px;
        right : 120px; 
        padding-top : 20px;
    `,
    alarm : css`
        width : 500px;
        height : 500px;
        top :65px;
        right : 60px; 
    `,
    profile : css`
        width : 300px;
        height : 200px;
        top :65px;
        right : 5px; 
    `
    }

const MicPopUpMenuHeader = styled.div`
    width : 92%;
    hegiht : 100px;
    margin-top :10px;
    display :flex;
    flex-direction :row;
    align-items: center;
    justify-content: end;
`
const MicPopUpMenuBody = styled.div`
    width : 92%;
    hegiht : 300px;
    margin-top :10px;
    margin-bottom :230px;
`
const AlarmPopUpMenuHeader = styled.div`
    width : 92%;
    hegiht : 130px;
    margin-top :10px;
    display :flex;
    flex-direction :row;
    align-items: center;
    justify-content: space-between;
`
const AlarmPopUpMenuList = styled.div`
    border-top : 1px solid #6d6d6d;
    width : 100%;
    hegiht : 100%;
`
const ProfilePopUpMenuHeader = styled.div`
    width : 93%;
    hegiht : 180px;
    margin-top :10px;
    margin-bottom :16px;
    padding-bottom :10px;
    padding-left :20px;
    border-bottom : 1px solid #6d6d6d;
    display :flex;
    flex-direction :row;
    align-items: center;
    justify-content: center;
`
const ProfilePopUpMenuHeaderInfoContainer = styled.div`
    width :75%;
    hegiht : 100%;
    margin-left:20px;
    display :flex;
    flex-direction :column;
   
`

const HeaderPopUpMenu=(props)=>{
    const {headmenuPopUpMenuData}=props
    //state
    const popUpMenuValue=useRecoilValue(popUpMenuState)
    const popUpMenuStyle = POPUPMENU [popUpMenuValue]

    return (
        <PopUpMenuContainer>
            <PopUpMenu popUpMenuStyle={popUpMenuStyle}>
                {
                    popUpMenuValue=="mic" && 
                    <React.Fragment>
                        <MicPopUpMenuHeader>
                            <ImgBtn position="HeadPopUpMenu" imgPosition="HeadPopUpMenu" data={headmenuPopUpMenuData[0]}/>
                        </MicPopUpMenuHeader>
                        <MicPopUpMenuBody>
                            <H1 font_size="24px" >음성으로 검색</H1>
                            <P font_size="15px" padding_top="10px">음성으로 검색하려면 브라우저 설정으로 이동해 마이크에 대한 액세스를 허용하세요.</P>
                        </MicPopUpMenuBody>
                        <ImgBtn position="HeadPopUpMicMenu" imgPosition="HeadPopUpMicMenu" data={headmenuPopUpMenuData[1]}/>
                    </React.Fragment>
                }
                {
                    popUpMenuValue=="streaming" && 
                    <React.Fragment>
                        <ImgTextBtn position="HeadPopUpMenu" imgPosition="HeadPopUpMenu" pPosition="HeadPopUpMenu" data={headmenuPopUpMenuData[2]}/>
                        <ImgTextBtn position="HeadPopUpMenu" imgPosition="HeadPopUpMenu" pPosition="HeadPopUpMenu" data={headmenuPopUpMenuData[3]}/>
                    </React.Fragment>
                }
                {
                    popUpMenuValue=="alarm" && 
                    <React.Fragment>
                        <AlarmPopUpMenuHeader>
                            <H1 font_size="17px" >
                                알림
                            </H1>
                            <ImgBtn position="HeadPopUpMenu" imgPosition="HeadPopUpMenu" data={headmenuPopUpMenuData[4]}/>
                        </AlarmPopUpMenuHeader>
                        <AlarmPopUpMenuList>
                            {/* {
                                sidemenuData.map((value)=>{
                                    return <ImgTextBtn position="SideMenuSimple" imgPosition="SideMenuSimple" pPosition="SideMenuSimple" data={value}/>
                                    
                                })
                            }   */}
                        </AlarmPopUpMenuList>
                    </React.Fragment>
                }
                {
                    popUpMenuValue=="profile" && 
                    <React.Fragment>
                        <ProfilePopUpMenuHeader>
                            <CircleImg height="45px" src={headmenuPopUpMenuData[5].img}/>
                            <ProfilePopUpMenuHeaderInfoContainer>
                                <P font_size="15px">
                                    장승훈
                                </P>
                                <P font_size="15px">
                                    @user-wc2ed7vd4p
                                </P>
                            </ProfilePopUpMenuHeaderInfoContainer>
                        </ProfilePopUpMenuHeader>
                        <ImgTextBtn position="HeadPopUpMenu" imgPosition="HeadPopUpMenu" pPosition="HeadPopUpMenu" data={headmenuPopUpMenuData[6]}/>
                        <ImgTextBtn position="HeadPopUpMenu" imgPosition="HeadPopUpMenu" pPosition="HeadPopUpMenu" data={headmenuPopUpMenuData[7]}/>
                    </React.Fragment>
                }
            </PopUpMenu>
        </PopUpMenuContainer>
    )
}

export default HeaderPopUpMenu