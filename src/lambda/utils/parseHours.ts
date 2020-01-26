const parseHours = (hours: string) => hours.replace(/(\d+)/g, '$1.') + ' Stunde'

export { parseHours }
