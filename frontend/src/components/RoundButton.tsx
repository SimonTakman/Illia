import React from 'react'
import {Wrapper, Button} from './RoundButton.styles' 

export const RoundButton = (props:any) => {
	const { label, onClick } = props

    return <Wrapper><Button onClick={onClick}>{label}</Button></Wrapper>
}