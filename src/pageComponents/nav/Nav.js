import React from "react"
import styled from "styled-components"

import {useNarrow} from "../../styles/useMedia"
import ImgTextBtn from "../../components/ImgTextBtn"

import {videoState} from "../../recoil/HomeState"

import {useRecoilValue, useSetRecoilState, useRecoilState} from "recoil"
import {BtnDataState, sideMenuOpenState, mainState} from "../../recoil/HeaderNavState"

const SideMenuSimple = styled.nav`
    width: 80px;
    margin-top: 70px;
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #181818;
`
const SideMenuDetail = styled.nav`
    width: 240px;
    height: 1500px;
    margin-top: 83px;
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #181818;
    overflow-y: scroll;
    z-index: 2;
`

const Nav=()=>{
    //mediaquery
    let isNarrow=useNarrow()
    //data
    const sidemenuData=[
        {   "id":"0",
            "img":"/img/sideMenuIcon0.png",
            "txt":"홈",
        },
        {   "id":"1",
            "img":"/img/sideMenuIcon1.png",
            "txt":"shorts",
        },
        {   "id":"2",
            "img":"/img/sideMenuIcon2.png",
            "txt":"구독",
        },
        {   "id":"3",
            "img":"/img/sideMenuIcon3.png",
            "txt":"보관함",
        }
    ]
    //state
    const sideMenuOpenValue = useRecoilValue(sideMenuOpenState)
    const setMainState = useSetRecoilState(mainState)
    const [isVideoValue, setIsVideoState]=useRecoilState(videoState)
    //event
    const videoPageMoveEvent=()=>{
        isVideoValue ? setIsVideoState(false) :  setIsVideoState(true)
    }

    const sideMenuBtnEvent=()=>{

        const target=event.target.id

        const sideMenuBtn=(mainState)=>{
            setMainState(mainState)
        }
    
        switch(target){
            case "0":
                sideMenuBtn("home")
                videoPageMoveEvent()
                break
            case "1":
                sideMenuBtn("shorts")
                break
            case "2":
                sideMenuBtn("subscribe")
                break
            case "3":
                sideMenuBtn("storage")
                break
        }
    }

    return (
        sideMenuOpenValue
        ?
            <SideMenuDetail onClick={sideMenuBtnEvent}>
            {
                sidemenuData.map((value)=>{
                    return <ImgTextBtn position="SideMenuDetail" imgPosition="SideMenuDetail" pPosition="SideMenuDetail" data={value}/>
                })
            }  
            </SideMenuDetail>
        :
            isNarrow
            &&
                (
                isVideoValue
                ?
                null
                :
                <SideMenuSimple onClick={sideMenuBtnEvent}>
                    {
                        sidemenuData.map((value)=>{
                            return <ImgTextBtn position="SideMenuSimple" imgPosition="SideMenuSimple" pPosition="SideMenuSimple" data={value}/>
                            
                        })
                    }  
                </SideMenuSimple>
                )
    )
}

export default Nav