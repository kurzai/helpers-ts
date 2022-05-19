import { delay } from "../src/flow";

describe("flow", () => {
    it("should take 1 second", async () => {
        const t1 = Date.now();
        await delay(1000);
        const t2 = Date.now()

        expect(t2 - t1).toBeGreaterThanOrEqual(1000)
        expect(t2 - t1).toBeLessThanOrEqual(1010)
    })

    it("should take 1.5 second", async () => {
        const t1 = Date.now();
        await delay(1500);
        const t2 = Date.now()

        expect(t2 - t1).toBeGreaterThanOrEqual(1500)
        expect(t2 - t1).toBeLessThanOrEqual(1510)
    })
})
