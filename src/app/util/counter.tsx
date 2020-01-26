const counter = async (time: number): Promise<void> =>
	new Promise(resolve => setTimeout(resolve, time))

export { counter }
