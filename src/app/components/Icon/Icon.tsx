import { bemModule } from '@jahed/bem'
import React, { StatelessComponent } from 'react'
import arrow from '../../img/arrow-right.svg'
import check from '../../img/check.svg'
import refresh from '../../img/refresh.svg'
import x from '../../img/x.svg'
import styles from './Icon.module.scss'

const bem = bemModule(styles)

class IconType {
	public static ARROW = arrow
	public static REFRESH = refresh
	public static CHECK = check
	public static X = x
}

type Props = React.DetailedHTMLProps<
	React.ImgHTMLAttributes<HTMLImageElement>,
	HTMLImageElement
> & {
	type: string
}

const Icon: StatelessComponent<Props> = ({ type, className, ...props }) => (
	<div
		className={[bem('icon'), className].join(' ')}
		style={{ backgroundImage: `url(${type})` }}
		{...props}
	/>
)

export { IconType, Icon }
