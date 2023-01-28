import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,
} from "../challenges/exercise007";
  
  describe("sumDigits", () => {
    test("returns the sum of all its digits", () => {
      expect(sumDigits(1234)).toBe(10);
    });
  });
  
  describe("createRange", () => {
    test("returns ", () => {
        expect(createRange(3,11,2)).toStrictEqual([ 3, 5, 7, 9, 11 ]);
    });

  });
  
  describe("getScreentimeAlertList", () => {
    test("return one username", () => {
      expect(getScreentimeAlertList(
        [
         {
           username: "beth_1234",
           name: "Beth Smith",
           screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                       ]
          },
          {
           username: "sam_j_1989",
           name: "Sam Jones",
           screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                       ]
          },
        ]
       , "2019-05-04")).toStrictEqual(["beth_1234"]);
    });

    test("return empty", () => {
      expect(getScreentimeAlertList(
        [
         {
           username: "beth_1234",
           name: "Beth Smith",
           screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                       ]
          },
          {
           username: "sam_j_1989",
           name: "Sam Jones",
           screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                       ]
          },
        ]
       , "2019-06-11")).toStrictEqual([]);
    });

    test("return 2 username", () => {
      expect(getScreentimeAlertList(
        [
         {
           username: "beth_1234",
           name: "Beth Smith",
           screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                       ]
          },
          {
           username: "sam_j_1989",
           name: "Sam Jones",
           screenTime: [
                        { date: "2019-05-02", usage: { mapMyRun: 100, whatsApp: 0, facebook: 0, safari: 10} },
                        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                       ]
          },
        ]
       , "2019-05-02")).toStrictEqual(["beth_1234", "sam_j_1989"]);
    });
  });
  
  describe("hexToRGB", () => {
    test("returns positive case ", () => {
      expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
      expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
      expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
    });
  });
  
  describe("findWinner", () => {
    test("returns winner for vertical case", () => {
      expect(findWinner(
        [
         ["X", "0", null],
         ["X", null, "0"],
         ["X", null, "0"]
        ]       
      )).toEqual("X");

      expect(findWinner(
        [
         [null, "X", "0"],
         ["X", null, "0"],
         ["X", null, "0"]
        ]       
      )).toEqual("0");
    });

    test("returns winner for horizontal case", () => {
      expect(findWinner(
        [
        ["X", "X", "X"],
        ["0", null, "0"],
        [null, null, "0"]
        ]       
      )).toEqual("X");
    });

    test("returns null for no winner case", () => {
        expect(findWinner(
          [
          ["X", "X", null],
          ["0", null, "0"],
          [null, "X", "0"]
          ]       
        )).toEqual(null);
    });
});
  
  
  