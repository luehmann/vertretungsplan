import { DateTime } from 'luxon'

const getDate = (): number => {
	const { year, month, day } = DateTime.local().setZone('Europe/Berlin')
	return year * 10000 + month * 100 + day
}

export { getDate }
