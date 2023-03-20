import formatPhones from "../src/js/app";

test("test of formatPhones function", () => {
  const result = formatPhones("8 (978) 788-07-38");
  expect(result).toBe("+79787880738");
});
