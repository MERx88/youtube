import React from "react"

import Nav from "./pageComponents/nav/Nav"
import Main from "./pageComponents/Main"
import Header from "./pageComponents/header/Header"

import GlobalStyle from "./styles/GlobalStyle"
import Video from "./pageComponents/video/Video"

const App=()=>{

    return (
        <React.Fragment>
            <GlobalStyle/>
            <Header/>
            <Nav/>
            <Main/>
        </React.Fragment>
    )
}

export default App