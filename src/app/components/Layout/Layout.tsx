import { bemModule, join } from '@jahed/bem'
import React, { StatelessComponent } from 'react'
import styles from './Layout.module.scss'

const bem = bemModule(styles)

const Content: StatelessComponent<React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>> = ({ className, ...props }) => (
	<div className={join(bem('content'), className)}>{props.children}</div>
)

const RemainingSpace: StatelessComponent = () => (
	<div className={bem('remaining-space')}></div>
)

export { Content, RemainingSpace }
