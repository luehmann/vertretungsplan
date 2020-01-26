import { APIGatewayEvent, Context } from 'aws-lambda'
import { Data } from '../model/Data'
import { Day } from '../model/Day'
import { Payload } from '../model/Payload'
import { getData } from './utils/getData'
import { getDate } from './utils/getDate'
import { parsePayload } from './utils/parsePayload'

interface DataResponse {
	statusCode: number
	body: string
}

const handler = async (
	event: APIGatewayEvent,
	context: Context
): Promise<DataResponse> => {
	// const lastUpdate = event?.queryStringParameters?.lastUpdate

	const daysToShow: number = 2
	const date: number = getDate()

	const requests: Promise<Payload>[] = []
	for (let dateOffset = 0; dateOffset < daysToShow; dateOffset++) {
		requests.push(getData(date, dateOffset))
	}

	const payloads: Payload[] = await Promise.all(requests)

	const days: Day[] = payloads.map(parsePayload)

	const lastUpdate = payloads[0].payload.lastUpdate

	const data: Data = {
		days,
		lastUpdate,
	}

	return {
		statusCode: 200,
		body: JSON.stringify(data),
	}
}

export { handler }
