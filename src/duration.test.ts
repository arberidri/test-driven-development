import { formatDuration } from "./duration"

describe("formatDuration - regular cases", () => {
    test("33 seconds should return '33s'", () => {
        expect(formatDuration(33)).toBe("33s");
    });

    test("123 seconds should return '2m3s'", () => {
        expect(formatDuration(123)).toBe("2m3s");
    });

    test("500 seconds should return '8m20s'", () => {
        expect(formatDuration(500)).toBe("8m20s");
    });

    test("3600 seconds should return '1h'", () => {
        expect(formatDuration(3600)).toBe("1h");
    });

    test("3999 seconds should return '1h6m39s'", () => {
        expect(formatDuration(3999)).toBe("1h6m39s");
    });
});

describe("formatDuration - edge cases", () => {
    test("0 seconds should return '0s'", () => {
        expect(formatDuration(0)).toBe("0s");
    });

    test("Negative seconds should throw an error", () => {
        expect(() => formatDuration(-10)).toThrow("Negative durations are not allowed");
    });

    test("Decimal seconds should be rounded", () => {
        expect(formatDuration(123.7)).toBe("2m4s");
        expect(formatDuration(59.4)).toBe("59s");
    });
});