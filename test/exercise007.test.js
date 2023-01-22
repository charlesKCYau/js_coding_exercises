import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,
} from "../challenges/exercise007";
  
  describe("sumDigits", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
      expect(sumDigits(1234)).toBe(10);
    });
  });
  
  describe("createRange", () => {
    test("returns ", () => {
        expect(createRange(3,11,2)).toStrictEqual([ 3, 5, 7, 9, 11 ]);
    });

  });
  
  describe("getScreentimeAlertList", () => {
    test("return true", () => {
      expect(getScreentimeAlertList([], "")).toBe(true);
    });
  });
  
  describe("hexToRGB", () => {
    test("returns true ", () => {
        expect(hexToRGB("")).toBe(true);
    });

  });
  
  describe("findWinner", () => {
    test("returns an array with the first and last items swapped", () => {
      expect(findWinner([])).toEqual(true);
    });
  
  });
  
  
  