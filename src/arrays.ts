
export function last<T>(arr: T[]): T | undefined {
	return arr[arr.length-1]
}

export function sortAsc<T>(arr: T[]): T[] {
	return arr.sort((a, b) => {
		if (a < b) return -1
		else if (a > b) return 1
		return 0
	})
}
export function sortDesc<T>(arr: T[]): T[] {
	return arr.sort((a, b) => {
		if (a < b) return 1
		else if (a > b) return -1
		return 0
	})
}
