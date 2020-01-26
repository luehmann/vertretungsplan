export interface Changeable<T = string> {
	effective: T
	previous?: T
}
