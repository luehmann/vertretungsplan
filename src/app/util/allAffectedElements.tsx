import { Day } from '../../model/Day'

const allAffectedElements = (data: Day[]) => [
	...new Set(data.map(day => day.affectedElements).flat()),
]
export { allAffectedElements }
