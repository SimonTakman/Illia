import React from 'react'
import { ButtonStyle } from './Button.styles'
export const Button = (props: any) => {
    const { label, onClick } = props

    return <ButtonStyle onClick={onClick}>{label}</ButtonStyle>
}

export default Button
