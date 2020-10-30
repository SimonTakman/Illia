import React from 'react'
import { Wrapper } from './TabBar.styles'
import {Calendar} from '../icons/Calendar'
import {Morning} from '../icons/Morning'
import {Evening} from '../icons/Evening'
import {Help} from '../icons/Help'
import {TabItem} from './TabItem'
export const TabBar = (props: any) => {

    return <Wrapper>
        <TabItem route={"/morning"} text="Morning"><Morning/></TabItem>
        <TabItem route={"/evening"} text="Evening"><Evening/></TabItem>
        <TabItem route={"/calendar"} text="Calendar"><Calendar/></TabItem>
        <TabItem route={"/help"} text="Help"><Help/></TabItem>
    </Wrapper>
}

export default TabBar
