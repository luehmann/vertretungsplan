import { bemModule } from '@jahed/bem'
import React, { StatelessComponent } from 'react'
import styles from './Typography.module.scss'

const bem = bemModule(styles)

type HeadlineProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>

const PrimaryHeadline: StatelessComponent<HeadlineProps> = ({
	className,
	children,
	...props
}) => (
	<h1 className={[bem('primary-headline'), className].join(' ')} {...props}>
		{children}
	</h1>
)

const SecondaryHeadline: StatelessComponent<HeadlineProps> = ({
	className,
	children,
	...props
}) => (
	<h2 className={[bem('secondary-headline'), className].join(' ')} {...props}>
		{children}
	</h2>
)

type LinkProps = React.DetailedHTMLProps<
	React.AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>

const Link: StatelessComponent<LinkProps> = ({
	className,
	children,
	...props
}) => (
	<a className={[bem('link'), className].join(' ')} {...props}>
		{children}
	</a>
)

export { PrimaryHeadline, SecondaryHeadline, Link }
