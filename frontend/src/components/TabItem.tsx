import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper, Text } from './TabItem.styles'
export const TabItem = (props: any) => {
    return <Link to={props.route}><Wrapper>
        {props.children}
				<Text>{props.text}</Text>
    </Wrapper></Link>
}

export default TabItem
