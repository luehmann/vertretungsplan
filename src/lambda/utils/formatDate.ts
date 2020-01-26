const formatDate = (date: number): string => {
	const dateString = date.toString()
	return `${dateString.substr(6, 2)}.${dateString.substr(
		4,
		2
	)}.${dateString.substr(0, 4)}`
}

export { formatDate }
