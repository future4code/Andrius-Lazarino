import { anoBissexto } from "./ex1";

describe("Ano bissexto", () => {
  it("Primeiro teste", () => {
    const ano = 2020;
    expect(anoBissexto(ano)).toBe(true);
  });
  it("Segundo teste", () => {
    const ano = 1996;
    expect(anoBissexto(ano)).toBe(true);
  });
  it("Terceiro teste", () => {
    const ano = 1600;
    expect(anoBissexto(ano)).toBe(true);
  });
});
