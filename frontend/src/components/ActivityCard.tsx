import React from 'react'
import { Star } from '../icons/Star';
import {Title, Duration, Description, StarList, Wrapper} from './ActivityCard.styles'

export const ActivityCard = (props:any) => {
	let stars = [];
	for(let i = 0; i < props.stars; i++){
		stars.push(<Star/>)
	}
	return (<Wrapper cardColor={props.cardColor}>
		<Title>{props.title}</Title>
	<Duration>{props.durationStart} - {props.durationEnd} minutes</Duration>
	<Description>{props.description}</Description>
	<StarList>{stars}</StarList>
	</Wrapper>)
}