import { useState } from 'react'
import { Nullable } from '../../model/Nullable'

const ACTIVE_CLASS_KEY: string = 'activeClass'

const useActiveClass = (
	affectedElements: string[]
): [Nullable<string>, (activeClass: Nullable<string>) => void] => {
	let defaultState: Nullable<string> = localStorage.getItem(ACTIVE_CLASS_KEY)
	if (!affectedElements.includes(defaultState!)) {
		defaultState = null
	}
	const [state, setState] = useState<Nullable<string>>(defaultState)

	const setActiveClass = (activeClass: Nullable<string>) => {
		if (activeClass == null) {
			localStorage.removeItem(ACTIVE_CLASS_KEY)
		} else {
			localStorage.setItem(ACTIVE_CLASS_KEY, activeClass)
		}
		setState(activeClass)
	}

	return [state, setActiveClass]
}

export { useActiveClass }
