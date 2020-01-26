import { bemModule } from '@jahed/bem'
import React, { FunctionComponent, ReactNode, StatelessComponent } from 'react'
import styles from './List.module.scss'

const bem = bemModule(styles)

export const List: FunctionComponent = props => {
	return <div className={bem('list')}>{props.children}</div>
}

type ListGroupProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	hidden?: boolean
}

export const ListGroup: FunctionComponent<ListGroupProps> = ({
	children,
	hidden,
	...props
}) => {
	return (
		<div className={bem('group', { hidden })} {...props}>
			{children}
		</div>
	)
}
export const ListGroupTitle: FunctionComponent = props => {
	return <div className={bem('group-title')}>{props.children}</div>
}

type ListItemProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	clickable?: boolean
}
export const ListItem: FunctionComponent<ListItemProps> = ({
	children,
	clickable,
	...props
}) => {
	return (
		<div className={bem('item', { clickable })} {...props}>
			<div className={bem('item__inner')}>{children}</div>
		</div>
	)
}

type ListItemContentProps = {
	primaryText?: ReactNode
	secondaryText?: ReactNode
	growing?: boolean
}

export const ListItemContent: FunctionComponent<ListItemContentProps> = ({
	children,
	growing,
	primaryText,
	secondaryText,
	...props
}) => {
	return (
		<div className={bem('item-content', { growing })}>
			{primaryText && (
				<div className={bem('item-content__primary')}>
					{primaryText}
				</div>
			)}
			{secondaryText && (
				<div className={bem('item-content__secondary')}>
					{secondaryText}
				</div>
			)}
		</div>
	)
}

export const ListItemDetails: FunctionComponent = props => {
	return <div className={bem('item-details')}>{props.children}</div>
}

type ListItemDetailProps = {
	shown?: boolean
}

export const ListItemDetail: StatelessComponent<ListItemDetailProps> = ({
	shown,
	children,
}) => {
	return (
		<div className={bem('item-detail', { shown: shown ?? true })}>
			{children}
		</div>
	)
}
