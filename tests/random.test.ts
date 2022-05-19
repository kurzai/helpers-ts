import { Randomizer, RandomMode } from "../src/random";

describe("random", () => {
    it("returns normally distributed random numbers between 0 and 1", () => {
        const randomizer = new Randomizer(RandomMode.NORMAL);
        for (let i = 0; i < 10_000; i++) {
            const n = randomizer.random()
            expect(n).toBeGreaterThanOrEqual(0)
            expect(n).toBeLessThanOrEqual(1)
        }
    })
    it("returns normally distributed random numbers between 1 and 9", () => {
        const randomizer = new Randomizer(RandomMode.NORMAL);
        for (let i = 0; i < 10_000; i++) {
            const n = randomizer.randomBetween(1, 10)
            expect(n).toBeGreaterThanOrEqual(1)
            expect(n).toBeLessThanOrEqual(10)
        }
    })
    it("returns normally distributed random integers between 1 and 9", () => {
        const randomizer = new Randomizer(RandomMode.NORMAL);
        for (let i = 0; i < 10_000; i++) {
            const n = randomizer.randomIntBetween(1, 10)
            expect(n).toBeGreaterThanOrEqual(1)
            expect(n).toBeLessThanOrEqual(9)
        }
    })
    it("returns normally distributed random integers between 1 and 10", () => {
        const randomizer = new Randomizer(RandomMode.NORMAL);
        for (let i = 0; i < 10_000; i++) {
            const n = randomizer.randomIntBetweenInclusive(1, 10)
            expect(n).toBeGreaterThanOrEqual(1)
            expect(n).toBeLessThanOrEqual(10)
        }
    })
    it("returns the same seeded random numbers", () => {
        const randomizer = new Randomizer(RandomMode.NORMAL, "seed");
        const arr = [
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10)
        ]
        expect(arr).toEqual([6, 8, 2, 5, 9, 2, 5, 1, 7, 9])
    })

    it("returns gaussian distributed random numbers between 0 and 1", () => {
        const randomizer = new Randomizer(RandomMode.GAUSSIAN);
        for (let i = 0; i < 10_000; i++) {
            const n = randomizer.random()
            expect(n).toBeGreaterThanOrEqual(0)
            expect(n).toBeLessThanOrEqual(1)
        }
    })
    it("returns gaussian distributed random numbers between 1 and 9", () => {
        const randomizer = new Randomizer(RandomMode.GAUSSIAN);
        for (let i = 0; i < 10_000; i++) {
            const n = randomizer.randomBetween(1, 10)
            expect(n).toBeGreaterThanOrEqual(1)
            expect(n).toBeLessThanOrEqual(10)
        }
    })
    it("returns gaussian distributed random integers between 1 and 9", () => {
        const randomizer = new Randomizer(RandomMode.GAUSSIAN);
        for (let i = 0; i < 10_000; i++) {
            const n = randomizer.randomIntBetween(1, 10)
            expect(n).toBeGreaterThanOrEqual(1)
            expect(n).toBeLessThanOrEqual(9)
        }
    })
    it("returns gaussian distributed random integers between 1 and 10", () => {
        const randomizer = new Randomizer(RandomMode.GAUSSIAN);
        for (let i = 0; i < 10_000; i++) {
            const n = randomizer.randomIntBetweenInclusive(1, 10)
            expect(n).toBeGreaterThanOrEqual(1)
            expect(n).toBeLessThanOrEqual(10)
        }
    })
    it("returns the same seeded random numbers", () => {
        const randomizer = new Randomizer(RandomMode.GAUSSIAN, "seed");
        const arr = [
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10),
            randomizer.randomIntBetween(1, 10)
        ]
        expect(arr).toEqual([5, 4, 5, 5, 4, 5, 5, 6, 6, 5])
    })
})
