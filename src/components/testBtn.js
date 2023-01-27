
import React from "react"

import styled, { css } from "styled-components"

import {Button} from "../styles/Button"

// ========================================== //

const TestBtn=(props)=>{
    const {data, ...value} = props

 	return(
        <Button style={value}>
             ddd
        </Button>
	)
}

export default TestBtn


  
