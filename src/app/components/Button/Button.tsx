import { bemModule, join } from '@jahed/bem'
import React, { FunctionComponent } from 'react'
import styles from './Button.module.scss'

const bem = bemModule(styles)

type Props = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {}

const Button: FunctionComponent<Props> = ({
	className,
	children,
	disabled,
	...props
}) => {
	return (
		<button
			className={join(bem('button', { disabled }), className)}
			{...props}
		>
			{children}
		</button>
	)
}

export { Button }
