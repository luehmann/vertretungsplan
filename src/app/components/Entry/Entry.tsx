import React, { FunctionComponent, useContext } from 'react'
import { Entry as IEntry } from '../../../model/Entry'
import { AppContext } from '../../context/AppContext'
import { ListItem, ListItemContent, ListItemDetails } from '../List/List'
import { InfoDetail } from './details/InfoDetail'
import { RoomDetail } from './details/RoomDetail'
import { TeacherDetail } from './details/TeacherDetail'
import { TimeDetail } from './details/TimeDetail'
import { TypeDetail } from './details/TypeDetail'

interface Props {
	entry: IEntry
}

const Entry: FunctionComponent<Props> = ({ entry }) => {
	const { setActiveEntry, activeEntry } = useContext(AppContext)
	const forceShow = activeEntry === entry.hash
	return (
		<ListItem
			clickable
			onClick={() => setActiveEntry(forceShow ? null : entry.hash)}
		>
			<ListItemContent
				primaryText={entry.subject}
				secondaryText={entry.hours}
			/>
			<ListItemDetails>
				<TeacherDetail entry={entry} forceShow={forceShow} />
				{!!entry.room.length && (
					<RoomDetail entry={entry} forceShow={forceShow} />
				)}
				<TypeDetail entry={entry} forceShow={forceShow} />
				<InfoDetail entry={entry} forceShow={forceShow} />
				<TimeDetail entry={entry} forceShow={forceShow} />
			</ListItemDetails>
		</ListItem>
	)
}

export { Entry }
