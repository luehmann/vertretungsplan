import { bemModule } from '@jahed/bem'
import React, { FunctionComponent } from 'react'
import { Day } from '../../../model/Day'
import { ClassSection } from '../ClassSection/ClassSection'
import { DayOverview } from '../DayOverview/DayOverview'
import {
	List,
	ListGroup,
	ListGroupTitle,
	ListItem,
	ListItemContent,
} from '../List/List'
import { NoEntries } from '../NoEntries/NoEntries'
import cssModule from './DaySection.module.scss'

interface Props {
	day: Day
}

const bem = bemModule(cssModule)

const DaySection: FunctionComponent<Props> = ({ day }) => {
	return (
		<div className={bem('day-section')}>
			<DayOverview day={day} />
			<List>
				{day.messages.length !== 0 && (
					<ListGroup>
						<ListGroupTitle>i</ListGroupTitle>
						{day.messages.map(message => (
							<ListItem key={message}>
								<ListItemContent
									primaryText={message}
									growing
								/>
							</ListItem>
						))}
					</ListGroup>
				)}
				{day.entries.map(schoolClass => (
					<ClassSection
						schoolClass={schoolClass}
						key={schoolClass.schoolClass}
					/>
				))}
			</List>
			<NoEntries day={day}></NoEntries>
		</div>
	)
}

export { DaySection }
