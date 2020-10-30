import React from 'react'
import { Button} from './RoundButton.styles' 

export const RoundButton = (props:any) => {
	const { label, onClick } = props

    return <Button onClick={onClick}>{label}</Button>
}