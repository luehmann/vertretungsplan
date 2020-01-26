import React, { FunctionComponent } from 'react'
import { Entry } from '../../../../model/Entry'
import { ChangeableList } from '../../ChangeableList/ChangeableList'
import { ListItemDetail } from '../../List/List'
import { DetailProps } from '../DetailProps'

const shouldShow = (entry: Entry): boolean =>
	entry.room.some(changeable => changeable.previous !== undefined) &&
	!entry.room.every(({ effective, previous }) => effective === previous)

const RoomDetail: FunctionComponent<DetailProps> = ({ entry, forceShow }) => (
	<ListItemDetail shown={forceShow || shouldShow(entry)}>
		<ChangeableList changeables={entry.room} />
	</ListItemDetail>
)

export { RoomDetail }
