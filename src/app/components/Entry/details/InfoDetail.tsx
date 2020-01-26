import React, { FunctionComponent } from 'react'
import { ListItemDetail } from '../../List/List'
import { DetailProps } from '../DetailProps'

const InfoDetail: FunctionComponent<DetailProps> = ({ entry, forceShow }) =>
	entry.info ? <ListItemDetail>{entry.info}</ListItemDetail> : null

export { InfoDetail }
