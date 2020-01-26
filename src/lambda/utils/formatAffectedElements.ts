import { parseSchoolClass } from './parseSchoolClass'
import { sortSchoolClasses } from './sortSchoolClasses'

const formatAffectedElements = (affectedElements: string[]): string[] =>
	affectedElements.map(parseSchoolClass).sort(sortSchoolClasses)

export { formatAffectedElements }
