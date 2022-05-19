import { wholeDaysBetween, weekdaysBetween, constructHistogramFrequency } from "../src/dates"

describe("dates", () => {
    it("should count the days between monday and tuesday", () => {
        const mon = new Date("2020-08-23")
        const wed = new Date("2020-08-25")
        expect(wholeDaysBetween(mon, wed)).toBe(2)
    })
    it("should count the days between monday and tuesday with different times", () => {
        const mon = new Date("2020-08-23 8:00")
        const wed = new Date("2020-08-25 12:00")
        expect(wholeDaysBetween(mon, wed)).toBe(2)
    })

    it("should count the weekdays in a whole week", () => {
        const mon = new Date("2020-08-23")
        const sat = new Date("2020-08-28")
        const sun = new Date("2020-08-29")

        expect(weekdaysBetween(mon, sat)).toBe(5)
        expect(weekdaysBetween(mon, sun)).toBe(5)
    })

    it("should construct a histogram frequency", () => {
        const dates = [
            new Date("2020-08-01 2:00"),
            new Date("2020-08-01 4:00"),
            new Date("2020-08-01 6:00"),
            new Date("2020-08-01 8:00"),
            new Date("2020-08-01 10:00"),
            new Date("2020-08-02 2:00"),
            new Date("2020-08-02 4:00"),
            new Date("2020-08-02 6:00"),
            new Date("2020-08-03 8:00"),
            new Date("2020-08-03 10:00"),
        ]
        const histogram = constructHistogramFrequency(dates)

        const keys = Array.from(histogram.keys())
        const values = Array.from(histogram.values())

        expect(histogram.size).toBe(3)
        expect(keys).toEqual(["2020-08-01", "2020-08-02", "2020-08-03"])
        expect(values).toContain(5)
        expect(values).toContain(3)
        expect(values).toContain(2)
    })
})
