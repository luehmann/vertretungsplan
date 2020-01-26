import { bemModule } from '@jahed/bem'
import React, { Fragment, FunctionComponent } from 'react'
import { Changeable } from '../../../model/Changeable'
import { Icon, IconType } from '../Icon/Icon'
import styles from './ChangeableList.module.scss'

const bem = bemModule(styles)

interface Props {
	changeables: Changeable[]
}

const ChangeableList: FunctionComponent<Props> = ({ changeables }) => (
	<Fragment>
		{changeables.map(({ effective, previous }, index) => (
			<div className={bem('item')} key={effective + previous}>
				{previous && (
					<Fragment>
						<span>{previous}</span>
						<Icon className={bem('icon')} type={IconType.ARROW} />
					</Fragment>
				)}
				{effective}

				{index !== changeables.length - 1 && ', '}
			</div>
		))}
	</Fragment>
)

export { ChangeableList }
