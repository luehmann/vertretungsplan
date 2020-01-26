import { bemModule } from '@jahed/bem'
import React, {
	FunctionComponent,
	useContext,
	useEffect,
	useState,
} from 'react'
import { AppContext } from '../../context/AppContext'
import { Icon, IconType } from '../Icon/Icon'
import styles from './PullToRefresh.module.scss'

const bem = bemModule(styles)

type Modifier =
	| 'refreshing'
	| 'shown'
	| 'pulled'
	| 'hidden'
	| 'finished'
	| 'failed'

const PullToRefresh: FunctionComponent = () => {
	const { isRefreshing, refresh } = useContext(AppContext)
	const [state, setState] = useState<Modifier>('hidden')

	const modifier: Modifier = isRefreshing ? 'refreshing' : state

	useEffect(() => {
		let isAtTop: boolean = false
		let startY: number = 0
		let isShown: boolean = false
		let isPulled: boolean = false

		const callback = (event: TouchEvent) => {
			let y: number = event.touches[0].screenY

			let difference = y - startY
			if (difference > 15) {
				if (!isShown) {
					setState('shown')
					isShown = true
				}
			} else {
				if (isShown) {
					setState('hidden')
					isShown = false
				}
			}
			if (difference > 80) {
				if (!isPulled) {
					setState('pulled')
					isPulled = true
				}
			} else {
				if (isPulled) {
					setState('shown')
					isPulled = false
				}
			}
		}

		document.body.addEventListener('touchstart', event => {
			isAtTop = window.scrollY <= 0

			startY = event.touches[0].screenY
			callback(event)
		})
		document.body.addEventListener('touchend', event => {
			if (isPulled) {
				refresh()
					.then(() => {
						setState('finished')
						setTimeout(() => {
							if (!isShown) {
								setState('hidden')
							}
						}, 1000)
					})
					.catch(() => {
						setState('failed')
					})
			}
			setState('hidden')
			isAtTop = false
			isPulled = false
			isShown = false
			startY = 0
		})
		document.body.addEventListener('touchmove', event => {
			if (!isAtTop) {
				if (window.scrollY <= 0) {
					isAtTop = true
				} else {
					return
				}
			}
			callback(event)
		})

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div
			className={bem('pull-to-refresh', {
				[modifier]: true,
			})}
		>
			<Icon type={IconType.REFRESH} className={bem('refresh')}></Icon>
			<Icon type={IconType.ARROW} className={bem('arrow')}></Icon>
			<Icon type={IconType.CHECK} className={bem('check')}></Icon>
			<Icon type={IconType.X} className={bem('x')}></Icon>
		</div>
	)
}

export { PullToRefresh }
