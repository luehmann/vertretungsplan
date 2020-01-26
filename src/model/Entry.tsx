import { Changeable } from './Changeable'

export interface Entry {
	schoolClass: string
	subject: string
	hours: string
	time: string
	teacher: Changeable[]
	room: Changeable[]
	type?: string
	info?: string
	hash: number
}
