import { PayloadRow } from '../../model/Payload'
import { parseSchoolClass } from './parseSchoolClass'
import { praseFromBrackets } from './parseFromBrackets'

const optionalTeacher = (row: PayloadRow): string => {
	const grade = parseSchoolClass(row.group)
	if (grade == '11' || grade === '12') {
		const teachers = praseFromBrackets(row.data[5])
		const previousTeachers = teachers.map(teacher => {
			return teacher.previous || teacher.effective
		})
		return ` (${previousTeachers.join(', ')})`
	}
	return ''
}

export { optionalTeacher }
