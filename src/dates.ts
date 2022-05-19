
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
	let count = 0;
	const curDate = new Date(s.getTime());
	while (curDate <= e) {
		const dayOfWeek = curDate.getDay();
		if(dayOfWeek !== 0 && dayOfWeek !== 6) count++;
		curDate.setDate(curDate.getDate() + 1);
	}
	return count;
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
