import React, { FunctionComponent } from 'react'
import { ListItemDetail } from '../../List/List'
import { DetailProps } from '../DetailProps'

const TimeDetail: FunctionComponent<DetailProps> = ({ entry, forceShow }) => (
	<ListItemDetail shown={forceShow}>{entry.time}</ListItemDetail>
)

export { TimeDetail }
