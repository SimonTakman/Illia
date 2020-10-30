import React from 'react'
import {Wrapper, RoundButtonWrapper} from './GetStarted.styles'
import {SplashScreen} from '../icons/SplashScreen'
import { RoundButton } from '../components/RoundButton'
import {Link} from 'react-router-dom'

export const GetStarted = (props:any) => {
	return (<Wrapper><SplashScreen></SplashScreen><Link to="/morning">
	<RoundButtonWrapper><RoundButton label={"Get Started"} /></RoundButtonWrapper>
</Link></Wrapper>)
}