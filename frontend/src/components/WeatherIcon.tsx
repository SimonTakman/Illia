import React from 'react'
import {IconWrapper, Wrapper, Title} from './WeatherIcon.styles'
export const WeatherIcon = (props:any) => {
return <Wrapper><IconWrapper>{props.children}</IconWrapper><Title>{props.title}</Title></Wrapper>
}