import { useEffect, useState } from 'react'
import { Data } from '../../model/Data'
import { Nullable } from '../../model/Nullable'
import { counter } from './../util/counter'

interface DataHook {
	data: Data
	refresh: () => Promise<void>
	isRefreshing: boolean
	error: Nullable<string>
}

const DATA_KEY: string = 'data'

const useData = (): DataHook => {
	const localStorageData = localStorage.getItem(DATA_KEY)
	const defaultData: Data = localStorageData
		? JSON.parse(localStorageData)
		: {
				days: [],
				lastUpdate: '',
		  }
	const [data, setData] = useState<Data>(defaultData)
	const [isRefreshing, setIsRefreshing] = useState<boolean>(false)
	const [error, setError] = useState<Nullable<string>>(null)

	const refresh = async () => {
		setIsRefreshing(true)
		try {
			const delay = counter(10000)
			const request = fetch('/.netlify/functions/data')
			const response = await Promise.race([delay, request])
			if (response === undefined) {
				throw new Error()
			}
			if (!response.ok) {
				throw new Error()
			}
			const newData: Data = await response.json()
			localStorage.setItem(DATA_KEY, JSON.stringify(newData))
			setData(newData)
			setError(null)
			setIsRefreshing(false)
		} catch (error) {
			setError('Daten konnten nicht geladen werden')
			setIsRefreshing(false)
			return Promise.reject()
		}
	}

	useEffect(() => {
		refresh()
	}, [])

	return { data, refresh, isRefreshing, error }
}

export { useData }
