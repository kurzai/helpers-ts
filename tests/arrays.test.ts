import { last, sortAsc, sortDesc } from "../src/arrays";

describe("arrays", () => {
    it("returns the last element of the array", () => {
        const arr = [1, 2, 3];
        expect(last(arr)).toBe(3);
    })
    it("returns the last element of the array", () => {
        const arr = [1];
        expect(last(arr)).toBe(1);
    })
    it("returns the last element of an empty array as undefined", () => {
        expect(last([])).toBeUndefined()
    })

    it("sorts the array of number ascending", () => {
        expect(sortAsc([3, 3, 1, 5, 2, 7, 6, 4]))
            .toEqual([1, 2, 3, 3, 4, 5, 6, 7])
    })
    it("sorts the array of number descending", () => {
        expect(sortDesc([3, 1, 5, 5, 2, 7, 6, 4]))
            .toEqual([7, 6, 5, 5, 4, 3, 2, 1])
    })
})
