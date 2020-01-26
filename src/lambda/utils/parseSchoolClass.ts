const parseSchoolClass = (schoolClass: string): string =>
	schoolClass.replace('Jg', '')

export { parseSchoolClass }
