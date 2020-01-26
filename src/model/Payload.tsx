export interface Payload {
	payload: {
		importInProgress: null
		date: number
		nextDate: number
		showingNextDate: boolean
		rows: PayloadRow[]
		lastUpdate: string
		absentElements: null
		affectedElements: {
			1: string[]
		}
		messageData: {
			messages: PayloadMessage[]
		}
		weekDay: string
		regularFreeData: null
	}
}

export interface PayloadRow {
	data: {
		0: string
		1: string
		2: string
		3: string
		4: string
		5: string
		6: string
		7: string
	}
	cssClasses: string[]
	cellClasses: string[][]
	group: string
}

export interface PayloadMessage {
	subject: ''
	body: string
}
