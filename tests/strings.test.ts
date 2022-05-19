import { percDisplay, randomString, camelCase, encode64 } from "../src/strings";

describe("strings", () => {
    it("formats the decimal 0.3 as '30.00%'", () => {
        expect(percDisplay(0.3)).toBe("30.00%")
    })
    it("formats the decimal 1.3 as '130.00%'", () => {
        expect(percDisplay(1.3)).toBe("130.00%")
    })
    it("formats the decimal 0.512 as '51.20%'", () => {
        expect(percDisplay(0.512)).toBe("51.20%")
    })
    it("formats the decimal 0.42345 as '42.34%'", () => {
        expect(percDisplay(0.42345)).toBe("42.34%")
    })

    it("encodes 'TEST' as 'VEVTVA=='", () => {
        expect(encode64("TEST")).toBe("VEVTVA==")
    })
    it("encodes 'Test123' as 'VGVzdDEyMw=='", () => {
        expect(encode64("Test123")).toBe("VGVzdDEyMw==")
    })

    it("formats 'test' to 'Test'", () => {
        expect(camelCase("test")).toBe("Test")
    })
    it("formats 'Test' to 'Test'", () => {
        expect(camelCase("Test")).toBe("Test")
    })

    it("produces a random string", () => {
        expect(randomString(6).length).toBe(12)
    })
})
