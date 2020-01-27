import { bemModule, join } from '@jahed/bem'
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
	<h1 className={join(bem('primary-headline'), className)} {...props}>
		{children}
	</h1>
)

const SecondaryHeadline: StatelessComponent<HeadlineProps> = ({
	className,
	children,
	...props
}) => (
	<h2 className={join(bem('secondary-headline'), className)} {...props}>
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
	<a className={join(bem('link'), className)} {...props}>
		{children}
	</a>
)

export { PrimaryHeadline, SecondaryHeadline, Link }
