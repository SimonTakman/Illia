import React from 'react'
import { Link } from 'react-router-dom'
import { RoundButton } from '../components/RoundButton'
import { TabBar } from '../components/TabBar'
import {Wrapper} from './Help.styles'
export const Help = (props: any) => {
	return (
		<Wrapper>
			<Link to="/"><RoundButton label={"Sign out"}/></Link>
			<TabBar />
		</Wrapper>
	)
}