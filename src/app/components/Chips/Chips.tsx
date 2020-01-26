import { bemModule } from '@jahed/bem/lib/bemModule'
import React, { StatelessComponent } from 'react'
import styles from './Chips.module.scss'

const bem = bemModule(styles)

type ChipListProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	wrapLines?: boolean
	scrollable?: boolean
}

export const ChipList: StatelessComponent<ChipListProps> = ({
	children,
	wrapLines,
	scrollable,
	...props
}) => {
	return (
		<div className={bem('chip-list', { wrapLines, scrollable })} {...props}>
			{children}
		</div>
	)
}

type ChipProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	active?: boolean
}
export const Chip: StatelessComponent<ChipProps> = ({
	children,
	active,
	...props
}) => {
	return (
		<div className={bem('chip', { active })} {...props}>
			{children}
		</div>
	)
}
