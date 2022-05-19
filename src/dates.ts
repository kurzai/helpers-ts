
const daysBetween = (s: Date, e: Date): number => {
	return Math.floor((e.getTime() - s.getTime()) / 86400000);
};

export const wholeDaysBetween = (s: Date, e: Date): number => {
	s = new Date(s);
	e = new Date(e);

	s.setHours(0, 0, 0, 0);
	e.setHours(0, 0, 0, 0);

	return daysBetween(s, e);
};

export const weekdaysBetween = (s: Date, e: Date): number => {
	const diffDays = daysBetween(s, e);
	const weeksBetween = Math.floor(diffDays / 7);

	let adjust;
	if (s.getDay() == e.getDay()) {
		adjust = 0;
	} else if (s.getDay() == 0 && e.getDay() == 6) {
		adjust = 5;
	} else if (s.getDay() == 6 && e.getDay() == 0) {
		adjust = 0;
	} else if (e.getDay() == 6 || e.getDay() == 0) {
		adjust = 5 - s.getDay();
	} else if (s.getDay() == 0 || s.getDay() == 6) {
		adjust = e.getDay();
	} else if (e.getDay() > s.getDay()) {
		adjust = e.getDay() - s.getDay();
	} else {
		adjust = 5 + e.getDay() - s.getDay();
	}
	return weeksBetween * 5 + adjust;
};

export const constructHistogramFrequency = (dates: Date[]): Map<Date, number> => {
	const result = new Map()

	dates.forEach(date => {
		const day: string = date.toISOString().split("T")[0];
		const current = result.get(day) || 0
		result.set(day, current + 1)
	})

	return result
}
