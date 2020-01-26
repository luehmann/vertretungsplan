import { Day } from '../../model/Day'
import { Payload } from '../../model/Payload'
import { formatAffectedElements } from './formatAffectedElements'
import { formatDate } from './formatDate'
import { formatEntries } from './formatEntries'
import { formatMessages } from './formatMessages'

const parsePayload = (payload: Payload): Day => ({
	weekday: payload.payload.weekDay,
	date: formatDate(payload.payload.date),
	affectedElements: formatAffectedElements(
		payload.payload.affectedElements[1]
	),
	messages: formatMessages(payload.payload.messageData.messages),
	entries: formatEntries(payload.payload.rows),
})

export { parsePayload }
