import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("Primeiro teste", () => {
    const frase = "socorram-me subi no onibus em marrocos";
    expect(checaPalindromo(frase)).toBe(true);
  });
  it("Segundo teste", () => {
    const frase = "mirim";
    expect(checaPalindromo(frase)).toBe(true);
  });
});
