import { Changeable } from '../../model/Changeable'
import { stripHtml } from './stripHtml'

const praseFromBrackets = (input: string): Changeable[] =>
	stripHtml(input)
		.split(', ')
		.map(
			(item: string): Changeable => {
				const matchOld = /\(([^)]+)\)/.exec(item)
				if (matchOld) {
					return {
						effective: item.split(' ')[0],
						previous: matchOld[1],
					}
				}
				return { effective: item }
			}
		)
		.filter(element => element.effective !== '')

export { praseFromBrackets }
