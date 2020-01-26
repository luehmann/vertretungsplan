import { bemModule } from '@jahed/bem/lib/bemModule'
import React, { StatelessComponent } from 'react'
import styles from './Layout.module.scss'

const bem = bemModule(styles)

const Content: StatelessComponent<React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>> = ({ className, ...props }) => (
	<div className={[bem('content'), className].join(' ')}>
		{props.children}
	</div>
)

const RemainingSpace: StatelessComponent = () => (
	<div className={bem('remaining-space')}></div>
)

export { Content, RemainingSpace }
