import React from 'react'
import {AboutProps} from './types'
import { Wrapper } from './About.styles'

export const About = (props: AboutProps) => {
    const { title } = props
    return (
        <Wrapper>{title}</Wrapper>
    )
}

export default About
 
