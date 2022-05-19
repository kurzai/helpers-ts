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

    it("should count the weekdays", () => {
        const mon1 = new Date("2022-05-16")
        const sat1 = new Date("2022-05-21")
        const sun1 = new Date("2022-05-22")
        const mon2 = new Date("2022-05-23")
        const sat2 = new Date("2022-05-28")
        const sun2 = new Date("2022-05-29")

        expect(weekdaysBetween(mon1, mon1)).toBe(1)
        expect(weekdaysBetween(mon1, sat1)).toBe(5)
        expect(weekdaysBetween(sat1, sun1)).toBe(0)
        expect(weekdaysBetween(sat1, mon2)).toBe(1)
        expect(weekdaysBetween(sun1, sun1)).toBe(0)
        expect(weekdaysBetween(mon1, mon2)).toBe(6)

        expect(weekdaysBetween(mon1, sat2)).toBe(10)
        expect(weekdaysBetween(mon1, sat2)).toBe(10)
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
