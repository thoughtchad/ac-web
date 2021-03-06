import React, { PropTypes } from 'react'
import Icon from './Icon'
import { pure } from 'recompose'

function Play({ inverse = false, ...props }) {
	return (
		<Icon {...props}>
			<path d='M8 5v14l11-7z' fill={inverse ? 'white' : 'black'} />
		    <path d='M0 0h24v24H0z' fill='none'/>
		</Icon>
	)
}
export default pure(Play)
