import { sorteiaNumero } from "./ex3";

describe("Sorteia Número", () => {
  it("Primeiro teste", () => {
    Math.random = jest.fn(() => {
      return 0.5;
    });

    console.log(Math.random());
    sorteiaNumero(1, 100);
  });
});
