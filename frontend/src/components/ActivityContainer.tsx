import React from 'react'
import { ActivityCard } from './ActivityCard'
import {Wrapper, Title, ActivtyCardList} from './ActivityContainer.styles'
export const ActivityContainer = (props:any) => {
	return <Wrapper>
		<Title>Activities for today</Title>
		<ActivtyCardList>
		<ActivityCard title={"Go out in the sun before lunch"} description={"The morning sun light is extra potent and will recharge your levels of Vitamin D"} stars={1} durationStart={1} durationEnd={30}></ActivityCard>
		<ActivityCard title={"Talk to someone you care about"} description={"Close relationships is important for your mental well being"} durationStart={1} durationEnd={60} stars={2} cardColor={"#FF8A34"}></ActivityCard>
		<ActivityCard title={"Make a snowman"} description={"Physical activities gives you endorfines which is the hormone which gives you joy"} durationStart={20} durationEnd={90} stars={3} cardColor={"#FF464F"}></ActivityCard>
		</ActivtyCardList>
	</Wrapper>
}