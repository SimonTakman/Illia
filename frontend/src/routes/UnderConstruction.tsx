import React from 'react';
import { TabBar } from '../components/TabBar';
import { Construction } from '../icons/Construction';
import {Wrapper, Title} from './UnderConstruction.styles'
export const UnderConstruction = (props:any) => {
	return (<Wrapper>
		<Construction></Construction>
		<Title>Under Construction</Title>
		<TabBar />
	</Wrapper>)
}