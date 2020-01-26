interface Subjects {
	[key: string]: string
}

const subjects: Subjects = {
	Bio: 'Biologie',
	Ch: 'Chemie',
	Cho: 'Chor',
	Deu: 'Deutsch',
	Eng: 'Englisch',
	Fra: 'Französich',
	Frz: 'Französich',
	Ge: 'Geschichte',
	Geo: 'Geographie',
	Gri: 'Griechisch',
	KOrc: 'Klassenorchester',
	Kun: 'Kunst',
	Lat: 'Latein',
	Mat: 'Mathe',
	Mus: 'Musik',
	Orc: 'Orchester',
	Phi: 'Philosophie',
	Phy: 'Physik',
	Rat: 'Klassenrat',
	Rel: 'Religion',
	Spo: 'Sport',
	SpT: 'Sporttheorie',
}

const getSubject = (abbreviation: string): string => {
	if (abbreviation[0] === 'S') {
		const subject = subjects[abbreviation.substr(1)]
		if (subject !== undefined) {
			return `${subject} Seminar`
		}
	}
	return subjects[abbreviation] ?? abbreviation
}

export { getSubject }
