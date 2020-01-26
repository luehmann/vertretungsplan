const sortSchoolClasses = (a: string, b: string): number => {
	const aNumber: number = parseInt(a, 10)
	const bNumber: number = parseInt(b, 10)
	if (aNumber < bNumber) {
		return -1
	}
	if (aNumber > bNumber) {
		return 1
	}
	const aLetter: string = a.replace(aNumber.toString(), '')
	const bLetter: string = b.replace(bNumber.toString(), '')
	if (aLetter < bLetter) {
		return -1
	}
	if (aLetter > bLetter) {
		return 1
	}
	return 0
}

export { sortSchoolClasses }
