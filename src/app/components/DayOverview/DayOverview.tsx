import { bemModule } from '@jahed/bem'
import React, { FunctionComponent, useContext } from 'react'
import { Day } from '../../../model/Day'
import { AppContext } from '../../context/AppContext'
import { Chip, ChipList } from '../Chips/Chips'
import { Content } from '../Layout/Layout'
import { PrimaryHeadline, SecondaryHeadline } from '../Typography/Typography'
import cssModule from './DayOverview.module.scss'

interface Props {
	day: Day
}

const bem = bemModule(cssModule)

const DayOverview: FunctionComponent<Props> = ({ day }) => {
	const { activeClass, setActiveClass } = useContext(AppContext)
	return (
		<Content>
			<PrimaryHeadline>{day.weekday}</PrimaryHeadline>
			<SecondaryHeadline>{day.date}</SecondaryHeadline>
			<div className={bem('affected-elements')}>
				<div className={bem('affected-elements__title')}>Klassen:</div>
				<ChipList wrapLines>
					{day.affectedElements.map(affectedElement => (
						<Chip
							key={affectedElement}
							active={activeClass === affectedElement}
							onClick={() =>
								setActiveClass(
									activeClass === affectedElement
										? null
										: affectedElement
								)
							}
						>
							{affectedElement}
						</Chip>
					))}
				</ChipList>
			</div>
		</Content>
	)
}

export { DayOverview }
