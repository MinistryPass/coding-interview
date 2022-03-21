import { sum, superDigit } from "./functions";

describe("Array Sum Problem", () => {
  test("[1, 2, 3] = 6", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
  test("[1] = 1", () => {
    expect(sum([1])).toBe(1);
  });
  test("[10, 44, 1000, 2] = 1056", () => {
    expect(sum([10, 44, 1000, 2])).toBe(1056);
  });
  test("[22, 1, 22, 60] = 105", () => {
    expect(sum([22, 1, 22, 60])).toBe(105);
  });
});

describe("SuperDigit Problem", () => {
  test("('148', 3) = 3", () => {
    expect(superDigit("148", 3)).toBe(3);
  });
  test("('9875', 4) = 8", () => {
    expect(superDigit("9875", 4)).toBe(8);
  });
  test("('123', 3) = 9", () => {
    expect(superDigit("123", 3)).toBe(9);
  });
});
