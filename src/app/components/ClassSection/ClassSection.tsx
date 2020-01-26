import React, { FunctionComponent, useContext } from 'react'
import { SchoolClass } from '../../../model/SchoolClass'
import { AppContext } from '../../context/AppContext'
import { Entry } from '../Entry/Entry'
import { ListGroup, ListGroupTitle } from '../List/List'

interface Props {
	schoolClass: SchoolClass
}

const ClassSection: FunctionComponent<Props> = ({ schoolClass }) => {
	const { activeClass } = useContext(AppContext)
	return (
		<ListGroup
			hidden={!!activeClass && activeClass !== schoolClass.schoolClass}
		>
			<ListGroupTitle>{schoolClass.schoolClass}</ListGroupTitle>
			{schoolClass.entries.map(entry => (
				<Entry entry={entry} key={entry.hash} />
			))}
		</ListGroup>
	)
}

export { ClassSection }
