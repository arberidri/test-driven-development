import { formatDuration } from "./duration";

test("33 are 33s", () => {
    
  expect(formatDuration(33)).toBe("33s");
});