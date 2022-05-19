import { asyncForEach, asyncFilter, asyncMap, asyncFind } from "../src/iters";

describe("iters", () => {
    it("should increase the counter to 6", async () => {
        let counter: number = 0;
        const arr: number[] = [1, 2, 3, 4, 5, 6];
        await asyncForEach(arr, _ => {
            counter++;
        })
        expect(counter).toBe(6);
    })
    it("should add up all the numbers of the array to 21", async () => {
        let counter: number = 0;
        const arr: number[] = [1, 2, 3, 4, 5, 6];
        await asyncForEach(arr, x => {
            counter += x;
        })
        expect(counter).toBe(21);
    })

    it("should return an array with only even numbers", async () => {
        const arr: number[] = [1, 2, 3, 4, 5, 6];
        const evens = await asyncFilter(arr, x => x % 2 === 0);

        expect(evens).toEqual([2, 4, 6]);
    })

    it("should return an array with doubled numbers", async () => {
        const arr: number[] = [1, 2, 3, 4, 5, 6];
        const evens = await asyncMap(arr, x => x * 2);

        expect(evens).toEqual([2, 4, 6, 8, 10, 12]);
    })

    it("should find the item with value 4", async () => {
        const arr: number[] = [1, 2, 3, 4, 5, 6];
        const n = await asyncFind(arr, x => x === 2);

        expect(n).toBe(2)
    })
})
