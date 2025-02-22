import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
  } from "../challenges/exercise006";
  
  describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
      expect(sumMultiples([1, 2, 3, 4, 5, 6])).toBe(14);
    });

    test("returns 0 as without multiple of 3 or 5", () => {
      expect(sumMultiples([1, 2, 4])).toBe(0);
    });

    test("returns 0 as empty array", () => {
      expect(sumMultiples([])).toBe(0);
    });
  });
  
  describe("isValidDNA", () => {
    test("returns true depending on whether it is a valid DNA string C, T, G, A", () => {
        expect(isValidDNA("Cat")).toBe(true);
        expect(isValidDNA("Gate")).toBe(true);
        expect(isValidDNA("Table")).toBe(true);
        expect(isValidDNA("Apple")).toBe(true);
    });

    test("returns false due to no valid DNA string C, T, G, A", () => {
        expect(isValidDNA("cat")).toBe(false);
    });

  });
  
  describe("getComplementaryDNA", () => {
    test("get complementary DNA", () => {
      expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    });
  });
  
  describe("isItPrime", () => {
    test("returns true for 7", () => {
        expect(isItPrime(7)).toBe(true);
    });

    test("returns false for 8", () => {
        expect(isItPrime(8)).toBe(false);
    });
  });
  
  describe("createMatrix", () => {
    test("returns an array with the first and last items swapped", () => {
      expect(createMatrix(3, "foo")).toEqual(
        [
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"]
        ]
      );

      expect(createMatrix(2, "foo")).toEqual(
        [
            ["foo", "foo"],
            ["foo", "foo"]
        ]
      );

      expect(createMatrix(1, "foo")).toEqual(
        [
            ["foo"]
        ]
      );
    });
  
  });
  
  describe("areWeCovered", () => {
    test("returns true if there are num of staff >= 3", () => {
      expect(areWeCovered([
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Monday", "Tuesday", "Wednesday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Peppa", rota: ["Sunday", "Tuesday", "Wednesday"] }
      ], "Tuesday")).toEqual(true);
      
      expect(areWeCovered([
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Monday", "Tuesday", "Wednesday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Peppa", rota: ["Sunday", "Tuesday", "Wednesday"] }
      ], "Wednesday")).toEqual(true);
    });

    test("returns false if there are num of staff <>> 3", () => {
      expect(areWeCovered([
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Monday", "Tuesday", "Wednesday"] },
        { name: "Pedro", rota: ["Tuesday", "Wednesday"] },
        { name: "Peppa", rota: ["Tuesday", "Wednesday"] }
      ], "Friday")).toEqual(false);
      
      expect(areWeCovered([
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Monday", "Tuesday", "Wednesday"] },
        { name: "Pedro", rota: ["Tuesday", "Wednesday"] },
        { name: "Peppa", rota: ["Tuesday", "Wednesday"] }
      ], "Thursday")).toEqual(false);
    });
  });
  
  