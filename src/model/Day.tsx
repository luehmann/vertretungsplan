import { SchoolClass } from './SchoolClass'

export interface Day {
	weekday: string
	date: string
	affectedElements: string[]
	messages: string[]
	entries: SchoolClass[]
}
