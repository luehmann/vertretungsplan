import { bemModule } from '@jahed/bem'
import React, { FunctionComponent, useContext } from 'react'
import { Day } from '../../../model/Day'
import { Nullable } from '../../../model/Nullable'
import { AppContext } from '../../context/AppContext'
import { Button } from '../Button/Button'
import { Content } from '../Layout/Layout'
import styles from './NoEntries.module.scss'

const bem = bemModule(styles)

interface Props {
	day: Day
}

const NoEntries: FunctionComponent<Props> = ({ day }) => {
	const { activeClass, setActiveClass } = useContext(AppContext)

	let message: Nullable<string> = null

	if (day.entries.length === 0) {
		message = `Keine Einträge am ${day.weekday}`
	}

	if (
		activeClass !== null &&
		day.entries.filter(entry => entry.schoolClass === activeClass)
			.length === 0
	) {
		message = `Keine Einträge für ${activeClass} am ${day.weekday}`
	}

	if (message == null) {
		return null
	}
	return (
		<Content className={bem('no-entries')}>
			<p className={bem('message')}>{message}</p>
			<Button
				className={bem('button')}
				onClick={() => setActiveClass(null)}
			>
				Alle anzeigen
			</Button>
		</Content>
	)
}

export { NoEntries }
