import { bemModule } from '@jahed/bem'
import React, { FunctionComponent, useState } from 'react'
import { Nullable } from '../../../model/Nullable'
import { AppContextProvider } from '../../context/AppContext'
import { useActiveClass } from '../../hooks/useActiveClass'
import { useData } from '../../hooks/useData'
import '../../styles/main.scss'
import { allAffectedElements } from '../../util/allAffectedElements'
import { DaySection } from '../DaySection/DaySection'
import { Footer } from '../Footer/Footer'
import { RemainingSpace } from '../Layout/Layout'
import { PullToRefresh } from '../PullToRefresh/PullToRefresh'
import cssModule from './App.module.scss'

const bem = bemModule(cssModule)

const App: FunctionComponent = () => {
	const { data, refresh, isRefreshing } = useData()
	const [activeClass, setActiveClass] = useActiveClass(
		allAffectedElements(data.days)
	)
	const [activeEntry, setActiveEntry] = useState<Nullable<number>>(null)

	return (
		<AppContextProvider
			value={{
				activeClass,
				setActiveClass,
				activeEntry,
				setActiveEntry,
				isRefreshing,
				refresh,
			}}
		>
			<div className={bem('app')}>
				<PullToRefresh />
				{data.days.map(day => (
					<DaySection day={day} key={day.date}></DaySection>
				))}
				<RemainingSpace />
				<Footer lastUpdate={data.lastUpdate}></Footer>
			</div>
		</AppContextProvider>
	)
}

export { App }
