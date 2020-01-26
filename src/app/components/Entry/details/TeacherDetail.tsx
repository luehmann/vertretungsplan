import React, { FunctionComponent } from 'react'
import { Entry } from '../../../../model/Entry'
import { ChangeableList } from '../../ChangeableList/ChangeableList'
import { ListItemDetail } from '../../List/List'
import { DetailProps } from '../DetailProps'

const shouldShow = (entry: Entry): boolean =>
	entry.teacher.some(changeable => changeable.previous !== undefined) &&
	!entry.teacher.every(({ effective, previous }) => effective === previous)

const TeacherDetail: FunctionComponent<DetailProps> = ({
	entry,
	forceShow,
}) => (
	<ListItemDetail shown={forceShow || shouldShow(entry)}>
		<ChangeableList changeables={entry.teacher} />
	</ListItemDetail>
)

export { TeacherDetail }
