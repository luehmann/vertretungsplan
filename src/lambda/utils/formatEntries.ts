import { Entry } from '../../model/Entry'
import { PayloadRow } from '../../model/Payload'
import { SchoolClass } from '../../model/SchoolClass'
import { getHash } from './getHash'
import { getSubject } from './getSubject'
import { optionalTeacher } from './optionalTeacher'
import { praseFromBrackets } from './parseFromBrackets'
import { parseHours } from './parseHours'
import { parseSchoolClass } from './parseSchoolClass'
import { parseTime } from './parseTime'
import { prefixRoom } from './prefixRoom'
import { sortSchoolClasses } from './sortSchoolClasses'
import { stripHtml } from './stripHtml'

const formatEntries = (rows: PayloadRow[]): SchoolClass[] => {
	rows = rows.sort((a, b) =>
		sortSchoolClasses(parseSchoolClass(a.group), parseSchoolClass(b.group))
	)

	const schoolClassIndices: {
		[key: string]: number
	} = {}
	let index = 0

	const entries: SchoolClass[] = []

	for (const row of rows) {
		const schoolClass: string = parseSchoolClass(row.group)
		const entry: Entry = {
			schoolClass,
			subject: getSubject(row.data[3]) + optionalTeacher(row),
			hours: parseHours(row.data[0]),
			time: parseTime(row.data[1]),
			teacher: praseFromBrackets(row.data[5]),
			room: praseFromBrackets(row.data[4]).map(prefixRoom),
			type:
				stripHtml(row.data[6]).replace('Raumänderung', '') ||
				undefined,
			info: stripHtml(row.data[7]) || undefined,
			hash: getHash(
				row.group + ((row.data as unknown) as string[]).join()
			),
		}
		if (!Object.keys(schoolClassIndices).includes(schoolClass)) {
			entries.push({
				schoolClass,
				entries: [],
			})
			schoolClassIndices[schoolClass] = index
			index++
		}
		entries[schoolClassIndices[schoolClass]].entries.push(entry)
	}

	return entries
}

export { formatEntries }
