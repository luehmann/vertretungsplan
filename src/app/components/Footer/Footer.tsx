import { bemModule } from '@jahed/bem'
import React, { StatelessComponent } from 'react'
import { version } from '../../../../package.json'
import { Content } from '../Layout/Layout'
import { Link } from '../Typography/Typography'
import styles from './Footer.module.scss'

const bem = bemModule(styles)

interface Props {
	lastUpdate: string
}

const Footer: StatelessComponent<Props> = ({ lastUpdate }) => (
	<Content className={bem('footer')}>
		<span className={bem('last-update')}>
			<strong>Stand: </strong>
			{lastUpdate}
		</span>
		<div className={bem('links')}>
			<Link
				href="https://github.com/philippluehmann/vertretungsplan"
				target="_blank"
			>
				GitHub
			</Link>
			<span>Version {version}</span>
		</div>
	</Content>
)

export { Footer }
