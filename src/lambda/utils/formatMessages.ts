import { PayloadMessage } from '../../model/Payload'
import { stripHtml } from './stripHtml'

const formatMessages = (payloadMessages: PayloadMessage[]): string[] =>
	payloadMessages.map(payloadMessage =>
		stripHtml(payloadMessage.body.replace(/<br>/g, '\n'))
	)

export { formatMessages }
